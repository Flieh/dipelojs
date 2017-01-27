$.getJSON('./json/playerStats.json', function (data) {/*
  _.remove(data, function (item) {
      var now = new Date()
      var lastPlayed = new Date(item.lastGamePlayed)
      return ((now - lastPlayed) > 5356800000)
    })*/
  var sortedData = _.orderBy(data, 'playerRating', 'desc')
  var context = {playerStats: sortedData}

  $.get('templates/tmplt.hbs', function (template) {
      var compiledTemplate = Handlebars.compile(template)
      $('#display').html(compiledTemplate(context))
    }, 'html')
})

Handlebars.registerHelper('formatEmail', function (string) {
  var newString = string.split('@')
  let now = new Date()
  let elapse = new Date(this.lastGamePlayed)
  if ((now - elapse) > 5356800000) {
    return ('<span class="inactive-player">' + newString[0] + '** inactive **</span>')
  } else {
    return ('<span class=active-player">' + newString[0] + '</span>')
  }
})

Handlebars.registerHelper('formatCell', function (string) {
  var newString = string.toString().split('@')
  let now = new Date()
  let elapse = new Date(this.lastGamePlayed)
  if ((now - elapse) > 5356800000) {
    return ('<span class="inactive-player">' + newString[0] + '</span>')
  } else {
    return ('<span class=active-player">' + newString[0] + '</span>')
  }
})

Handlebars.registerHelper('formatDate', function (dateString) {
  var d = new Date(dateString)
  var date = d.getDate()
  var monthIndex = d.getMonth()
  var year = d.getFullYear()
  var monthList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  return date + '-' + monthList[monthIndex] + '-' + year
})
