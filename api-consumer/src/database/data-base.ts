// import { DataSource } from 'typeorm';
// import Message from './entity/Message';

// const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'Kafka',
//   password: 'admin',
//   database: 'Kafka',
//   entities: [Message],
//   synchronize: true,
//   logging: false,
// });

// // to initialize initial connection with the database, register all entities
// // and "synchronize" database schema, call "initialize()" method of a newly created database
// // once in your application bootstrap
// AppDataSource.initialize()
//   .then(() => {
//     // here you can start to work with your database
//   })
//   .catch((error) => console.log(error));
