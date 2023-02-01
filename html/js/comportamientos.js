let elementosDesplegar = document.getElementsByClassName("desplegar");

for (let i = 0; i < elementosDesplegar.length; i++) {
    elementosDesplegar[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display == "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
};

/*let navHab = document.getElementById("navHab");
let HAB = document.getElementById("HAB");

navHab.addEventListener("click", function () {
    if (HAB.classList.contains("panel")) {
        HAB.classList.remove("panel");
        } else {
        HAB.classList.add("panel");
        }
});

let navDat = document.getElementById("navDat");
let DAT = document.getElementById("DAT");

navDat.addEventListener("click", function () {
    if (DAT.classList.contains("panel")) {
        DAT.classList.remove("panel");
        } else {
        DAT.classList.add("panel");
        }
});

let navExp = document.getElementById("navExp");
let EXP = document.getElementById("EXP");

navExp.addEventListener("click", function () {
    if (EXP.classList.contains("panel")) {
        EXP.classList.remove("panel");
        } else {
        EXP.classList.add("panel");
        }
});

let navForm = document.getElementById("navForm");
let FORM = document.getElementById("FORM");

navForm.addEventListener("click", function () {
    if (FORM.classList.contains("panel")) {
        FORM.classList.remove("panel");
        } else {
        FORM.classList.add("panel");
        }
});*/