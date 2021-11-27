import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';
const configureTable = (table: Table): Table => {
  table.addColumn(
    new TableColumn({
      name: 'id',
      type: 'uuid',
      isGenerated: true,
      generationStrategy: 'uuid',
      default: 'uuid_generate_v4()',
    }),
  );

  table.addColumn(
    new TableColumn({
      name: 'created_at',
      type: 'timestamp',
      default: 'now()',
    }),
  );
  table.addColumn(
    new TableColumn({
      name: 'updated_at',
      type: 'timestamp',
      default: 'now()',
    }),
  );
  table.addColumn(
    new TableColumn({
      name: 'deleted_at',
      type: 'timestamp',
      default: null,
      isNullable: true,
    }),
  );

  return table;
};
export class worldsSettings1637206680537 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const schema = process.env.TYPEORM_SCHEMA;

    const game_worlds_table = new Table({
      name: 'game_worlds',
      columns: [
        {
          name: 'name',
          type: 'text',
          isNullable: false,
          isUnique: true,
        },
        {
          name: 'creation_date',
          type: 'text',
          isNullable: true,
          isUnique: false,
        },
        {
          name: 'battle_eye',
          type: 'enum',
          enum: ['fully-protected', 'protected', 'inactive'],
          isNullable: false,
        },
        {
          name: 'pvp_type',
          type: 'enum',
          enum: [
            'open',
            'optional',
            'retro-hardcore',
            'hardcore',
            'retro-open',
          ],
          isNullable: false,
        },
        {
          name: 'location',
          type: 'enum',
          enum: ['europe', 'north-america', 'south-america'],
          isNullable: false,
        },
        {
          name: 'merged_into',
          type: 'uuid',
          isNullable: true,
        },
        {
          name: 'merged_at',
          type: 'date',
          isNullable: true,
        },
        {
          name: 'server_titles',
          type: 'text',
          isArray: true,
          isNullable: true,
        },
        {
          name: 'server_conditions',
          type: 'text',
          isArray: true,
          isNullable: true,
        },
        {
          name: 'is_special_world',
          type: 'boolean',
        },
      ],
      schema: schema,
    });
    configureTable(game_worlds_table);

    await queryRunner.createTable(game_worlds_table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('game_worlds');
  }
}
