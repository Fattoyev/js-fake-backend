let params = new URLSearchParams(window.location.search)

let id = params.get("id")

let select = document.getElementById("tbody")
let arr = []
axios({

    url: "https://jsonplaceholder.typicode.com/todos?userId=" + id,
    // method: "get"
}).then(function (res) {
    arr = res.data
    draw()
})

function draw() {
    let u = ""
    debugger
    for (let i = 0; i < arr.length; i++) {
        u += `<tr>
                    <th>${arr[i].userId}</th>
                    <th>${arr[i].id}</th>
                    <th>${arr[i].title} </th>
                    <th>
                    <label >${arr[i].completed}</label>
                    <input type="checkbox" ${arr[i].completed? `checked`:``}>
                    </th>
                </tr>`
    }
    select.innerHTML = u
}

