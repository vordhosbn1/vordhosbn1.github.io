// alert('web api dadata being sacecsedded.')


getMovieData();

async function getMovieData(){

    for (let i of data.Search){
        // probably just increment the amount by n, will stop at 9
        // images will be squished on top 
    }

    let url = "https://www.omdbapi.com/?apikey=12215ee6&s=superman";
    try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.Search[0].Poster);
    let moviesEl = document.querySelector("#movies");
    let imageEl = document.createElement("img");
    imageEl.src = data.Search[0].Poster;
    imageEl.width = 300;
    let h2El = document.createElement("h2");
    h2El.textContent = data.Search[0].Title;
    
    moviesEl.append(imageEl);
    moviesEl.append(h2El);
    
    console.log(response);
    } catch(error){
        console.log("Network error" + error)
    }

}


// let response = await fetch(url);
// let data = await response.json();
// console.log(response);

