console.log("News webiste script");

//intitalize the news parameters ->
let source = "bbc-news";
let key = "68cd6dcc34a842719351fa02f5390738";
let url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`;

// grab the news container ->
let newsAccordion = document.getElementById("newsAccordion");

//create an AJAX GET request ->
const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);

// what to do when response get ready ->
xhr.onload = function () {
    if (this.status === 200) {
    let json =  JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = ""; 
    articles.forEach(function(element, index){
        let title = element["title"];
        let url = element["url"];
        let content = element["content"];
        
        let news = `<div class="accordion-item">
        <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
        <b>Breaking News ${index+1}:</b>&nbsp;&nbsp; ${title}
        </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse" data-bs-parent="#newsAccordion">
        <div class="accordion-body">${content} <a href= "${url}" target="_blank"> Read more..</a>
        </div>
        </div>
        </div>`;
        newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml
    }
    else {
        console.log("Some error occured.")
    }
}
xhr.send();


