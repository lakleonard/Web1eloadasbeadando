function saveToStorage() {
    const input = document.getElementById('storageInput');
    const message = document.getElementById('storageMessage');
  
    if (input.value.trim() === "") {
      message.textContent = "Töltse ki a mezőt, hogy elmentse!";
      message.style.color = "red";
    } else {
      localStorage.setItem('storedData', input.value);
      message.textContent = "Adat sikeresen elmentve!";
      message.style.color = "green";
      input.value = "";  // Törli a bevitelt
    }
  }
  
  function loadFromStorage() {
    const storedData = localStorage.getItem('storedData');
    const message = document.getElementById('storageMessage');
  
    if (storedData) {
      message.textContent = `Betöltött adat: ${storedData}`;
      message.style.color = "blue";
    } else {
      message.textContent = "Nincs mentett adat!";
      message.style.color = "orange";
    }
  }


let worker;
function startWorker() {
    if (window.Worker) {
        if (!worker) {
            worker = new Worker("worker.js");
            worker.onmessage = function (e) {
                document.getElementById("workerResult").innerText = e.data;
            };
        }
        worker.postMessage("start");
    } else {
        alert("A böngésző nem támogatja a Web Worker funkciót!");
    }
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
            document.getElementById("location").innerText =
                `Lat: ${pos.coords.latitude}, Lon: ${pos.coords.longitude}`;
        });
    } else {
        document.getElementById("location").innerText = "A geolokáció nem támogatott.";
    }
}



function drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
  }
  

  const draggables = document.querySelectorAll(".draggable");
  const dropzones   = document.querySelectorAll(".dropzone");
  
  draggables.forEach(item => {
    item.addEventListener("dragstart", drag);
  });
  
  dropzones.forEach(zone => {
    zone.addEventListener("dragover", ev => {
      ev.preventDefault();
      zone.classList.add("dragover");
    });
    zone.addEventListener("dragleave", () => {
      zone.classList.remove("dragover");
    });
    zone.addEventListener("drop", ev => {
      ev.preventDefault();
      zone.classList.remove("dragover");
      const id = ev.dataTransfer.getData("text/plain");
      const elem = document.getElementById(id);
      zone.appendChild(elem);
    });
  });

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function drawCircle() {
  clearCanvas();
  ctx.beginPath();
  ctx.arc(150, 100, 50, 0, 2 * Math.PI); // középpont (150,100), sugár 50
  ctx.fillStyle = '#00bfff';              // világoskék szín
  ctx.fill();
  ctx.stroke();
}

function drawRectangle() {
  clearCanvas();
  ctx.fillStyle = '#0077aa';               // sötétebb kék szín
  ctx.fillRect(100, 70, 100, 60);           // kezdőpont (100,70), szélesség 100, magasság 60
  ctx.strokeRect(100, 70, 100, 60);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
