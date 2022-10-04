class Image{
    constructor(imgLoc, desc, desc2)
    {
        this.imgLoc = imgLoc;
        this.desc = desc;
        this.desc2 = desc2;
    }
}

const itemsArray = [
    new Image("images/pudu/daily/pudu_madre_hijo.gif","Familia pudú", "Hoy es domingo de:"),
    new Image("images/pudu/daily/pudu_orejitas.gif","Pudú orejitas", "Hoy es lunes de:"),
    new Image("images/pudu/daily/pudu_360.gif","Pudú 360°", "Hoy es martes de:"),
    new Image("images/pudu/daily/pudu_albino.gif","Pudú albino", "Hoy es miércoles de:"),
    new Image("images/pudu/daily/pudu_comer.gif","Pudú hambriento", "Hoy es jueves de:"),
    new Image("images/pudu/daily/pudu_facha.gif","Pudú fachero", "Hoy es viernes de:"),
    new Image("images/pudu/daily/pudu_amor.gif","Pudú amor", "Hoy es sábado de:")
];

function displayImage(index) {
    document.getElementById("dailypudu_text2").innerHTML = itemsArray[ index ].desc2;
    document.getElementById("dailypudu_text").innerHTML = itemsArray[ index ].desc;
    document.getElementById("dailypudu_img").src = itemsArray[ index ].imgLoc;
}

const d = new Date();
let day = d.getDay();

displayImage(day);