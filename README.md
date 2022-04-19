# Kafka em NodeJS

![Kafka](https://www.grandeporte.com.br/img/blog/kafka/kafka.jpg)

**Apache Kafka** é uma plataforma open-source de processamento de streams desenvolvida pela Apache Software Foundation, escrita em Scala e Java. 

## Index
- [Index](#kafka-em-nodejs)
  - [Proposito](#proposito)
  - [Configurações utilizadas](#configurações-utilizadas)
  - [Como Iniciar](#como-iniciar)


## Proposito

Nesse repositório, está contido o estudo sobre a estrutura do Apache Kafka no Typescript, utilizando a biblioteca kakfajs.


## Configurações utilizadas

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

Fique a vontade para alterar[^note].

[^note]:
    Feito Por @juliofilizzola, qualquer alteração que você ache nescessario, abra uma Issues.
