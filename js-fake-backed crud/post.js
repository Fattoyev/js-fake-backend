let params = new URLSearchParams(window.location.search)
let id=params.get("id")

let select = document.getElementById("tbody")
let arr = []
axios({

    url: "https://jsonplaceholder.typicode.com/posts?userId="+id,
    method: "get"
}).then(function (res) {
    arr=res.data
    draw()
})

function draw() {
    let u=""
    for (let i = 0; i < arr.length; i++) {
        u += `<tr class="success">
                    <td>${arr[i].userId}</td>
                    <td>${arr[i].id}</td>
                    <td>${arr[i].title}</td>
                    <td>
                        <a href="./comment.html?userId=${arr[i].userId}"><button class="btn btn-info">comments</button></a>
                    </td>
                    
                </tr>`        
    }
    select.innerHTML = u
}
