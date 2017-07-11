// In the election.js file, build an AJAX request that makes a GET request to the root path, and expects a JSON response.
// Make sure you're making this request within your document.addEventListener("DOMContentLoaded"...) callback function
// Add a <ul> to your index.html file, with an id. This is what we'll attach our data to.

document.addEventListener("DOMContentLoaded", function() {

  var summonCandidates = document.querySelectorAll('responseData.candidates')

  runSummonCandidates = document.addEventListener('click', function(event) {
  console.log('click')
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done(function(data) {
    console.log(data)
    for(var i = 0; i < data.candidates.length; i++) {
      var element = document.createElement('li');
      element.innerHTML = 'Name: ' + data.candidates[i].name + "<br>Votes:  " + data.candidates[i].votes + "<br><br>";
      document.querySelector('#ids').append(element);
      }
    });
  });
});
