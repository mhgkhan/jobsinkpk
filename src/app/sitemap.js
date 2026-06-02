import { fetchJobs } from "./page"


export default async function sitemap() {


    const fetchBlogs = await fetchJobs();

    if (!fetchBlogs.error) {
        return fetchBlogs?.data.map((ele) => ({
            url: `${process.env.DOMAIN}/job/${ele.slug}`,
            lastModified: ele.createdAt,
        }))
    }


}