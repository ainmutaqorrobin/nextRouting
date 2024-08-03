"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedImagePage({ params: { slugId } }) {
  const router = useRouter();
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slugId);
  if (!newsItem) notFound();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} />
        </div>
      </dialog>
    </>
  );
}
