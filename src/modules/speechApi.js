/**
 * Web Speech Synthesis API
 */

const synthesis = window.speechSynthesis;

export function speak(text, onEndCallback, onErrorCallback) {
  const voices = synthesis.getVoices();
  const storyteller = voices.find(voice => voice.lang === 'pt-BR' && voice.name === 'Luciana');

  if (synthesis.speaking) {
    return;
  }

  if (text !== '') {
    const utterThis = new SpeechSynthesisUtterance(text);

    utterThis.onend = function(event) {
      console.log('SpeechSynthesisUtterance.onend');

      if (onEndCallback) {
        onEndCallback();
      }
    }

    utterThis.onerror = function(event) {
      console.error('SpeechSynthesisUtterance.onerror');

      if (onErrorCallback) {
        onErrorCallback();
      }
    }

    utterThis.voice = storyteller;
    utterThis.pitch = 1;
    utterThis.rate = 1;

    synthesis.speak(utterThis);
  }
}
