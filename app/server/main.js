import { Meteor } from 'meteor/meteor';

Meteor.publish('assetsSearch', function(query){
  var self = this;
  try{
  	var response = HTTP.get('https://api.coinmarketcap.com/v1/ticker/neo/');
  	console.log(response);

  	_.each(response.data.items, function(item){
  	  var doc = {
        name: item.name,
        symbol: item.symbol,
        price_usd: item.price_usd,
        change24: item.percent_change_24h
  	  };

  	  self.added('assets', Random.id(), doc);
  	});

  	self.ready();
  } catch(error){
  	console.log(error);
  }
});