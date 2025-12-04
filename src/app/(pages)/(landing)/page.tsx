import { Intro } from "@/components/Intro";
import { Hero } from "./_components/Hero";
import { Offer } from "@/components/Offer";
import { Services } from "@/components/Services";
import { Treatments } from "@/components/Treatments";
import { Pricing } from "./_components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Offer />
      <Services />
      <Treatments />
      <Pricing />
    </>
  );
}
