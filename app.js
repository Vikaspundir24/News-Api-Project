/* ==== NEWS 1 ====== */

/* let apiKey = 1f3aa04f979248f8aedc6a19610dfac8; */

// Grab the news container
let container1  = document.querySelector('.container1');

// Create an ajax get request
const xhr1 = new XMLHttpRequest();
xhr1.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1f3aa04f979248f8aedc6a19610dfac8`, true);

// What to do when response is ready
xhr1.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `
            <img src="${element["urlToImage"]}" alt="" id="image1">
            <h4>${element["title"]}</h4>
            <p>${element["content"]}</p>
            <h6>BUSINESS</h6>`;
            newsHtml = news;
        });
        container1.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr1.send()


/* ==== NEWS 2====== */


/* let apiKey = 1f3aa04f979248f8aedc6a19610dfac8; */

// Grab the news container
let container21  = document.querySelector('.container21');

// Create an ajax get request
const xhr21 = new XMLHttpRequest();
xhr21.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1f3aa04f979248f8aedc6a19610dfac8
`, true);

// What to do when response is ready
xhr21.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<h4>${element["title"]}</h4>
            <p>${element["content"]}</p>
            <h6>ENTERTAINMENT</h6>`;
            newsHtml = news;
        });
        container21.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr21.send()


/* ==== NEWS 3====== */

/* let apiKey = 1f3aa04f979248f8aedc6a19610dfac8; */

// Grab the news container
let container22  = document.querySelector('.container22');

// Create an ajax get request
const xhr22 = new XMLHttpRequest();
xhr22.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1f3aa04f979248f8aedc6a19610dfac8
`, true);

// What to do when response is ready
xhr22.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<h4>${element["title"]}</h4>
            <p>${element["content"]}</p>
            <h6>ENTERTAINMENT</h6>`;
            newsHtml = news;
        });
        container22.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr22.send()



/* ==== NEWS 4====== */

/* let apiKey = 1f3aa04f979248f8aedc6a19610dfac8; */

// Grab the news container
let container3  = document.querySelector('.container3');

// Create an ajax get request
const xhr3 = new XMLHttpRequest();
xhr3.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=1f3aa04f979248f8aedc6a19610dfac8`, true);

// What to do when response is ready
xhr3.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `
            <img src="${element["urlToImage"]}" alt="" id="image1">
            <h4>${element["title"]}</h4>
            <p>${element["content"]}</p>
            <h6>HEALTH</h6>`;
            newsHtml = news;
        });
        container3.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr3.send()