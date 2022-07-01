const newFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#post-name').value.trim();
    const post_body = document.querySelector('#post-body').value.trim();


    if (title && post_body) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_body
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create post');
        }
    };
}


document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);