const imageElement = document.getElementById('myImg');
const changeImageBtn = document.getElementById('changeImageBtn');
console.log(changeImageBtn);

changeImageBtn.addEventListener('click', () => {
    console.log("Inside the update function.....");

    imageElement.style.height = '100px';
    imageElement.src = 'NewImage.png';
    imageElement.alt = 'New Image';

    console.log("update function executed.....");
})