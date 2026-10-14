import { SITE_URL } from "@/lib/site";

const robots = () => ({
  rules: { userAgent: "*", allow: "/" },
  sitemap: `${SITE_URL}/sitemap.xml`,
});

export default robots;
