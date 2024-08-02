import http from 'http';
import {PORT} from '../common/constants';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*'
};

const server = http.createServer((request, response) => {
  if (request.method !== 'POST') {
    response.writeHead(405, 'Method Not Allowed').end();
    return;
  }
  const buffer: string[] = [];
  request.setEncoding('utf-8');
  request.on('data', (chunk: string) => buffer.push(chunk));
  request.on('close', () => {
    console.log(buffer.join('$'));
    response.writeHead(200, 'OK', {'Content-Type': 'text/plain', ...cors}).end(buffer.join('') || '(No content received)');
  })
});

server.listen(PORT);