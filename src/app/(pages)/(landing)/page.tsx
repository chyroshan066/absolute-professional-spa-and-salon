import { Intro } from "@/components/Intro/Intro";
import { Hero } from "./_components/Hero/Hero";
import { Offer } from "@/components/Offer/Offer";
import { Services } from "@/components/Services/Services";
import { Treatments } from "@/components/Treatments/Treatments";
import { Pricing } from "./_components/Pricing/Pricing";
import { Indicator } from "@/components/Indicator/Indicator";
import { Gallery } from "@/components/Gallery/Gallery";
import { Testimonials } from "@/components/Testimonials/Testimonials";

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
