let btRandom = document.getElementById("btRandom");
let tfNumber = document.getElementById("tfNumber");

let memList = [
    "cherprang", "izurina", "jaa", "jane", "jennis", "jib", "kaew", "kaimook",
    "kate", "korn", "mind", "miori", "mobile", "music", "namneung", "namsai",
    "noey", "orn", "pun", "pupe", "satchan", "tarwaan", "aom", "bamboo", "cake",
    "deenee", "faii", "fifa", "fond", "gygee", "june", "khamin", "kheng", "maira",
    "mewnich", "minmin", "myyu", "natherine", "new", "niky", "nine", "nink", "oom",
    "pakwan", "panda", "phukkhom", "piam", "ratah", "stang", "view", "wee"
];

let randList = [];
let randIdx = 0;

function getRandomNumber() {
    let n = Math.floor(Math.random() * memList.length);
    let name = memList[n];
    randList[randIdx] = name;
    randIdx += 1
    return name;
}

let col = 1;
let row = 1;

function random() {
    let tfNumber = document.getElementById("tfNumber");
    let i = 0;
    let max = 5 * tfNumber.value;
    let delay = 100;
    let addBNK;

    addBNK = function () {
        let divCol = document.createElement("div");
        divCol.className = "column";
        divCol.id = "divRow" + row + "Col" + col;
        let divColumn = document.getElementById("flexible")
        divColumn.appendChild(divCol);

        let divPane = document.createElement("div");
        divPane.className="pane";
        divPane.id="paneRow"+row+"Col"+col;
        let div = document.getElementById("divRow" + row + "Col" + col);
        div.append(divPane);

        let divClose = document.createElement("div");
        divClose.className = "blackPane";
        divClose.setAttribute("onclick", "flip(this)");
        divClose.innerHTML = "?";

        let bnk = document.createElement("img");
        let n = getRandomNumber();
        bnk.src = "Member_Img_sng5/" + n + "_sng5.png";
        bnk.alt = n + ".png";
        bnk.className = "bnkPhotoSet";
        bnk.id = "bnkPhotoFlip" + i;
        // bnk.setAttribute("onclick", "flip(this)");
        let pane = document.getElementById("paneRow" + row + "Col" + col);
        pane.append(divClose, bnk);


        // let memName = getRandomNumber();

        // cardHTML = `
        // <div class="column">
        //     <div class="blackPane" onclick="flip(this)"></div>
        //     <img src="Member_Img_sng5/${memName}_sng5.png" alt=${memName} class="bnkPhotoSet">
        // </div>
        // `;

        // document.getElementById("flexible").innerHTML += cardHTML;

        col += 1
        if (col > 5) {
            col = 1;
            row += 1
        }
        if (i++ < max - 1) {
            setTimeout(addBNK, delay);
        }
    }
    addBNK();
}

function flip(closeCard) {
    closeCard.classList.remove("blackPane");
}

btRandom.addEventListener("click", function () {
    random();
});

tfNumber.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        random();
    }
});