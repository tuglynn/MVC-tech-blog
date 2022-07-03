const makeNewComment = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('#comment');

    if (comment) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                comment
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert('please enter your comment before posting it.')
        }
    }
}


document.querySelector('.new-comment-form').addEventListener('submit', makeNewComment);