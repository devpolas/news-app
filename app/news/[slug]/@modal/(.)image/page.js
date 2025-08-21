"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsItemSlug);

  const route = useRouter();

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div
        className='modal-backdrop'
        onClick={() => {
          route.back();
        }}
      />
      <dialog className='modal' open>
        <div className='fullscreen-image'>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
