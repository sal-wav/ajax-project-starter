
const fetchImage = () => {
    fetch('/kitten/image')
        .then(res => {
            debugger;
            return res.json();
        })
        .then((data) => {
            debugger;
            document.querySelector('.cat-pic').src = data.src;
        })
        .catch((error) => {
            alert('ahhhhhhhhh');
        });
}

document.addEventListener('DOMContentLoaded', fetchImage)
