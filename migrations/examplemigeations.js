'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('talename', {

    // column type

    
    // User_ID: {
    //   type: 'int',
    //   primaryKey: true,
    //   autoIncrement: true,
    //   notNull: true,
    // },
    // User_Birthday: {
    //   type: 'date'
    // },
    // User_State: {
    //   type: 'varchar',
    //   length: 100
    // },
    // User_Subdistrict: {
    //   type: 'varchar',
    //   length: 100,
    // },
    // Admin_ID: {
    //   type: 'string',
    //   length: 50,
    //   notNull: true,
    // },
    // Position: {
    //   type: 'varchar',
    //   length: 50,
    //   notNull: true,
    // },
    // isSuper_Admin: {
    //   type: "enum('true', 'false')",
    //   notNull: true,
    // },
  }, function(err) {
    if (err) return callback(err);
    return callback();
  });
};
exports.down = function(db, callback) {
  // db.dropTable('user', callback);
};

exports._meta = {
  "version": 1
};
