const spaceship = {
    name: 'X-Wing', // string
    speed: 0 // number
}

function accelerate(spaceship: { name: string; speed: number }, speed: number) {
    spaceship.speed = speed
}

accelerate(spaceship, 50)