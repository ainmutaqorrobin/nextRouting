import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/util/news";

export default function ArchiveYearPage({ params: { year } }) {
  const news = getNewsForYear(year);

  return <NewsList news={news} />;
}
