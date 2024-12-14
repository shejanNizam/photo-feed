import { getAllPhotos } from "@/lib/image-data";

export default function Home() {
  const photos = getAllPhotos();
  console.log(photos);

  return (
    <>
      <h3 className="text-5xl "> Photo Feed </h3>
    </>
  );
}
