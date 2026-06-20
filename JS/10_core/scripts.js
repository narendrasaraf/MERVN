let body = fetch("https://jsonplaceholder.typicode.com/posts");
console.log(body);

async function getData() {
    let resultFromServer = await fetch("https://jsonplaceholder.typicode.com/posts");

    console.log(await resultFromServer.json());
}
getData();
// console.log(resultFromServer);