import { getNewsItem } from "@/util/news";
import { notFound } from "next/navigation";

export default async function ImagePage({ params: { slugId } }) {
  const newsItem = await getNewsItem(slugId);
  if (!newsItem) notFound();

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} />
    </div>
  );
}
