module.exports = {
  type: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: "apivendas",
  entities: ["./src/modules/**/typeorm/entities/*.ts"],
  migrations: ["./src/shared/typeorm/migrations/*.ts"],
  cli: {
    migrationsDir: "./src/shared/typeorm/migrations"
  }
}
