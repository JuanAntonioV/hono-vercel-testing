import { Hono } from 'hono';

const app = new Hono().basePath('/api');

app.get('/', (c) => {
  return c.json({
    message: 'Hello, world!',
  });
});

export default app;
