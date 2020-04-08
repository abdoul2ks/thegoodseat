/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'user',
  migrate: 'safe',
  attributes: {
    username:{
      type:'string',
      required: true,
      unique: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      required: true
    },
    Cpassword: {
      type: 'string',
      required: true
    },
    createdAt: {
      type: 'ref',
      columnType: 'datetime'
    },
    updatedAt: {
      type: 'ref',
      columnType: 'datetime'
    },
  },
};
