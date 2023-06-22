import Image from "next/image";
import Section from "@/app/(site)/components/Section";
import ItemsSection from "@/app/(site)/components/ItemsSection";

export default async function Home() {
  return (
    <>
      <Section />
      <ItemsSection />
    </>
  );
}
