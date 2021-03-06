var MongoClient = require('mongodb').MongoClient;
var MONGOURL = 'mongodb://localhost:27017/db';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var personModel = require('../services/models/person');


mongoose.connect('mongodb://localhost:27017/db');

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){

console.log("Connected");
});

var data = [{"#":1,"Full Name":"Adam D'Angelo","Associated Companies ":"Quora","Twitter":"@adamdangelo","Instagram":"N/A"},
{"#":2,"Full Name":"Alexa von Tobel","Associated Companies ":"LearnVest","Twitter":"@alexvontobel","Instagram":"@alexavontobel"},
{"#":3,"Full Name":"Alexis Ohanian","Associated Companies ":"Reddit","Twitter":"@alexisohanian","Instagram":"@alexisohanian"},
{"#":4,"Full Name":"Arianna Huffington","Associated Companies ":"The Huffington Post","Twitter":"@ariannahuff","Instagram":"@ariannahuff"},
{"#":5,"Full Name":"Ben Silbermann","Associated Companies ":"Pinterest","Twitter":"@8en","Instagram":"N/A"},
{"#":6,"Full Name":"Bhavin Turakhia","Associated Companies ":"Directi","Twitter":"@bhvintu","Instagram":"N/A"},
{"#":7,"Full Name":"Bill Gates","Associated Companies ":"Microsoft, Bill & Melinda Gates Foundation","Twitter":"@BillGates","Instagram":"@gatesfoundation"},
{"#":8,"Full Name":"Blake Ross","Associated Companies ":"Firefox, Parakey","Twitter":"@blakeross","Instagram":"N/A"},
{"#":9,"Full Name":"Bob Parsons","Associated Companies ":"GoDaddy","Twitter":"@DrBobParsons","Instagram":"N/A"},
{"#":10,"Full Name":"Brian Acton","Associated Companies ":"WhatsApp","Twitter":"@brianacton","Instagram":"N/A"},
{"#":11,"Full Name":"Brian Chesky","Associated Companies ":"Airbnb","Twitter":"@bchesky","Instagram":"@bchesky"},
{"#":12,"Full Name":"Caterina Fake\n","Associated Companies ":"Flickr","Twitter":"@Caterina","Instagram":"N/A"},
{"#":13,"Full Name":"Chad Hurley","Associated Companies ":"Youtube, AVOS Systems","Twitter":"@Chad_Hurley","Instagram":"@chad_hurley"},
{"#":14,"Full Name":"Chris Hughes","Associated Companies ":"Facebook, Jumo","Twitter":"@chrishughes","Instagram":"N/A"},
{"#":15,"Full Name":"Clara Shih","Associated Companies ":"Hearsay Social","Twitter":"@clarashih","Instagram":"N/A"},
{"#":16,"Full Name":"Craig Newmark","Associated Companies ":"Craigslist Inc.","Twitter":"@craignewmark","Instagram":"N/A"},
{"#":17,"Full Name":"Dan Wagner","Associated Companies ":"Venda, Powa Technologies","Twitter":"@danwagnerpowa","Instagram":"N/A"},
{"#":18,"Full Name":"Daniel Ek","Associated Companies ":"Spotify","Twitter":"@eldsjal","Instagram":"@eldsjal"},
{"#":19,"Full Name":"Dave Morin","Associated Companies ":"Path","Twitter":"@davemorin","Instagram":"@davemorin"},
{"#":20,"Full Name":"David Filo","Associated Companies ":"Yahoo","Twitter":"N/A","Instagram":"N/A"},
{"#":21,"Full Name":"David Heinemeier Hansson","Associated Companies ":"Ruby on Rails","Twitter":"@dhh","Instagram":"@dhh79"},
{"#":22,"Full Name":"David Karp","Associated Companies ":"Tumblr","Twitter":"@davidkarp","Instagram":"N/A"},
{"#":23,"Full Name":"David Warthen","Associated Companies ":"Ask.com, IAC Search & Media","Twitter":"N/A","Instagram":"N/A"},
{"#":24,"Full Name":"Dennis Crowley","Associated Companies ":"Dodgeball, Foursquare","Twitter":"@dens","Instagram":"@dens"},
{"#":25,"Full Name":"Devin Wenig","Associated Companies ":"eBay","Twitter":"@devinwenig","Instagram":"N/A"},
{"#":26,"Full Name":"Divyank Turakhia","Associated Companies ":"Directi","Twitter":"N/A","Instagram":"N/A"},
{"#":27,"Full Name":"Eduardo Saverin","Associated Companies ":"Facebook","Twitter":"@esaverin","Instagram":"N/A"},
{"#":28,"Full Name":"Elon Musk","Associated Companies ":"Tesla, SpaceX, SolarCity","Twitter":"@elonmusk","Instagram":"@elonmusk"},
{"#":29,"Full Name":"Emmett Shear","Associated Companies ":"Justin.tv, Twitch","Twitter":"@eshear","Instagram":"N/A"},
{"#":30,"Full Name":"Evan Spiegel","Associated Companies ":"Snapchat","Twitter":"@evanspiegel","Instagram":"N/A"},
{"#":31,"Full Name":"Garrett Camp","Associated Companies ":"Uber, StableUpon","Twitter":"@gmc","Instagram":"N/A"},
{"#":32,"Full Name":"Garrett Gruener","Associated Companies ":"Alta Partners, Ask.com","Twitter":"N/A","Instagram":"N/A"},
{"#":33,"Full Name":"Gina Trapani","Associated Companies ":"Lifehacker, ThinkUp, Makerbase","Twitter":"@ginatrapani","Instagram":"@ginatrapani"},
{"#":34,"Full Name":"Jack Dorsey","Associated Companies ":"Twitter, Square","Twitter":"@jack","Instagram":"@jack"},
{"#":35,"Full Name":"Jack Ma","Associated Companies ":"Alibaba","Twitter":"@Plaid_JackMa","Instagram":"N/A"},
{"#":36,"Full Name":"Jake Lodwick","Associated Companies ":"Vimeo","Twitter":"@jakelodwick","Instagram":"@jakelodwick"},
{"#":37,"Full Name":"Jan Koum","Associated Companies ":"Whatsapp","Twitter":"@jankoum","Instagram":"N/A"},
{"#":38,"Full Name":"Jay Adelson","Associated Companies ":"Digg, Revision3, Equinix","Twitter":"@jayadelson","Instagram":"N/A"},
{"#":39,"Full Name":"Jeff Bezos","Associated Companies ":"Amazon","Twitter":"@JeffBezos","Instagram":"N/A"},
{"#":40,"Full Name":"Jeremy Stoppelman","Associated Companies ":"Yelp","Twitter":"@jeremys","Instagram":"N/A"},
{"#":41,"Full Name":"Jimmy Wales","Associated Companies ":"Wikipaedia, Wikia, Wikimedia Foundation","Twitter":"@jimmy_wales","Instagram":"N/A"},
{"#":42,"Full Name":"Jonah Peretti","Associated Companies ":"Firefox, Webkit, Safari","Twitter":"@peretti","Instagram":"N/A"},
{"#":43,"Full Name":"Julia Hartz","Associated Companies ":"Eventbrite","Twitter":"@juliahartz","Instagram":"N/A"},
{"#":44,"Full Name":"Justin Kan","Associated Companies ":"Justin.tv, Twitch, Kiko","Twitter":"@justinkan","Instagram":"@justinkan"},
{"#":45,"Full Name":"Kevin Hartz","Associated Companies ":"Eventbrite","Twitter":"@kevinhartz","Instagram":"N/A"},
{"#":46,"Full Name":"Kevin Rose","Associated Companies ":"Digg, Revision3","Twitter":"@kevinrose","Instagram":"@kevinrose"},
{"#":47,"Full Name":"Larry Ellison","Associated Companies ":"Oracle","Twitter":"@larryellison","Instagram":"N/A"},
{"#":48,"Full Name":"Larry Page","Associated Companies ":"Google","Twitter":"N/A","Instagram":"N/A"},
{"#":49,"Full Name":"Marc Andreesson","Associated Companies ":"Netscape","Twitter":"@pmarca","Instagram":"N/A"},
{"#":50,"Full Name":"Mark Cuban","Associated Companies ":"Landmark Theaters, Dallas Mavericks","Twitter":"@mcuban","Instagram":"@mcuban"},
{"#":51,"Full Name":"Mark Zuckerberg","Associated Companies ":"Facebook","Twitter":"@finkd","Instagram":"@zuck"},
{"#":52,"Full Name":"Matt Mullenweg","Associated Companies ":"WordPress","Twitter":"@photomatt","Instagram":"N/A"},
{"#":53,"Full Name":"Meg Hourihan","Associated Companies ":"Blogger.com","Twitter":"@megnut","Instagram":"@megnut72"},
{"#":54,"Full Name":"Michael Arrington","Associated Companies ":"TechCrunch","Twitter":"@arrignton","Instagram":"N/A"},
{"#":55,"Full Name":"Michael Dell","Associated Companies ":"Dell","Twitter":"@MichaelDell","Instagram":"N/A"},
{"#":56,"Full Name":"Paul Allen","Associated Companies ":"Microsoft, Vulcan","Twitter":"@PaulGAllen","Instagram":"N/A"},
{"#":57,"Full Name":"Paul Graham","Associated Companies ":"Y Combinator","Twitter":"@paulg","Instagram":"N/A "},
{"#":58,"Full Name":"Pete Cashmore","Associated Companies ":"Mashable","Twitter":"@petecashmore","Instagram":"@petecashmore"},
{"#":59,"Full Name":"Pete Flint","Associated Companies ":"Trulia","Twitter":"@peteflint","Instagram":"N/A"},
{"#":60,"Full Name":"Peter Thiel","Associated Companies ":"Paypal, Founders Fund, Palantir Technologies","Twitter":"@peterthiel","Instagram":"N/A"},
{"#":61,"Full Name":"Pierre Omidyar","Associated Companies ":"eBay, Omidyar Network","Twitter":"@pierre","Instagram":"N/A"},
{"#":62,"Full Name":"Reed Hastings","Associated Companies ":"Netflix","Twitter":"@reedhastings","Instagram":"N/A"},
{"#":63,"Full Name":"Reid Hoffman","Associated Companies ":"LinkedIn","Twitter":"@reidhoffman","Instagram":"N/A"},
{"#":64,"Full Name":"Robin Li","Associated Companies ":"Baidu","Twitter":"N/A","Instagram":"N/A"},
{"#":65,"Full Name":"Ryan Allis","Associated Companies ":"iContact","Twitter":"@ryanallis","Instagram":"@ryanallis"},
{"#":66,"Full Name":"Sandy Jen","Associated Companies ":"Meebo","Twitter":"@sandydjen","Instagram":"N/A"},
{"#":67,"Full Name":"Satya Nadella","Associated Companies ":"Microsoft","Twitter":"@satyanadella","Instagram":"N/A"},
{"#":68,"Full Name":"Scott Heiferman","Associated Companies ":"Meetup","Twitter":"@heif","Instagram":"@heif"},
{"#":69,"Full Name":"Sergey Brin","Associated Companies ":"Google, GoogleX","Twitter":"N/A","Instagram":"@sergeybrinofficial"},
{"#":70,"Full Name":"Sheryl Sandberg","Associated Companies ":"Facebook, Lean In","Twitter":"@sherylsandberg","Instagram":"@sherylsandberg"},
{"#":71,"Full Name":"Stewart Butterfield","Associated Companies ":"Flickr, Slack","Twitter":"@stewart","Instagram":"N/A"},
{"#":72,"Full Name":"Susan Wojcicki","Associated Companies ":"Youtube","Twitter":"@SusanWojcicki","Instagram":"N/A"},
{"#":73,"Full Name":"Talmon Marco","Associated Companies ":"Viber","Twitter":"@duras","Instagram":"N/A"},
{"#":74,"Full Name":"Tim Cook","Associated Companies ":"Apple","Twitter":"@tim_cook","Instagram":"N/A"},
{"#":75,"Full Name":"Tobias LÃ¼tke","Associated Companies ":"Shopify, JadedPixel","Twitter":"@tobi","Instagram":"N/A"},
{"#":76,"Full Name":"Tom Anderson","Associated Companies ":"Myspace","Twitter":"@myspacetom","Instagram":"@myspacetom"},
{"#":77,"Full Name":"Tom Preston-Werner","Associated Companies ":"GitHub, Gravatar","Twitter":"@mojombo","Instagram":"N/A"},
{"#":78,"Full Name":"Travis Kalanick","Associated Companies ":"Uber","Twitter":"@travisk","Instagram":"N/A"},
{"#":79,"Full Name":"Trip Adler","Associated Companies ":"Scribd","Twitter":"@tripadler","Instagram":"N/A"},
{"#":80,"Full Name":"Virginia Rometty","Associated Companies ":"IBM","Twitter":"@GinniRometty","Instagram":"N/A"}];
function populateDatabase(){

  if(!db){
    console.log("No db");
    return;
  }

  personModel.collection.insert(data,function(err){

  	if(err){
  		callback(err);
  		return;
  	}

	callback(null);
  });


}

function getTwitterName(name,callback){
  personModel.findOne({"Full Name":name},"Twitter",function(err,docs){
  if(err){
  	console.log("Failed to fetch person.")
  	callback(err,null);
  	return;
}


callback(null,docs);
});

}


function removeAllListings(callback){
  mongoose.connection.db.dropDatabase(function(err){
    if (err){
    console.log("Failed to delete database");
    callback(err);
    return;
}

  callback(null);

  });
}


module.exports = {
    populateDatabase: populateDatabase,
    removeAllListings: removeAllListings,
    getTwitterName: getTwitterName
  };
