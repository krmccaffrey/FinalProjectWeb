
banners = document.getElementById("banners");
banner = document.getElementById("banner");
racetrack = document.getElementById("racetrack");
resError = document.getElementById("resError");
ship1 = document.getElementById("ship1");
ship2 = document.getElementById("ship2");
contField = document.getElementById("control");
contImage = document.getElementById("controls");

var windWidth;
var aniTimer;

if (self.innerWidth) {
    windWidth = self.innerWidth;
}
if (document.documentElement && document.documentElement.clientWidth) {
    windWidth = document.documentElement.clientWidth;
}
if (document.body) {
    windWidth = document.body.clientWidth;
}
banners.width = windWidth;
racetrack.width = windWidth;
contField.width = windWidth;

if (windWidth < 800) {
    racetrack.style.display = "none";
    contField.style.display = "none";
    resError.style.display = "block";
    resError.width = windWidth;
}

function startRace() {
    var xwidth = parseInt(windWidth);
    banner.src = "greenbgLogo.JPG";
    if (xwidth < 1200) {
        contImage.src = "fballTransp.png";
    }
    if (xwidth >= 1200) {
        contImage.src = "fballTransp.png";
    }
    ship1.style.left = "0px";
    ship2.style.left = "0px";
    raceCont();
}


function raceCont() {
    var x1 = parseInt(ship1.style.left);
    var x2 = parseInt(ship2.style.left);
    var xwidth = parseInt(windWidth);
    var xfinal;

    var randNum1 = Math.floor(Math.random() * (13 - 1) + 1);
    var randNum2 = Math.floor(Math.random() * (13 - 1) + 1);


    if (xwidth < 1200) {
        xfinal = 90;
    }
    if (xwidth >= 1200) {
        xfinal = 182;
    }
    xfinal = (xwidth - xfinal);


    x1 = x1 + randNum1;
    x2 = x2 + randNum2;


    if (x1 >= xfinal || x2 >= xfinal) {
        clearTimeout(aniTimer);
        if (x1 >= xfinal) {
            banner.src = "greenbgGoMiz.JPG";
        }
        if (x2 >= xfinal) {
            banner.src = "greenbgGOBEARS.JPG";
        }
        if (x2 >= xfinal && x1 >= xfinal) {
            banner.src = "RacingBanners_Tied.png"
        }
        if (xwidth < 1200) {
            contImage.src = "greenbgFootballGo.JPG";
        }
        if (xwidth >= 1200) {
            contImage.src = "greenbgFootballGo.JPG";
        }
        racetrack.style.backgroundColor = "transparent";
    }


    if (x1 < xfinal && x2 < xfinal) {
        if (x1 != xfinal && x1 < xfinal) {
            ship1.style.left = x1 + "px";
        }
        else if (x1 > xfinal) {
            ship1.style.left = xfinal + "px";
        }

        if (x2 != xfinal && x2 < xfinal) {
            ship2.style.left = x2 + "px";
        }
        else if (x2 > xfinal) {
            ship2.style.left = xfinal + "px";
        }
        aniTimer = setTimeout(raceCont, 25);
    }
}
