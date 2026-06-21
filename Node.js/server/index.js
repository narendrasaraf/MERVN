const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();
    const log = ` ${Date.now()} : New request for ${req.url} with method ${req.method}\n`;
    fs.appendFile('server.log', log + '\n', (err, data) => {
        res.end('Hello from the server');
    });
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    switch (myUrl.pathname) {
        case '/':
            res.end('Hello from the server'); break;
        case '/about':
            const username = myUrl.query.username;
            res.end(`Hey there ${username} here and Go to narendrasaraf.in to know more about me !!`); break;
        case '/contact':
            res.end('Hey there contact me on narendrasaraf16@gmail.com !!'); break;
        case '/Projects':
            res.end('Go to narendrasaraf.in/Projects to know more about me  !!'); break;
        default:
            res.end('404 Not Found'); break;
    }
});

myServer.listen(8000, () => {
    console.log('Server is running on port 8000');
});
