import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Messages1650474949044 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'message',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'message',
            type: 'varchar',
          },
          {
            name: 'topic',
            type: 'varchar',
          },
          {
            name: 'key',
            type: 'varchar',
          },
          {
            name: 'url',
            type: 'varchar',
          },
          {
            name: 'value',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('message');
  }
}
