let select = document.getElementById("tbody")
let arr = []
axios({

    url: "https://jsonplaceholder.typicode.com/users",
    method: "get"
}).then(function (res) {
    arr=res.data
    draw()
})

function draw() {
    let u=""
    for (let i = 0; i < arr.length; i++) {
        u += `<tr>
                    <th class="success">${arr[i].id}</th>
                    <th class="danger">${arr[i].name}</th>
                    <th class="warning">${arr[i].username}</th>
                    
                    <th class="btn group">
                    <a href="./album.html?id=${arr[i].id}">
                    <button class="btn btn-success">albums</button>
                    </a>
                    <a href="./todo.html?id=${arr[i].id}">
                    <button class="btn btn-primary">todos</button>
                    </a>

                    <a href="./post.html?id=${arr[i].id}">
                    <button class="btn btn-dark">pots</button>
                    </a>
                    </th>
                </tr>`        
    }
    select.innerHTML = u
}




