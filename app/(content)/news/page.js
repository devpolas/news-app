import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  // nextjs components are server side components this components not return jsx code also a async function!!
  // const response = await fetch("http://localhost:8080/news");
  // if (!response.ok) {
  //   throw new Error("Failed to fetch news");
  // }
  // const news = await response.json();

  // better way to fetch data from database if you have a database
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
