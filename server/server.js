import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

// Initialize the server and middlewares
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Resolve the directory name for ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.use(middlewares);

// Add custom middleware to include X-Total-Count and handle CORS
server.use((req, res, next) => {
    // Continue to JSON Server router
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    next();
});

// Customize the router rendering to include X-Total-Count
router.render = (req, res) => {
    const totalCount = res.locals.data.length;
    res.header('X-Total-Count', totalCount);
    res.json(res.locals.data);
};

// Use the JSON Server router
server.use(router);

// Start the server
server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
});
