//create map
const map = L.map('mapid').setView([-29.8905085,-51.0962388], 13);

//create and add title layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

//create and add marker
let marker;

map.on('click', (e) => {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map);
});


// add field of photos

function addPhotoField(){
    // get photo's container #images
    const container = document.querySelector('#images');
    // get the container for duplicate .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');
    // realize the clone of last image add
    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true);

    // verify if container has a content
    const input = newFieldContainer.children[0];
    
    if (input.value == '') {
        return
    }

    //remove contents of clone
    newFieldContainer.children[0].value = '';
    // add clone in container #images
    container.appendChild(newFieldContainer);
}

function deleteField(e) {
    const span = e.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');
    
    if (fieldsContainer.length < 2) {
        span.parentNode.children[0].value='';
        return
    }

    span.parentNode.remove();

}

function toggleSelect(e) {
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active'))

    const button = e.currentTarget;
    button.classList.add('active');

    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;

}