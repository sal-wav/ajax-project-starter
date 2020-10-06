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

    const commentForm = document.querySelector('.comment-form');
    
    commentForm.addEventListener('submit',  (event) => {
        event.preventDefault();
        let commentObject = new FormData(commentForm);
        let comment = commentObject.get('user-comment');
        let commentArray = fetch('/kitten/comments', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({comment: comment})
    })

    commentArray.then(res => {
            if (!res.ok) {
                alert("Something went wrong! Please try again!")
            };
            return res.json();
        })
        .then(json => {
            let comments = json.comments;
            document.querySelector('.comments').innerHTML = comments;
        })
    })


})
