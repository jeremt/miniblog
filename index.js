
const router = createRouter(document.querySelector('#root'));

router.route('/', async () => {
    const result = await fetch('https://dummyjson.com/posts');
    const data = await result.json();
    return `
        <h1>Miniblog</h1>
        <main>
            ${data.posts.map(({id, title, body}) => `
                <article>
                    <h2><a href="/post/${id}">${title}</a></h2>
                    <p>${body}</p>
                </article>`
            ).join('')}
        </main>
    `;
});

router.route('/post/:id', async ({id}) => {
    const result = await fetch(`https://dummyjson.com/posts/${id}`);
    const data = await result.json();
    return `
        <h1>${data.title}</h1>
        <main>${data.body}</main>
    `;
});

router.route('/about', `<div>About</div>`);
router.notFound(`
    <h1>404</h1>
    <p>Cette page n'existe pas</p>
`)

router.start();