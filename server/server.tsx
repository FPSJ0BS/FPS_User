import React from 'react'; 
import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import ReactDOMServer from 'react-dom/server';
import AppRouter from '../src/Navigator/AppRouter';
import fs from 'fs';

const app = express();
const PORT = 3001;

/**
 * @param {string} location
 * @return {string}
 */
const createReactApp = async (location) => {
    const reactApp = ReactDOMServer.renderToString(
        <StaticRouter location={location}>
            <AppRouter />
        </StaticRouter>
    );

    const html = await fs.promises.readFile(`${__dirname}/index.html`, 'utf-8');
    const reactHtml = html.replace(
        '<div id="root"></div>', `<div id="root">${reactApp}</div>`
    );
    return reactHtml;
  
};

app.use("/static", express.static(__dirname));

app.get("*", async (req, res) => {
  const reactApp = await createReactApp(req.url); 
  res.status(200).send(reactApp); 
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
