# Aula 12 - Como evitar tipagens

No TypeScript, existirá situações onde o desenvolvedor poderá evitar os erros citados pela linguagem em desenvolvimento, de maneira diversas.

## Tipos opcionais

Forma de explicitar se um determinado tipo é necessário, ou não

```ts
function sendSpaceship( spaceship: {pilot: string, copilot: string} ){
    // realizando procedimento ...
}

sendSpaceship({pilot: 'Han Solo', copilot: 'chewbacca'}) // OK!
sendSpaceship({pilot: 'Luke'}) // Gerará um erro, devido a falta de parâmetros! 
```

Para evitar o conflito acima, utilizamos a seguinte sintaxe:

- `variavel?: tipo`

Dessa forma, o código abaixo seria aceito:

```ts
function sendSpaceship( spaceship: {pilot: string, copilot?: string} ){
    // realizando procedimento ...
}

sendSpaceship({pilot: 'Luke'}) // OK!
```

## Tipos unknwon

Serve para declarar um tipo de variável, mas este tipo será desconhecido. 

Ou seja, a variável de tipo `unknown` poderá receber qualquer tipo de valor!

```ts
let input: unknown

// As atribuições ocorrerão normalmente
input = 'text'
input = 20
input = []

let text: string
text = input // Este código será gerado um erro!
```

Note que uma variável unknown não poderá ser atribuida em outras variáveis

## Tipos any

Tipo menos restrito de todos, fazendo com que uma variável funcione como no JavaScript convencional!

```ts
let input: any

// As atribuições ocorrerão normalmente
input = 'text'
input = 20
input = []

let text: string
text = input // Aqui não ocorrerá um problema
```

Neste caso de utilização, evite utilizá-lo o máximo possível, pois o código perderá o sentido de ser um código TypeScript!

## Tipos never

Não seria uma forma de evitar tipagem, tendo assim seu funcionamento único.

Funciona com uma variável que indicaria que algo errado ocorreu, ou seja, sua aplicação resultou em algo que não deveria existir

OBS: A variável pode ser atribuida a outras variáveis, mas nada poderá ser atribuído a ela

```ts
function verification(teste){
    if (teste) {
        //
    } else {
        let _check: never

        _check = 'teste' // erro
        _check = 0 // erro
        _check = false // erro

        return _check
    }
}
```