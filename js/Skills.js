function Skills() {
    this.skills = [["Front-End",{
        name: "JAVASCRIPT",
        icon: "fab fa-js-square",
        color: "yellow"
    },{
        name: "ANGULAR",
        icon: "fab fa-angular",
        color: "red"
    },{
        name: "CSS",
        icon: "fab fa-css3",
        color: "light-blue"
    },{
        name: "HTML",
        icon: "fab fa-html5",
        color: "orange"
    }],["Back-End",
        {
            name: "NODE.JS",
            icon: "fab fa-node-js",
            color: "green"
        },{
            name: "LARAVEL (PHP)",
            icon: "fab fa-laravel",
            color: "red"
        },{
            name: "JAVA",
            icon: "fab fa-java",
            color: "blue"
        },{
            name: "Python",
            icon: "fab fa-python",
            color: "yellow"
        }
    ],["Data-Bases",
        {
            name: "MONGODB",
            icon: "fas fa-leaf",
            color: "green"
        },{
            name: "MYSQL",
            icon: "fas fa-database",
            color: "blue"
        }
    ]];
    this.currentCategory = 0;
    this.items = document.getElementById("skill-items");
    this.categoryName = document.getElementById("skill-category");
    this.currentSkill = 1;
}

Skills.prototype.showCategory = function (index) {
    this.items.innerHTML = "";
    document.getElementById("bc-"+this.currentCategory).classList.remove("height-lighted");
    document.getElementById("bc-"+index).classList.add("height-lighted");

    let skills = this.skills[index];
    this.categoryName.innerHTML = skills[0];
    for (let i = 1; i < skills.length; i++) {
        this.items.innerHTML += `<div onclick='skills.showSkill(${i})' id='skill-${i}' class=\"skill\">\n` +
            "                        <img src=\"img/square.png\" alt=\"\" srcset=\"\" height=\"70px\" width=\"70px\">\n" +
            "                        <div class=\"tri\"></div>\n" +
            "                        <i class=\""+skills[i].icon+" skill-icon "+skills[i].color+"\"></i>\n" +
            "                    </div>";
    }
    for (let i = skills.length; i < 13; i++) {
        this.items.innerHTML += `<div id='skill-${i}' class=\"skill\">\n` +
            "                        <img src=\"img/square.png\" alt=\"\" srcset=\"\" height=\"70px\" width=\"70px\">\n" +
            "                    </div>";
    }
    this.currentCategory = index;
    this.showSkill();
};

Skills.prototype.showSkill = function(index){
    if(index === undefined) index = 1;
    else
        document.getElementById("skill-"+ this.currentSkill).classList.remove("height-lighted");
    let currentSkill = this.skills[this.currentCategory][index];
    document.getElementById("skill-"+index).classList.add("height-lighted");
    document.getElementById("displayed-skill-name").innerHTML = currentSkill.name;
    document.getElementById("displayed-skill-icon").innerHTML = "<i class=\" "+currentSkill.icon+" displayed-skill-icon "+currentSkill.color+"\"></i>";
    this.currentSkill = index;

};

let skills = new Skills();
skills.showCategory(0);
