import ModalBackDrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/util/news";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params: { slugId } }) {
  const newsItem = await getNewsItem(slugId);
  if (!newsItem) notFound();

  return (
    <>
      <ModalBackDrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} />
        </div>
      </dialog>
    </>
  );
}
