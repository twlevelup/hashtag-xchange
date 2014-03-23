exports.Inventory = function Inventory(hashtags) {

  var tags = [];

  hashtags.forEach(function(tag){
    tags.push({
        name: tag,
        url: "/hashtags/" + tag
    });
  });
  
  this.items = {
    hashtags: tags
  };
};