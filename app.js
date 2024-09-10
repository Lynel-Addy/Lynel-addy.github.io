document.addEventListener("DOMContentLoaded", () => {

const images = document.querySelectorAll("img");

for(cost image of images){
    fetch(https://www.gettyimages.co.uk/detail/photo/side-view-of-leopard-walking-on-field-bandipur-royalty-free-image/1496958864?adppopup=true)
        .then(resonse => response. jso())
        .then(data => image.src = data.message)
        image.src = data.message
        image.width = 100;
        image.height = 100;
}

} )