let params = new URLSearchParams(window.location.search)
let id = params.get("userId")
console.log(id);
let select = document.getElementById("tbody")
let arr = []
axios({

    url: "https://jsonplaceholder.typicode.com/comments?postId=" + id,
    method: "get"
}).then(function (res) {
    arr = res.data
    draw()
})
// console.log(id);
function draw() {
    let c = ""
    for (let i = 0; i < arr.length; i++) {
        c += `<tr>
                    <td>${arr[i].postId}</td>
                    <td>${arr[i].id}</td>
                    <td>${arr[i].name}</td>
                    <td>${arr[i].email}</td>
                    <td>
                        <a href="./post.html?id=${arr[i].postId}"><button class="btn btn-danger">posts back</button></a>
                    </td>
                </tr>`
    }
    select.innerHTML = c
    console.log(select.innerHTML = c);
}
