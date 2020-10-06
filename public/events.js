let score = 0;

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
    });

try {
    document.getElementById('upvote').addEventListener('click', (event) => {
        score++;
        document.querySelector('.score').innerHTML = score;
    })

    document.getElementById('downvote').addEventListener('click', (event) => {
        score--;
        document.querySelector('.score').innerHTML = score;
    })
} catch(e) {
    console.error(e);
};


document.getElementById('submit').addEventListener('click',  event.preventDefault((event) => {
    let commentObject = formData();
    let testValue = document.getElementById('user-comment').value;
    commentObject.append(testValue);
    commentObject.values((comment) => {
        document.querySelector('.comments').innerHTML = comment;
    })

    }))

})
