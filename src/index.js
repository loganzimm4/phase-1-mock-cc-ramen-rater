// write your code here
const ramen = 'http://localhost:3000/ramens';

// place ramen pics in ramen-menu div

fetch (ramen)
    .then(res => res.json())
    .then(data => renderRamenPics(data))

function renderRamenPics(data) {
    const div = document.getElementById('ramen-menu');
    const img = document.createElement('img');
    img.src = data[1].image;
    div.appendChild(img);
   
}
renderRamenPics();

//when an image is clicked, the information of the specified ramen is displayed to the user





//allow for new ramen entries, adding its picture to the div, and logging its information