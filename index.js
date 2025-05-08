const screenDisplay = document.getElementById("screenDisplay");

function clear() {
  const clear = document.getElementById("clearButton");
  clear.addEventListener("click", () => {
    if (screenDisplay.innerText === "0") {
      console.log("aucun text a clear");
    } else {
      screenDisplay.innerText = "0";
    }
  });
}

function zero() {
  const zero = document.getElementById("zeroButton");
  zero.addEventListener("click", () => {
    if (screenDisplay.innerText === "0") {
      screenDisplay.innerText = "0";
    } else {
      screenDisplay.innerText += "0";
    }
  });
}

function un() {
  const un = document.getElementById("unButton");
  un.addEventListener("click", () => {
    if (screenDisplay.innerText === "0") {
      screenDisplay.textContent = "1";
    } else {
      screenDisplay.innerText += "1";
    }
  });
}

function deux() {
  const deux = document.getElementById("deuxButton");
  deux.addEventListener("click", () => {
    if (screenDisplay.innerText === "0") {
      screenDisplay.textContent = "2";
    } else {
      screenDisplay.innerText += "2";
    }
  });
}

function trois() {
  const trois = document.getElementById("troisButton");
  trois.addEventListener("click", () => {
    if (screenDisplay.innerText === "0") {
      screenDisplay.textContent = "3";
    } else {
      screenDisplay.innerText += "3";
    }
  });
}

function quatre() {
  const quatre = document.getElementById("quatreButton");
  quatre.addEventListener("click", () => {
    if (screenDisplay.innerText === "0") {
      screenDisplay.textContent = "4";
    } else {
      screenDisplay.innerText += "4";
    }
  });
}

function cinq() {
  const cinq = document.getElementById("cinqButton");
  cinq.addEventListener("click", () => {
    if (screenDisplay.innerText === "0") {
      screenDisplay.textContent = "5";
    } else {
      screenDisplay.innerText += "5";
    }
  });
}

function six() {
  const six = document.getElementById("sixButton");
  six.addEventListener("click", () => {
    if (screenDisplay.innerText === "0") {
      screenDisplay.textContent = "6";
    } else {
      screenDisplay.innerText += "6";
    }
  });
}

function sept() {
  const sept = document.getElementById("septButton");
  sept.addEventListener("click", () => {
    if (screenDisplay.innerText === "0") {
      screenDisplay.textContent = "7";
    } else {
      screenDisplay.innerText += "7";
    }
  });
}

function huit() {
  const huit = document.getElementById("huitButton");
  huit.addEventListener("click", () => {
    if (screenDisplay.innerText === "0") {
      screenDisplay.textContent = "8";
    } else {
      screenDisplay.innerText += "8";
    }
  });
}

function neuf() {
  const neuf = document.getElementById("neufButton");
  neuf.addEventListener("click", () => {
    if (screenDisplay.innerText === "0") {
      screenDisplay.textContent = "9";
    } else {
      screenDisplay.innerText += "9";
    }
  });
}

clear();
zero();
un();
deux();
trois();
quatre();
cinq();
six();
sept();
huit();
neuf();

let displayContent = screenDisplay.textContent;

let stockDisplay = displayContent;

console.log(stockDisplay);
