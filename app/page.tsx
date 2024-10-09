import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src={"/images/miku_and_chief.png"}
        width={500}
        height={500}
        alt="chief and miku"
      />
    </>
  );
}
