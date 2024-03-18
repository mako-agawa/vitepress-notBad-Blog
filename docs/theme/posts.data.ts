import { createContentLoader } from "vitepress";

export default createContentLoader("posts/*.md", {
  transform(rawData) {
    const filterdData = rawData.filter(
      (page) => page.url !== "/posts/postList.html"
    );

    const sortedData = filterdData.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
    });

    return sortedData;
  },
});