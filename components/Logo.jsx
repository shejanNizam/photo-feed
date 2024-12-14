import Image from "next/image";

export default function Logo() {
  return (
    <>
      <div class="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <Image
            width={100}
            height={40}
            class="max-w-[100px] md:max-w-[165px]"
            src="/lws_logo.png"
            alt="Lws"
          />
        </a>
      </div>
    </>
  );
}
