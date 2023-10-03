fetch('https://books-api.dicoding.dev/list').then((response) => {
    return response.json();
}).then((responseJson) => {
    console.log(responseJson);
}).catch((error => {
    console.log(error)
}))

// Async & Await
async function getBook() {
    try {
        const response = await fetch('https://books-api.dicoding.dev/list');
        const responseJson = await response.json();
        console.log(responseJson);
    } catch (error) {
        console.log(error);
    }
}

// Fetch to POST Method
fetch('https://books-api.dicoding.dev/list', {
 method: 'POST',
 headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': '12345'
 },
 body: JSON.stringify({
    id: 10,
    title: 'Edensor',
    author: 'Andrea Hirata'
 })
})