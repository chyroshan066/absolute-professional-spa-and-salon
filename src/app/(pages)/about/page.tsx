import { Gallery } from "@/components/Gallery";
import { Indicator } from "@/components/Indicator";
import { Intro } from "@/components/Intro";
import { Offer } from "@/components/Offer";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function About() {
    return <>
        <ParallaxImage page="About" />
        <Intro />
        <Offer />
        <Services />
        <Testimonials />
        <Indicator />
        <Gallery />
    </>;
}