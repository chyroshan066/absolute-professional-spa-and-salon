import { ParallaxImage } from "@/components/ParallaxImage/ParallaxImage";
import { Team } from "./_components/Team/Team";
import { baseURL } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Specialists - Expert Massage Therapists | Absolute Professional Spa Jhapa, Birtamode, Dhulabari",
    description: "Meet our certified massage therapists and spa specialists at Absolute Professional Spa & Salon. Expert professionals in Thai massage, hot stone therapy, sports massage & more across Jhapa, Birtamode, Dhulabari & Panitanki.",
    keywords: [
        "spa specialists Jhapa",
        "massage therapists Birtamode",
        "spa therapists Dhulabari",
        "massage specialists Panitanki",
        "certified massage therapists Jhapa",
        "expert spa therapists Nepal",
        "professional massage specialists Birtamode",
        "trained therapists Dhulabari",
        "qualified spa professionals Jhapa",
        "experienced massage experts Nepal",
        "Thai massage specialist Jhapa",
        "hot stone therapy expert Birtamode",
        "sports massage therapist Dhulabari",
        "pain relief specialist Nepal",
        "Swedish massage expert Jhapa",
        "aromatherapy specialist Birtamode",
        "therapeutic massage expert Dhulabari",
        "spa team Jhapa",
        "massage therapy team Birtamode",
        "wellness professionals Dhulabari",
        "best massage therapists Jhapa",
        "top spa specialists Nepal",
        "certified spa professionals Jhapa",
        "trained massage therapists Nepal",
        "experienced wellness experts",
        "skilled therapists Birtamode",
        "professional spa staff Dhulabari",
        "Absolute Professional Spa specialists",
        "best spa team Jhapa Nepal"
    ],
    alternates: {
        canonical: "/specialists",
    },
    openGraph: {
        title: "Our Specialists - Expert Massage Therapists at Best Spa in Jhapa",
        description: "Discover our team of certified massage therapists and spa specialists. Absolute Professional Spa & Salon's expert professionals provide premium treatments in Birtamode, Dhulabari, and Panitanki.",
        url: `${baseURL}/specialists`,
        images: [
            {
                url: `${baseURL}/images/preview.webp`,
                width: 1200,
                height: 630,
                alt: "Expert Massage Therapists - Absolute Professional Spa Specialists in Jhapa, Nepal",
            }
        ],
    },
};

export default function Specialists() {
    return <>
        <ParallaxImage page="Specialists" />
        <Team />
    </>;
}