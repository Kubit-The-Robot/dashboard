export function initWebsockets() {
  const ws = new WebSocket('wss://websocket.kubitbot.com.br');

  ws.onopen = function() {
    console.log('connection is open');
  };

  ws.onmessage = function(e) {
    if (e.data == 'PING') {
      ws.send('PONG');
    }

    console.log(e.data);
  };

  ws.onclose = function(e) {
    console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
    setTimeout(function() {
      initWebsockets();
    }, 1000);
  };

  ws.onerror = function(err) {
    console.error('Socket encountered error: ', err.message, 'Closing socket');
    ws.close();
  };

  document.addEventListener('kubit.message', (e) => {
    const status = e.detail;

    if (ws.readyState === 0) {
      return;
    };

    ws.send(status);
  });
}