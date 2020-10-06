
const fetchImage = () => {
    document.querySelector('.loader').innerHTML = '...Loading';
    fetch('/kitten/image')
        .then(res => {
            if (!res.ok) {
                alert("Something went wrong! Please try again!")
            };
            return res.json();
        })
        .then((data) => {
            document.querySelector('.cat-pic').src = data.src;
            document.querySelector('.loader').innerHTML = '';
        })
        .catch((error) => {
            console.error(error);
        });
}

document.addEventListener('DOMContentLoaded', (event) => {

    document.getElementById('new-pic').addEventListener('click', (event) => {
        fetchImage();
    })

})
