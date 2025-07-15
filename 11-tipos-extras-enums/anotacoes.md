# Aula 11 - Tipos extras: enums

Nessa aula, veremos um tipo extra próprio do TypeScript, do qual não existe no JavaScript: Enums!

## O que são?

1. São como um conjunto de constantes que podem receber valores, dos quais poderão ser reutilizáveis no código

Ex.:

```ts
// Feito da maneira abaixo, cada enum retornará um valor, iniciando em 0 e sendo incrementado no próximo (0, 1, 2, ...)
enum Planets {
    MERCURIO,
    VENUS,
    TERRA,
    MARTE
}

Planets.MARTE // 3
```

2. Podem receber qualquer tipo de valor em suas variáveis, sendo bastante útil em códigos extensos!

```ts
enum Operation {
    SUM = '+',
    SUBTRACT = '-'
    MULTIPLICATION = '*'
    DIVISION = '/'
}
```