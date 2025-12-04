import { Intro } from "@/components/Intro";
import { Hero } from "./_components/Hero";
import { Offer } from "@/components/Offer";
import { Services } from "@/components/Services";
import { Treatments } from "@/components/Treatments";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Offer />
      <Services />
      <Treatments />
    </>
  );
}
