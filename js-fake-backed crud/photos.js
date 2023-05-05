let params = new URLSearchParams(window.location.search)
let id=params.get("albumId")
console.log(id);
let div = document.getElementById("div")
let arr = []

axios({

    url: "https://jsonplaceholder.typicode.com/photos?albumId="+id,
    method: "get"
}).then(function (res) {
    arr=res.data
    draw()
})
function draw() {
    let u=""
    for (let i = 0; i < arr.length; i++) {
        u += `<div class=" box card col-2 text-center ">
            <div class="block col-2 m-3">
                <img src="${arr[i].thumbnailUrl}" alt="#">
            </div>
            <p>${arr[i].title}</p>

            <a href="./album.html?id=${arr[i].albumId}">
                <button class="btn btn-danger">albums back</button>
            </a>
        </div>`        
    }
    div.innerHTML = u
}



