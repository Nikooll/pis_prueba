var servoPinza = 0
var servoDerecha = 0
var servoIzquierda = 0
var servoBase = 0
var interval = null

var servoPinzaAbrir = document.getElementById("servoPinzaAbrir");
var servoPinzaCerrar = document.getElementById("servoPinzaCerrar");
var servoDerechaAbrir = document.getElementById("servoDerechaAbrir");
var servoDerechaCerrar = document.getElementById("servoDerechaCerrar");
var servoIzquierdaAbrir = document.getElementById("servoIzquierdaAbrir");
var servoIzquierdaCerrar = document.getElementById("servoIzquierdaCerrar");
var servoBaseIzq = document.getElementById("servoBaseIzq");
var servoBaseDer = document.getElementById("servoBaseDer");

servoPinzaAbrir.addEventListener('mousedown', () => {
    if (!interval) {
        interval = setInterval(() => {
            if (servoPinza < 180) {
                servoPinza++
                console.log(servoPinza)
                sendButtonInput("Pinza", servoPinza);
            }
        }, 50)
    }
})

document.addEventListener('mouseup', () => {
    clearInterval(interval)
    interval = null
})

servoPinzaCerrar.addEventListener('mousedown', () => {
    if (!interval) {
        interval = setInterval(() => {
            if (servoPinza > 0) {
                servoPinza--
                console.log(servoPinza)
                sendButtonInput("Pinza", servoPinza);
            }
        }, 50)
    }
})

servoDerechaAbrir.addEventListener('mousedown', () => {
    if (!interval) {
        interval = setInterval(() => {
            if (servoDerecha < 180) {
                servoDerecha++
                console.log(servoDerecha)
                sendButtonInput("Derecha", servoDerecha);
            }
        }, 50)
    }
})

servoDerechaCerrar.addEventListener('mousedown', () => {
    if (!interval) {
        interval = setInterval(() => {
            if (servoDerecha > 0) {
                servoDerecha--
                console.log(servoDerecha)
                sendButtonInput("Derecha", servoDerecha);
            }
        }, 50)
    }
})

servoIzquierdaAbrir.addEventListener('mousedown', () => {
    if (!interval) {
        interval = setInterval(() => {
            if (servoIzquierda < 180) {
                servoIzquierda++
                console.log(servoIzquierda)
                sendButtonInput("Izquierda", servoIzquierda);
            }
        }, 50)
    }
})

servoIzquierdaCerrar.addEventListener('mousedown', () => {
    if (!interval) {
        interval = setInterval(() => {
            if (servoIzquierda > 0) {
                servoIzquierda--
                console.log(servoIzquierda)
                sendButtonInput("Izquierda", servoIzquierda);
            }
        }, 50)
    }
})

servoBaseIzq.addEventListener('mousedown', () => {
    if (!interval) {
        interval = setInterval(() => {
            if (servoBase < 180) {
                servoBase++
                console.log(servoBase)
                sendButtonInput("Base", servoBase);
            }
        }, 50)
    }
})

servoBaseDer.addEventListener('mousedown', () => {
    if (!interval) {
        interval = setInterval(() => {
            if (servoBase > 0) {
                servoBase--
                console.log(servoBase)
                sendButtonInput("Base", servoBase);
            }
        }, 50)
    }
})

function initCameraWebSocket() {
    websocketCamera = new WebSocket('ws://' + '192.168.17.1' + '/Camera');
    websocketCamera.binaryType = 'blob';
    websocketCamera.onopen = function (event) {
    };
    websocketCamera.onclose = function (event) {
        setTimeout(initCameraWebSocket, 2000);
    };
    websocketCamera.onmessage = function (event) {
        var imageId = document.getElementById("cameraImage");
        imageId.src = URL.createObjectURL(event.data);
    };
}

function initServoInputWebSocket() {
    websocketServoInput = new WebSocket('ws://' + '192.168.17.1' + '/ServoInput');
    websocketServoInput.onopen = function (event) {
        sendButtonInput("Pinza", servoPinza);
        sendButtonInput("Derecha", servoDerecha);
        sendButtonInput("Izquierda", servoIzquierda);
        sendButtonInput("Base", servoBase);
    };
    websocketServoInput.onclose = function (event) {
        setTimeout(initServoInputWebSocket, 2000);
    };
    websocketServoInput.onmessage = function (event) {
    };
}

function initWebSocket() {
    initCameraWebSocket();
    initServoInputWebSocket();
}

function sendButtonInput(key, value) {
    var data = key + "," + value;
    websocketServoInput.send(data);
}

window.onload = function () {
    initWebSocket();
}
