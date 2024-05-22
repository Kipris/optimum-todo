import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

app.use(cors());

app.get('/proxy', async (req, res) => {
    const url = 'https://try.direct/server/app/stacks/search';
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
});

const port = 3000;
app.listen(port, () => console.log(`Proxy running on http://localhost:${port}`));
