const deletePost = async (event) => {
    event.preventDefault();
    console.log(event);
}



document.querySelector('.post-box').addEventListener('click', deletePost);