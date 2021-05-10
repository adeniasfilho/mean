import { createServer } from 'http';
import app, { set } from './backend/app';
const port = process.env.PORT || 3000;
set('port', port);
const server = createServer(app);
server.listen(port);