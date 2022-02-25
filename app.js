/* ==== NEWS 1 ====== */

/* let apiKey = 1f3aa04f979248f8aedc6a19610dfac8; */

// Grab the news container
let slides1 = document.getElementById("slides1");
let next = document.querySelector(".AZ");
let back = document.querySelector(".ZA")

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



        articles.forEach(function (element, index) {
            // console.log(element, index)

            let news = `


                <div class="carousel-item " id="slide${index}">
                    <img src="${element["urlToImage"]}" alt="" id="image1">
                    <h4>${element["title"]}</h4>
                    <p>${element["description"]}</p>
                    <p>DATE ${element["publishedAt"]}</p>
                    <a href="${element["url"]}">READ MORE</a>
                    
                    <h6>BUSINESS</h6>
                </div>
               `;
            newsHtml += news;




        });
        slides1.innerHTML = newsHtml;




    } else {
        console.log("Some error occured")
    }
    let x = 0;
    const slideL = document.getElementById(`slide${x}`);
    slideL.classList.add("active");

    next.addEventListener("click", () => {
        document.getElementById(`slide${x+1}`).classList.add("active");
        document.getElementById(`slide${x}`).classList.remove("active");
        x = x + 1;
        return x;
    })

    back.addEventListener("click", () => {
        document.getElementById(`slide${x-1}`).classList.add("active");
        document.getElementById(`slide${x}`).classList.remove("active");
        x = x - 1;
        return x;
    })


}


xhr1.send()


/* ========================================================================================================== */


/* ==== NEWS 2 ====== */

/* let apiKey = 1f3aa04f979248f8aedc6a19610dfac8; */

// Grab the news container
let slides2 = document.getElementById("slides2");
let nextAB = document.querySelector(".AB");
let backBA = document.querySelector(".BA")

// Create an ajax get request
const xhr2 = new XMLHttpRequest();
xhr2.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1f3aa04f979248f8aedc6a19610dfac8
`, true);

// What to do when response is ready
xhr2.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";



        articles.forEach(function (element, index) {
            // console.log(element, index)

            let news = `


                <div class="carousel-item " id="slideA${index}">
                    <h4>${element["title"]}</h4>
                   
                    <a href="${element["url"]}">READ MORE</a>
                    
                    <h6>SPORTS</h6>
                </div>
               `;
            newsHtml += news;




        });
        slides2.innerHTML = newsHtml;




    } else {
        console.log("Some error occured")
    }
    let a = 0;
    const slideLa = document.getElementById(`slideA${a}`);
    slideLa.classList.add("active");

    nextAB.addEventListener("click", () => {
        document.getElementById(`slideA${a+1}`).classList.add("active");
        document.getElementById(`slideA${a}`).classList.remove("active");
        a = a + 1;
        return a;
    })

    backBA.addEventListener("click", () => {
        document.getElementById(`slideA${a-1}`).classList.add("active");
        document.getElementById(`slideA${a}`).classList.remove("active");
        a = a - 1;
        return a;
    })


}


xhr2.send()

/* ============================================================================================================ */



/* ==== NEWS 3 ====== */

/* let apiKey = 1f3aa04f979248f8aedc6a19610dfac8; */

// Grab the news container
let slides3 = document.getElementById("slides3");
let nextAC = document.querySelector(".AC");
let backCA = document.querySelector(".CA")

// Create an ajax get request
const xhr3 = new XMLHttpRequest();
xhr3.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1f3aa04f979248f8aedc6a19610dfac8`, true);

// What to do when response is ready
xhr3.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";



        articles.forEach(function (element, index) {
            // console.log(element, index)

            let news = `


                <div class="carousel-item " id="slideB${index}">
                    <h4>${element["title"]}</h4>
                    
                    <a href="${element["url"]}">READ MORE</a>
                    
                    <h6>ENTERTAINMENT</h6>
                </div>
               `;
            newsHtml += news;




        });
        slides3.innerHTML = newsHtml;




    } else {
        console.log("Some error occured")
    }
    let c = 0;
    const slideLb = document.getElementById(`slideB${c}`);
    slideLb.classList.add("active");

    nextAC.addEventListener("click", () => {
        document.getElementById(`slideB${c+1}`).classList.add("active");
        document.getElementById(`slideB${c}`).classList.remove("active");
        c = c + 1;
        return c;
    })

    backCA.addEventListener("click", () => {
        document.getElementById(`slideB${c-1}`).classList.add("active");
        document.getElementById(`slideB${c}`).classList.remove("active");
        c = c - 1;
        return c;
    })


}


xhr3.send()

/* ======================================================================================================= */

/* ==== NEWS 4 ====== */

/* let apiKey = 1f3aa04f979248f8aedc6a19610dfac8; */

// Grab the news container
let slides4 = document.getElementById("slides4");
let nextAD = document.querySelector(".AD");
let backDA = document.querySelector(".DA")

// Create an ajax get request

const xhr4 = new XMLHttpRequest();
xhr4.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1f3aa04f979248f8aedc6a19610dfac8
`, true);

// What to do when response is ready
xhr4.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";


        articles.forEach(function (element, index) {
            // console.log(element, index)

            let news = `


                <div class="carousel-item " id="slideC${index}">
                    <img src="${element["urlToImage"]}" alt="" id="image1">
                    <h4>${element["title"]}</h4>
                    <p>${element["description"]}</p>
                    <p>DATE ${element["publishedAt"]}</p>
                    <a href="${element["url"]}">READ MORE</a>
                    
                    <h6>TECH</h6>
                </div>
               `;
            newsHtml += news;



        });
        slides4.innerHTML = newsHtml;




    } else {
        console.log("Some error occured")
    }
    let d = 0;
    const slideLC = document.getElementById(`slideC${d}`);
    slideLC.classList.add("active");

    nextAD.addEventListener("click", () => {
        document.getElementById(`slideC${d+1}`).classList.add("active");
        document.getElementById(`slideC${d}`).classList.remove("active");
        d = d + 1;
        return d;
    })

    backDA.addEventListener("click", () => {
        document.getElementById(`slideC${d-1}`).classList.add("active");
        document.getElementById(`slideC${d}`).classList.remove("active");
        d = d - 1;
        return d;
    })


}


xhr4.send()



/* ========================================================= */

/*===================== BIG SCREEN============ */

/* let apiKey = 1f3aa04f979248f8aedc6a19610dfac8; */

// Grab the news container
let Bigslides = document.getElementById("Bigslides");

let BigA = document.querySelector(".BigA");
let BigZ = document.querySelector(".BigZ")

// Create an ajax get request
const xhr5 = new XMLHttpRequest();
xhr5.open('GET', `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=1f3aa04f979248f8aedc6a19610dfac8`, true);

// What to do when response is ready
xhr5.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";



        articles.forEach(function (element, index) {
            // console.log(element, index)

            let news = `                <div class="carousel-item Topper " id="slidebig${index}">
            <h6>HEALTH | <span>DATE: ${element["publishedAt"]}</span></h6>
            <h2>${element["title"]}</h2>
            <p>${element["description"]}</p>
            <a href="${element["url"]}">READ MORE</a>
            <h6>INDIA</h6>
        </div>`
            newsHtml += news;






        });
        Bigslides.innerHTML = newsHtml;

    } else {
        console.log("Some error occured")
    }

    let k = 0;
    const slideLK = document.getElementById(`slidebig${k}`);
    slideLK.classList.add("active");

    BigA.addEventListener("click", () => {
        document.getElementById(`slidebig${k+1}`).classList.add("active");
        document.getElementById(`slidebig${k}`).classList.remove("active");
        k = k + 1;
        return k;
    })

    BigZ.addEventListener("click", () => {
        document.getElementById(`slidebig${k-1}`).classList.add("active");
        document.getElementById(`slidebig${k}`).classList.remove("active");
        k = k - 1;
        return k;
    })



}


xhr5.send()