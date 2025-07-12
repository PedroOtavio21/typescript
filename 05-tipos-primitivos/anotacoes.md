# Aula 5 - Tipos primitivos

Assim como no JavaScript, os tipos primitivos são os mais básicos e mais utilizados

São aqueles que você normalmente obtém usando o operador `typeof`

Existem três mais utilizados

1. **boolean**: os valores que equivalem a **true** ou **false**

```ts
let example: boolean = true
```

2. **number**: como o JavaScript não diferencia inteiros e pontos flutuantes, 
tudo é apeenas considerado como number também no TypeScript

```ts
let example: number = 22
```

3. **strig**: valores de texto, como "Hello, world!"

```ts
let example: string = 'Hello'
```

Além disso, temos também o **Array**, que representa as listas de dados

- A sintaxe básica para especificar um array é utilizando o tipo dos seus elementos.
  Por exemplo, `string[]` ou `number[]`

```ts
let example: number[] = [1,2,3,4]

Array<number> = [1,2,3,4]
```

- Idealmente, usamos arrays como sendo uma lista onde todos os elementos têm o **mesmo tipo**, mas 
  esse comportamento também pode ser evitado 