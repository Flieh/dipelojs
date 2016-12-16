//
$.getJSON( "./json/playerStats.json", function(data) {
    var sortedData = _.orderBy(data,"playerRating","desc");
    var context = {playerStats: sortedData};
    $.get('templates/tmplt.hbs', function (template) {
    var compiledTemplate=Handlebars.compile(template);
    $('#display').html(compiledTemplate(context));
  }, 'html');
});
