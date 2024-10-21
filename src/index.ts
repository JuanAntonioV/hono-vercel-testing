import { Hono } from 'hono';

const app = new Hono().basePath('/v1');

app.get('/', (c) => {
  return c.json({
    message: 'Hello, world!',
  });
});

export default app;
