function Education() {
    this.education = [{
        name: "bac",
        year: 2015,
        note: ["Science physic & chemistry", "SCHOOL - Ibn El Khatib", "CITY - El-Hajeb"],
        img: "img/bacc.png"
    }, {
        name: "deust",
        year: 2017,
        note: ["Math,Physics, Computer science", "FACULTY - FST", "CITY - FEZ"],
        img: "img/deust.png"
    }, {
        name: "licence",
        year: 2018,
        note: ["Computer Engineering", "FACULTY - FST", "CITY - FEZ"],
        img: "img/licence.png"
    }, {
        name: "master",
        year: "Still",
        note: ["Software Quality", "FACULTY - Science Faculty", "CITY - FEZ"],
        img: "img/master.png"
    }];

    this.yearTag = document.getElementById("year-education");
    this.noteTag = document.getElementById("note-education");
    this.imgTag = document.getElementById("img-education");
}

Education.prototype.show = function (index) {
    this.yearTag.innerHTML = this.education[index].year;
    this.imgTag.setAttribute("src", this.education[index].img);
    this.noteTag.innerHTML = "";
    for (let i = 0; i < this.education[index].note.length; i++) {
        const element = this.education[index].note[i];
        this.noteTag.innerHTML += `<div>
                                        <span class="square-icon"><i class="fas fa-square"></i></span>
                                        <span>${element}</span>
                                    </div>`;
    }
}

var education = new Education();
education.show(0);