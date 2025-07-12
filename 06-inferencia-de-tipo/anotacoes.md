# Aula 6 - Inferência de tipo

Geralmente, quando atribuimos algum valor a uma variável, a linguagem/ide já identifica o tipo da variável, mesmo que isso não seja especificado

```ts
const spaceship = {
    name: 'X-Wing', // reconhece como string
    speed: 0 // reconhece como number
}
```

```ts
function accelerate(spaceship: { name: string; speed: number }, speed: number) {
    spaceship.speed = speed
}

accelerate(spaceship, 50) // reconhece que receberá um objeto e um number
```