class DataLayer {
  constructor(name) {
    this.name = name;
    this.clear();
    this.setAll();
  }

  getAll() {
    let objData = localStorage.getItem(this.name);

    try {
      objData = JSON.parse(objData);
    } catch (err) {
      return {};
    }

    return objData;
  }

  setAll(objData) {
    if (!objData || typeof objData != 'object') return null;

    let strData;

    try {
      strData = JSON.stringify(objData);
    } catch (err) {
      console.warn(err);
      return null;
    }

    localStorage.setItem(this.name, strData);
  }

  get(item) {
    const objData = this.getAll();
    if (!objData[item]) return null;
    return objData[item];
  }

  set(item, value) {
    if (!item || !value) return null;

    const objData = this.getAll();

    objData[item] = value;

    this.setAll(objData);

    return true;
  }

  remove(item) {
    if (!item || typeof item != 'string') return null;

    var objData = this.getAll();

    if (typeof objData[item] == 'undefined') return null;

    delete objData[item];

    this.setAll(objData);

    return true;
  }

  clear() {
    localStorage.setItem(this.name, '{}');
  }
}

const kubitRecognition = window.webkitSpeechRecognition;

if (!('webkitSpeechRecognition' in window)) {
  alert('Seu navegador não suporta os recursos de voz do Jogo. Por favor, Utilize o Google Chrome');
}

class Recognition {
  constructor({ namespace }) {
    this.doc = document;
    this.dataLayer = new DataLayer(namespace);
    this.finalTranscript = '';
    this.recognizing = false;
    this.recognition = new kubitRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'pt-BR';

    this.dataLayer.set('phrases', []);

    this.startListeners();
  }

  startListeners() {
    this.recognition.onstart = ((event) => {
      this.recognizing = true;
    }).bind(this);
    this.recognition.onerror = this.onerror.bind(this);
    this.recognition.onend = this.onend.bind(this);
    this.recognition.onresult = this.onresult.bind(this);

    this.doc.addEventListener('recognition.start', this.startRecognition.bind(this));
    this.doc.addEventListener('recognition.stop', this.endRecognition.bind(this));
  }

  start() {
    const evt = new CustomEvent('recognition.start');
    this.doc.dispatchEvent(evt);
  }

  stop() {
    const evt = new CustomEvent('recognition.stop');
    this.doc.dispatchEvent(evt);
  }

  onresult(event) {
    let interimTranscript = '';

    for (var i = event.resultIndex; i < event.results.length; ++i) {
      const {transcript} = event.results[i][0];

      if (event.results[i].isFinal) {
        this.finalTranscript += transcript;
        this.endRecognition();
      } else {
        interimTranscript += transcript;
      }
    }

    if (this.finalTranscript || interimTranscript) return;
  }

  onend(event) {
    this.recognizing = false;
    if (this.ignoreOnEnd) return;
    if (!this.finalTranscript) return;
  }

  onerror(event) {
    this.ignoreOnEnd = true;
    return console.warn(event.error);
  }

  startRecognition(event) {
    this.finalTranscript = '';

    try {
      this.recognition.start();
    } catch (err) {
      console.warn(err);
      return this.stopRecognition();
    }

    this.ignoreOnEnd = false;
    this.startTimeStamp = event.timeStamp;
  }

  stopRecognition() {
    this.recognizing = false;
    return this.recognition.stop();
  }

  saveTranscription() {
    const transcription = this.finalTranscript || this.interimTranscript;
    const data = this.dataLayer.getAll();

    const phrase = {
      transcriptionId: data.transcriptionId || Math.floor(Date.now() / 1000),
      transcription: transcription?.toLowerCase() || 'no transcripted',
    };

    this.dataLayer.set('phrases', [...data.phrases, phrase]);

    const evt = new CustomEvent('recognition.end', { detail: phrase });
    this.doc.dispatchEvent(evt);
  }

  endRecognition() {
    this.stopRecognition();

    return setTimeout((() => this.saveTranscription()).bind(this), 300);
  }
}

export { Recognition };
