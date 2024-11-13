const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    const method = req.method;
    switch(method) {
        case 'GET':
            switch (req.url) {
                case '/':
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end('Hello World');
                    break;
            }
    }
});

server.listen(port, () => {console.log(`Rodando em: http://localhost:${port}`)})
