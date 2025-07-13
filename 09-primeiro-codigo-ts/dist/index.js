function sendSpacheship(name, captain) {
    var spacheship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spacheship.name, " \u00E9 comandada pelo capit\u00E3o ").concat(spacheship.captain, " foi enviada em uma miss\u00E3o"));
    return spacheship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name));
    }
}
var spaceshipName = prompt("Insira o nome da nave a ser enviada:");
var spaceshipCaptain = prompt("Insira o nome do capit\u00E3o da nave:");
var currentShip = sendSpacheship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt("Insira a velocidade para qual deseja acelerar."));
accelerate(speed, currentShip);
