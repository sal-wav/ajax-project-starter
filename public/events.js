
const fetchImage = () => {
    fetch('http://localhost:3000/kitten/image')
    .then (function(res) {
        return res.json()
        
    })
    .then(data => {
        document.querySelector('.cat-pic').src=data.src;
    })
};

document.addEventListener('DOMContentLoaded', fetchImage) 

