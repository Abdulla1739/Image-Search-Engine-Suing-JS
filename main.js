const searchForm = document.getElementById("search-Form");
const searchBox = document.getElementById("Search-Box");
const searchResult = document.getElementById("seach-Result");
const Showbtn = document.getElementById("Show-More-Btn");

const accessKey = "_IfaDdURnGnMbAPZmfpTGBHHMa-b7hCI0BaATkXM2to"



let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    


    fetch(url)
        .then(response => response.json())
        .then(data => {
            if(page === 1){
                searchResult.innerHTML = "";
            }

            const results = data.results;

            results.map((result) => {
                const image = document.createElement("img");
                image.src = result.urls.small;
                const imageLink = document.createElement("a");
                imageLink.href = result.links.html;
                imageLink.target = "_blank";

                imageLink.appendChild(image);
                searchResult.appendChild(imageLink);
            })

            Showbtn.style.display = "block";
        })
        .catch(error => console.error('Error:', error));
}
    
searchForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    page=1;
    searchImages();
})

Showbtn.addEventListener("click",()=>{
    page++;
    searchImages();
})

