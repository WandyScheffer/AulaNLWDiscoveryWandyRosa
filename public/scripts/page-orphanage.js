const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}

//create map
const map = L.map('mapid', options).setView([-29.8905085,-51.0962388], 13);

//create and add title layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create and add marker
L.marker([-29.8905085,-51.0962388], { icon })
.addTo(map)


// Image gallery

function selectImage(event) {
    const button = event.currentTarget;

    //remover classes .active de todos os bottons

    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    //selecionar imagem clicada
    const img_adress = button.querySelector("img").src;
    
    //atualizar container da image
    const container_image = document.querySelector(".orphanage-details img").src=img_adress;

    // adicionar a classe .active para o botão clicado
    button.classList.add("active");
}