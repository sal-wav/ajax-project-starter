document.addEventListener('DOMContentLoaded', (event) => {

    let kitten;

    function newKittenPic(e) {
        let returnValue = fetch(window.location+'kitten/image');
        document.getElementById('loader').innerHTML = '<p>Loading...<p>';
        returnValue.then((res => {
            if (!res.ok) {
                return 'error';
            }
            document.getElementById('error').innerHTML = '';
            return res.json();
        }).then((response => {
            kitten = response;
            document.getElementById('catPic').setAttribute('src', response.src);
            document.getElementById('loader').innerHTML = '';
        }).catch(err => {
            console.error(err);
        }))
    )};

    
})
