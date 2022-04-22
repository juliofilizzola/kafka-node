# Kafka em NodeJS

![Kafka](https://www.grandeporte.com.br/img/blog/kafka/kafka.jpg)

**Apache Kafka** é uma plataforma open-source de processamento de streams desenvolvida pela Apache Software Foundation, escrita em Scala e Java. 

## Index
- [Index](#kafka-em-nodejs)
  - [Proposito](#proposito)
  - [Dependências Utilizadas](#dependências-utilizadas)
  - [Como Iniciar](#como-iniciar)
  - [Rotas](#rotas)


## Proposito

Nesse repositório, está contido o estudo sobre a estrutura do Apache Kafka no Typescript, utilizando a biblioteca kakfajs.
Vamos simular uma API que vai criar as mensagens e outra API que vai consumir essas mensagens.


## Dependências utilizadas

- Typescript
- Docker
- Docker-Composer
- Node => 8
- Eslint
- Prettier
- Express
- Tsyringe
- Typeorm
- Cors
- Kafka
- Kafkajs

## Como Iniciar.

Para esse projeto é necessário você ter o docker-compose em sua maquina.

Clone o repositório.

`git clone https://github.com/juliofilizzola/kafka-node.git `

Entre no diretório

`cd kafka-node-studies`

Instale as dependências

`npm i`

ou 

`npm install`

Depois suba o conteiner do Kafka no docker-compose.

`docker-composer up`

Depois entre no diretorio do API-producer

`cd api-producer`

Instale as Dependencias dessa API.

`npm i`

ou 

`npm install`

Agora incie a aplicação.

`npm run dev`

Depois entre no diretorio do API-consumer

`cd api-consumer`

Instale as Dependencias dessa API.

`npm i`

ou 

`npm install`

Agora incie a aplicação.

`npm run dev`


## Rotas

Para começar a mandar mensagens pelo produce, abra o Postman ou Insomina ou qualquer um API Client.

A api-producer está rodando na porta:

`http://localhost:3000/produce`

A Requisição é um metodo post, com o body com o seguinte formato.

```json

{
    "topic": "kafka-studies",
    "message": [{
        "value": "Pix",
        "key": "Talvez",
        "headers": {
            "url": "https://github.com/juliofilizzola/kafka-node",
            "meta": "algum dado."
        }
    }]
}

```


Fique a vontade para alterar[^note].

[^note]:
    Feito Por @juliofilizzola, qualquer alteração nesse repositório que você ache nescessario, abra uma Issues.
