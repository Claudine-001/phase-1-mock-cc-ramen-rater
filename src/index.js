
document.addEventListener("DOMContentLoaded",event =>{
    fetch ("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(menuItems => {
       
        for(let item of menuItems){
            createMenu(item)
        }
    } )

})

let form = document.getElementById("new-ramen")
form.addEventListener("submit", (e) => { 
    e.preventDefault()
    let name = e.target.myName.value
    let restaurant = e.target.restaurant.value
    let image = e.target.image.value
    let rating = e.target.rating.value
    let comment = e.target.newComment.value
    let menuItem = {
        name:name,
        restaurant:restaurant,
        image:image,
        rating:rating,
        comment:comment
    }
    createMenu(menuItem)
    showDetails(menuItem)
    e.target.reset()
}
)

function createMenu(item){
    let container = document.getElementById("ramen-menu")
    let img = document.createElement("img")
    img.addEventListener("click", (e) =>{
        showDetails(item)
    })
    img.setAttribute("src", item.image)
    container.appendChild(img)
}

function showDetails(item) {
    let detail_image = document.querySelector(".detail-image")
    detail_image.setAttribute("src", item.image) 
    let name = document.querySelector(".name")
    name.textContent = item.name
    let restaurant = document.querySelector(".restaurant")
    restaurant.textContent = item.restaurant
    document.getElementById("rating-display").textContent = item.rating
    document.getElementById("comment-display").textContent = item.comment 
}
// function loadMenuItems(Items){
//     for(let item of menuItems){
//     loadSingleItem(item)
//     }
    
// }

// function loadSingleItem(item){
//     let container = document.getElementbyId("ramen-menu")
//     let img = document.createElement("img")
//     img.setAttribute("scr", item.image)
//     container.appendChild(image)
// }
    
