/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	

	findBySku: function(req, res){

		var p_sku = req.body.sku;

		/* This is the old fashion way without dinamic finders **
		*
		*
		Product.findOne()
			.where({sku : p_sku })
			.exec(function(err, product){

				if (err) { return res.json({error: err})} //If error finding a product
				if (!product) {return res.json( {error: "No product found"}, 404) }; //if no product

				//If product found we return it
				return res.json({product:product}, 200);
			});
		*/


		//With dinamic finders
		Product.findBySku(p_sku)
			.exec(function(err, product){

				if (err) { return res.json({error: err})} //If error finding a product
				if (!product) {return res.json( {error: "No product found"}, 404) }; //if no product

				//If product found we return it
				return res.json({product:product}, 200);
			});

	}
};

