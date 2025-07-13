function sendSpacheship(name: string, captain: string){
    const spacheship = {
        name,
        captain, 
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spacheship.name} é comandada pelo capitão ${spacheship.captain} foi enviada em uma missão`)
    return spacheship
}

function accelerate(targetSpeed: number, spaceship: {name: string, speed: number}){
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo velocidade da ${spaceship.name} para ${targetSpeed}...`)
    } else if (spaceship.speed < targetSpeed){
        alert(`Aumentando velocidade da ${spaceship.name} para ${targetSpeed}...`)
    } else {
        alert(`Mantendo a velocidade da ${spaceship.name}`)
    }
}

const spaceshipName = prompt(`Insira o nome da nave a ser enviada:`)
const spaceshipCaptain = prompt(`Insira o nome do capitão da nave:`)

const currentShip = sendSpacheship(spaceshipName, spaceshipCaptain)

const speed = Number(prompt(`Insira a velocidade para qual deseja acelerar.`))

accelerate(speed, currentShip)