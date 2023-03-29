const post = async (event) => {
    event.preventDefault();

    const post_name = document.querySelector('#post-title').value.trim();
    const post_text = document.querySelector('#post-post').value.trim();



    if (post_name && post_text) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ post_name, post_text}),
            headers: { 'Content-Type': "application/json" },
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            const x = await response.json()
        }
    }
}


document.querySelector('#post-form').addEventListener('submit', post);
