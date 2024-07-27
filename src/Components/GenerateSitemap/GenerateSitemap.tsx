// src/components/GenerateSitemap.js
import React from 'react';
import routes from '';

const GenerateSitemap = () => {
  const generateSitemapXML = () => {
    const baseUrl = 'https://your-website.com'; // Replace with your actual URL
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    routes.forEach(route => {
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${baseUrl}${route.path}</loc>\n`;
      sitemap += `  </url>\n`;
    });

    sitemap += `</urlset>`;

    return sitemap;
  };

  const downloadSitemap = () => {
    const sitemapXML = generateSitemapXML();
    const blob = new Blob([sitemapXML], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button onClick={downloadSitemap}>Generate Sitemap</button>
    </div>
  );
};

export default GenerateSitemap;
