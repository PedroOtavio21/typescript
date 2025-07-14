# Aula 10 - Tipos extras: Tuplas

Nesta aula, discutiremos como as tuplas funcionam 

## Arrays vs. Tuplas

1. Geralmente, quando se trabalhamos com arrays no typescript, eles funcionam como em outras linguagens de programação, sendo limitados a seu tipo

```ts
let crew: string[] = []

crew.push('Pedro', 'João', 'Davi') // OK!

crew.push('Victor', 10, true) // Este código gerará um erro!
```

2. Já as tuplas, funcionam com arrays específicos, onde você já determina seu tamanho de início, além da tipagem de seus possíveis elementos a serem adicionados, ou seja, multiplos tipos de valores.

```ts
let point: [number, number] = [] // declaração de tuplas

point = [10, 15] // OK!
point = [2.5, 5.0, 4.0] // O tamanho excede a tupla pré setada, gerando erro!

let [x, y] = point // Desestruturação de arrays!
```

3. Uma boa prática de utilização, seria no trabalho de APIS, onde já se tem uma noção dos valores que serão retornados

```ts
// No React, geralmente existem métodos que retornam tuplas:
const [name, setName] = useState('')
```