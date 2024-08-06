"use client";
import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [news, SetNews] = useState();
  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Failed to fetch news.");
        setIsLoading(false);
      }
      const news = await response.json();
      setIsLoading(false);
      SetNews(news);
    }

    fetchNews();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  let newsContent;
  if (news) newsContent = <NewsList news={news} />;
  return (
    <>
      <h1>This is news page</h1>
      {newsContent}
    </>
  );
}
