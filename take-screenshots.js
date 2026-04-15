import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const pages = [
    { url: 'http://localhost:5173/', name: 'home' },
    { url: 'http://localhost:5173/platform', name: 'platform' },
    { url: 'http://localhost:5173/collections-intelligence', name: 'collections' },
    { url: 'http://localhost:5173/lending-lifecycle', name: 'lending' },
  ];

  for (const p of pages) {
    await page.goto(p.url, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: `ss-${p.name}.png`, fullPage: true });
    console.log('Done:', p.name);
  }

  await browser.close();
  console.log('All done!');
})();
