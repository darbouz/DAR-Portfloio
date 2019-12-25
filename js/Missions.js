function Missions() {
    this.active = 0;
    this.missions = [{
        name : "WISDOM SCHOOL",
        description: "Creation of a web application for school management and a chat platform",
        tasks : ["Front-End : JQuery,Ajax","Back-End : Laravel","DataBase : MySQL","DevOps"]
    },{
        name : "CREATIVE BRAINS",
        description: "Participation in the creation of a “Creative Brain” social networking mobile application for creative people",
        tasks : ["Front-End : JavaScript,PhoneGap","Back-End : PHP","DataBase : MySQL"]
    },{
        name : "DTRAVEL",
        description: "Participation in the creation of a “DTravel” website for the geolocation of monuments for tourists",
        tasks : ["Front-End : JQuery,Ajax","Back-End : Laravel","DataBase : MySQL","DevOps"]
    }];
    this.name = document.getElementById("mission-name");
    this.description = document.getElementById("description");
    this.tasks = document.getElementById("tasks");
}

Missions.prototype.show = function (index) {
    this.name.innerHTML = this.missions[index].name;
    this.description.innerHTML = this.missions[index].description;
    let tasks = this.missions[index].tasks;
    let isDone = "done";
    this.tasks.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        if(i === 3 || (i===2 && index===2)) isDone = "not-done";
        this.tasks.innerHTML += "<div class=\""+isDone+"\">\n" +
            "                    <span class=\"check-icon\"><i class=\"fas fa-check\"></i></span>\n" +
            "                    <span class=\"faculty\">"+tasks[i]+"</span>\n" +
            "                </div>";
    }
};

Missions.prototype.changeTo = function(index){
    document.getElementById("m-"+this.active).classList.remove("height-lighted");
    document.getElementById("m-"+index).classList.add("height-lighted");
    missions.show(index);
    this.active = index;
};
let missions = new Missions();
missions.show(0);
