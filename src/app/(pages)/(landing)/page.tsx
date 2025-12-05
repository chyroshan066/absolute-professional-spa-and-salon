import { Intro } from "@/components/Intro";
import { Hero } from "./_components/Hero";
import { Offer } from "@/components/Offer";
import { Services } from "@/components/Services";
import { Treatments } from "@/components/Treatments";
import { Pricing } from "./_components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Indicator } from "@/components/Indicator";
import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Offer />
      <Services />
      <Treatments />
      <Pricing />
      <Testimonials />
      <Indicator />
      <Gallery />
    </>
  );
}
