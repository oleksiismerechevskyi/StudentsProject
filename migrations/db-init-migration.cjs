exports.up = (pgm) => {
  pgm.createTable('classes', {
    id: { type: 'serial', primaryKey: true },
    name: { type: 'varchar(255)', notNull: true },
    health: { type: 'numeric', notNull: true },
    damage: { type: 'numeric', notNull: true },
    attack_type: { type: 'varchar(255)', notNull: true },
    ability: { type: 'varchar(255)', notNull: true },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    updated_at: {
      type: 'timestamp',
    },
  });
  pgm.createTable('users', {
    id: { type: 'serial', primaryKey: true },
    name: { type: 'varchar(255)', notNull: true },
    email: { type: 'varchar(255)', notNull: true },
    password: { type: 'varchar(255)', notNull: true },
    class_id: { type: 'integer', notNull: true, references: '"classes"', onDelete: 'cascade' },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    updated_at: {
      type: 'timestamp',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('users');
  pgm.dropTable('classes');
}