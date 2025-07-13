# Aula 8 - Como instalar e configurar o TypeScript

1. Caso não tenha iniciado um projeto Node.js crie a pasta, acesse-a e execute o comando:

```shell
mkdir usando-typescript && cd usando-typescript
npm init -y
```

2. Com o projeto iniciado, instale o Typescript como dependência de desenvolvimento:

```shell
npm intall --save-dev typescript
```

3. Crie um arquivo index.ts:

```shell
touch index.ts
```

4. Adicione este conteúdo no arquivo:

```ts
const setPilot = (newPilot: string, spaceship: { name?: string; pilot: string; speed?: number; inMission?: boolean; }) => {
  spaceship.pilot = newPilot;
}

const accelerate = (targetSpeed: number, spaceship: { name?: string; pilot?: string; speed: any; inMission?: boolean; }) => {
  spaceship.speed = targetSpeed;
}

const sendToMission = (spaceship: { name?: string; pilot?: string; speed?: number; inMission: any; }) => {
  spaceship.inMission = true;
}

const spaceship = {
  name: '',
  pilot: '',
  speed: 0,
  inMission: false,
}

const pilot = "Han Solo";

spaceship.name = "Millennium Falcon";

setPilot(pilot, spaceship);
accelerate(50, spaceship);
sendToMission(spaceship);

console.log(spaceship);
```

5. Utilize o comando abaixo para executar o compilador: (repare que ele converte as arrow functions para funções anônimas comuns)

```shell
npx tsc index.ts
```

6. Atualize o arquivo package.json para que inclua o script abaixo:

```json
{
  "name": "usando-typescript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "tsc index.ts" // script de build
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^4.4.4"
  }
}
```

7. Exclua o arquivo index.js e execute o compilador através do script:

```shell
rm index.js
npm run build
```