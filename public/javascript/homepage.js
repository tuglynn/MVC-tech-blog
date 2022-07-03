const deletePost = async (event) => {
    event.preventDefault();
    console.log(event);
}



document.querySelector('.blog-post').addEventListener('click', deletePost);