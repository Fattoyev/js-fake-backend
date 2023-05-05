let params = new URLSearchParams(window.location.search)
let id=params.get("id")
// console.log(id);
let select = document.getElementById("tbody")
let arr = []
axios({

    url: "https://jsonplaceholder.typicode.com/albums?userId="+id,
    method: "get"
}).then(function (res) {
    arr=res.data
    draw()
})

function draw() {
    let u=""
    for (let i = 0; i < arr.length; i++) {
        u += `<tr>
                    <td>${arr[i].userId}</td>
                    <td>${arr[i].id}</td>
                    <td>${arr[i].title}</td>
                    <td>
                    <a href="./photos.html?albumId=${arr[i].id}"><button class="btn btn-warning">photo</button>
                    </a>
                    </td>
                    
                </tr>`        
    }
    select.innerHTML = u
}

