import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class vocationSettings1637201477771 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const schema = process.env.TYPEORM_SCHEMA;
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
    await queryRunner.createSchema(schema, true);

    const vocationTable = new Table({
      name: 'vocations',
      columns: [
        {
          name: 'name',
          type: 'enum',
          enum: [
            'None',
            'Druid',
            'Elder Druid',
            'Knight',
            'Elite Knight',
            'Paladin',
            'Royal Paladin',
            'Sorcerer',
            'Master Sorcerer',
          ],
          isNullable: false,
          isUnique: true,
        },
        {
          name: 'reference',
          type: 'int',
          isNullable: false,
          isUnique: true,
        },
      ],
      schema: schema,
    });

    await queryRunner.createTable(vocationTable, true);

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(`${schema}.vocations`)
      .values([
        { name: 'None', reference: 0 },
        { name: 'Druid', reference: 1 },
        { name: 'Elder Druid', reference: 2 },
        { name: 'Knight', reference: 3 },
        { name: 'Elite Knight', reference: 4 },
        { name: 'Paladin', reference: 5 },
        { name: 'Royal Paladin', reference: 6 },
        { name: 'Sorcerer', reference: 7 },
        { name: 'Master Sorcerer', reference: 8 },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vocations');
    await queryRunner.query(`DROP EXTENSION IF EXISTS "uuid-ossp";`);
  }
}
