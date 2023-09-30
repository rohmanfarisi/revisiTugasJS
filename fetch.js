// const searchButton = document.querySelector(`.search-button`);
// searchButton.addEventListener(`click`, function () {

//     const inputKeyWord = document.querySelector(`.input-keyword`);
//     fetch(`https://newsapi.org/v2/everything?apiKey=2b0266adf916425680f7861211d99058&q=`+ inputKeyWord.value)
//     .then(response => response.json())
//     .then(response => {
//         const news = response.articles;
//         let cards = ``;
//         news.forEach(n => cards += showCards(n));
//         const newsContainer = document.querySelector(`.news-container`);
//         newsContainer.innerHTML = cards;

          
//         })
//     });


const searchButton = document.querySelector(`.search-button`);
searchButton.addEventListener(`click`, async function () {
    try {
        const inputKeyWord = document.querySelector(`.input-keyword`);
        const news = await getnews(inputKeyWord.value);
        updateUI(news);
    } catch(err) {
        alert (err)
    }
});

function getnews (keyword) {
    return fetch(`https://newsapi.org/v2/everything?apiKey=2b0266adf916425680f7861211d99058&q=` + keyword)
    .then (response => {
        if(!response.ok) {
            throw new Error (`Fill in the search field first`);
        };
        return response.json();
    })
    .then (response => {

        if(response.totalResults === 0) {
            throw new Error (`News not found`)
        };
        return response.articles;
    })
};

function updateUI(news){
    
    let cards = ``;
        news.forEach(n => cards += showCards(n));
        const newsContainer = document.querySelector(`.news-container`);
        newsContainer.innerHTML = cards;
}



function showCards(n) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${n.urlToImage}" class="card-img-top">
                    <div class="card-body">
                    <h3 class="card-title">${n.title} - ${n.source.name}</h3>
                    <h6 class="card-subtitle mb-2 text-muted">${n.author} - ${n.publishedAt}</h6>
                    <p class="card-text">${n.description}</p>
                    <a href="${n.url}" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            `
};
