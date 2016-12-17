//
$.getJSON( "./json/playerStats.json", function(data) {
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
  var dotm = d.get

});
