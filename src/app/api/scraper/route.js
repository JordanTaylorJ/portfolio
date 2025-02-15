import puppeteer from "puppeteer";

const url = 'https://dev.to/jordantaylorj'

const blogData = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const allArticles = await page.evaluate(() => {
        const articles = document.querySelectorAll('.crayons-story')
        return Array.from(articles).slice(0,3).map((article) => {
            console.log(article)
            const title = article.querySelector('a').innerText;
            const url = article.querySelector('a').href;
            return{title, url}
        })
    })
    console.log(allArticles)
}
blogData();

//export { blogData };