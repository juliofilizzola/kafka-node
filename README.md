# Kafka em NodeJS

![Kafka](https://www.grandeporte.com.br/img/blog/kafka/kafka.jpg)

**Apache Kafka** é uma plataforma open-source de processamento de streams desenvolvida pela Apache Software Foundation, escrita em Scala e Java. 

## Index
- [Index](#kafka-em-nodejs)
  - [Proposito](#proposito)
  - [Dependências Utilizadas](#dependências-utilizadas)
  - [Como Iniciar](#como-iniciar)
  - [Rotas](#rotas)
  - [Banco de Dados](#banco-de-dados)


## Proposito

Nesse repositório, está contido o estudo sobre a estrutura do Apache Kafka no Typescript, utilizando a biblioteca kakfajs.
Vamos simular uma API que vai criar as mensagens e outra API que vai consumir essas mensagens.


## Dependências utilizadas

- Typescript
- Docker
- Docker-Composer
- Node[^1]
- Eslint
- Prettier
- Express
- Tsyringe
- Typeorm[^2]
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
    "topic": "kafka-studies", // nome do topic
    "message": [{
        "value": "assunto",
        "key": "a key da mensagem",
        "headers": {
            "url": "https://github.com/juliofilizzola/kafka-node",
            "meta": "algum dado."
        }
    }]
}

```

## Banco de dados

Na api-consumer, tem um banco de dados POSTGRES, recomendo fortemente a utlização do dbeaver.

Rode as migrations do typeorm utilizando esse comando:

`npm run typeorm migration:run`

***

Fique a vontade para alterar[^0].

[^0]: Feito Por @juliofilizzola, qualquer alteração nesse repositório que você ache nescessario, abra uma Issues.

[^1]: Recomendação utlizar a da versão 8 ou maior do node.
   
[^2]: A versão utilizada do Typeorm é a 0.2.29, caso queira atualizar a versão superio, recomendo fazer as adapções necessárias.
