"use client";
import Image from "next/image";

export default function Sandbox() {
  return (
    <div className="my-0 mx-auto bg-slate-800 w-full h-screen">
      <h1>Native</h1>
      <div>
        <div className="flex flex-col gap-4 aspect-[3/5] max-w-[457px]">
          <div className="relative">
            <button className="!absolute top-[50%] left-3">◀️</button>
            <button className="!absolute top-[50%] right-3">▶️</button>
            <img
              src="https://picsum.photos/900/900"
              className="bg-red-400 aspect-[3/4] object-cover object-center"
            />
          </div>
          <div
            id="thumbnail-container"
            className="flex flex-row overflow-x-scroll flex-1 gap-2"
          >
            {[
              "https://picsum.photos/1000/1000",
              "https://picsum.photos/1200/1200",
              "https://picsum.photos/900/900",
              "https://picsum.photos/1080/1080",
              "https://picsum.photos/850/900",
              "https://picsum.photos/1900/1080",
              "https://picsum.photos/1366/780",
            ].map((src) => (
              <Thumbnail src={src} key={src} />
            ))}
          </div>
        </div>
      </div>
      <h1>Next Image</h1>
      <div>
        <div className="flex flex-col gap-4 aspect-[3/5] max-w-[457px]">
          <div className="relative aspect-[3/4]">
            <button className="!absolute top-[50%] left-3">◀️</button>
            <button className="!absolute top-[50%] right-3">▶️</button>
            <Image
              src="https://picsum.photos/900/900"
              className="bg-red-400 aspect-[3/4] object-cover object-center"
              alt="main"
              fill
            />
          </div>
          <div
            id="thumbnail-container"
            className="flex flex-row overflow-x-scroll flex-1 gap-2 relative aspect-[3/4]"
          >
            {[
              "https://picsum.photos/1000/1000",
              "https://picsum.photos/1200/1200",
              "https://picsum.photos/900/900",
              "https://picsum.photos/1080/1080",
              "https://picsum.photos/850/900",
              "https://picsum.photos/1900/1080",
              "https://picsum.photos/1366/780",
            ].map((src) => (
              <Thumbnail src={src} key={src} type="next" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Thumbnail({ src, type = "native" }: any) {
  if (type === "native") {
    return (
      <img
        alt={`thumbnail ${src}`}
        src={src}
        className="bg-yellow-800 aspect-[3/4] h-full object-cover object-center"
      />
    );
  }

  return (
    <Image
      fill
      src={src}
      alt={`thumbnail ${src}`}
      className="bg-yellow-800 aspect-[3/4] h-full object-cover object-center"
    />
  );
}
