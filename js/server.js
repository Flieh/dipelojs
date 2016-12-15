$.getJSON( "./json/data.json", function( data ) {
  var count = 0;
  var sortedData = _.orderBy(data, "lastGamePlayed", "desc");
  sortedData.forEach( function(element) {
    count += 1;
     for (var key in element) {
       $('#content').append(key + ':   ' + element[key] + '<br>');
     }
  });
});


