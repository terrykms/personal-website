import { SITE_URL } from "@/lib/site";

// Article pages are left out: their canonical URL is the Medium original,
// and sitemaps should only list canonical URLs.
const routes = ["", "/about", "/projects", "/articles", "/contact"];

const sitemap = () => routes.map((route) => ({ url: `${SITE_URL}${route}` }));

export default sitemap;
