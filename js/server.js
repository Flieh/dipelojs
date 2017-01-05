//
$.getJSON( "./json/playerStats.json", function(data) {
    _.remove(data, function(item) {
      var now = new Date();
      var lastPlayed = new Date(item.lastGamePlayed);
      return ((now - lastPlayed) > 5356800000);
    });
    var sortedData = _.orderBy(data,"playerRating","desc");
    var context = {playerStats: sortedData};

    $.get('templates/tmplt.hbs', function (template) {
      var compiledTemplate=Handlebars.compile(template);
      $('#display').html(compiledTemplate(context));
    }, 'html');
});

Handlebars.registerHelper('truncEmail', function(string) {
  var emailParts =  string.split('@');
  return emailParts[0];
});

Handlebars.registerHelper('formatDate', function(dateString) {
  var d = new Date(dateString);
  var date = d.getDate();
  var monthIndex = d.getMonth();
  var year = d.getFullYear();
  var monthList = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  return date + "-" + monthList[monthIndex] + "-" + year;
});
