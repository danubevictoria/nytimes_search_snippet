function search() {
  var input = document.getElementById("input").value;

//   Get URL from API
//   http://developer.nytimes.com/article_search_v2.json#/Console/GET/articlesearch.json
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//   Add query parameters that are applicable from API 
  url += "?q=" + input + "&api-key=0ade7cc85ce941caa70f0532fe318bb6";

  // console.log(url);
// Create a new AJAX request
  var request = new XMLHttpRequest();
  
//   Perform GET operation from the API URL
  request.open("GET", url, true);

  request.onload = function() {
    // console.log(this.response.status);
    var data = JSON.parse(this.response);
    var docs = data.response.docs;
    var article_list = document.getElementById("article_list");
    article_list.innerHTML = "";
    
    for (var i = 0; i < docs.length; i++) {
      var article = document.createElement("li");
      article_list.appendChild(article);
      article.innerHTML = docs[i].snippet;
    }
  };

  request.send();
}
