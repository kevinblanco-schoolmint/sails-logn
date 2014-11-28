/**
* Product.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	name : {
  		type: "string",
  		required : true
  	},

  	stock : {
  		type: "integer"
  	},

  	price : {
  		type: "string"
  	},

  	sku : {
  		type: "string",
  		unique: true,
  		maxLength: 20
  	}

  },

  //Add the dolar sign before the price
  beforeCreate: function(values, cb) {

    values.price = "$" + values.price;
    cb();

  }


};

