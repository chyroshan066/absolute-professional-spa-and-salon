"use client";

import { Text } from "@/types";
import { memo, useEffect, useRef } from "react";

interface Indicator extends Text {
    number: string;
}

const INDICATOR_DATA: Indicator[] = [
    {
        number: "2560",
        text: "Happy Customers",
    },
    {
        number: "60",
        text: "Treatments",
    },
    {
        number: "50",
        text: "Years of Experience",
    },
    {
        number: "100",
        text: "Lesson Conducted",
    },
];

export const Indicator = memo(() => {
    const hasAnimated = useRef(false);

    useEffect(() => {
        // 1. Define the observer callback
        const handleIntersection = (
            entries: IntersectionObserverEntry[],
            observer: IntersectionObserver
        ) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated.current) {

                    // 2. Safe access to jQuery
                    const $ = (window as any).$;

                    // Check if jQuery and animateNumber are loaded
                    if ($ && $.fn.animateNumber) {
                        hasAnimated.current = true; // Mark as done so it doesn't re-run

                        // 3. Find all number elements and animate them
                        $('.ftco-counter .number').each(function (this: HTMLElement) {
                            const $this = $(this);
                            const num = $this.data('number');

                            $this.animateNumber(
                                {
                                    number: num,
                                    numberStep: function (now: number, tween: any) {
                                        const floored_number = Math.floor(now);
                                        const target = $(tween.elem);
                                        target.text(floored_number);
                                    },
                                },
                                2500 // Duration in milliseconds
                            );
                        });

                        // Stop observing once triggered
                        observer.disconnect();
                    }
                }
            });
        };

        // 4. Create the observer
        const observer = new IntersectionObserver(handleIntersection, {
            root: null, // viewport
            threshold: 0.5, // Trigger when 50% of the section is visible
        });

        // 5. Target the section
        const section = document.getElementById("section-counter");

        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="ftco-counter img"
            id="section-counter"
            style={{ backgroundImage: "url(/images/indicator-bg.webp)" }}
            data-stellar-background-ratio="0.5"
        >
            <div className="overlay" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row">

                            {INDICATOR_DATA.map((data, index) => (
                                <div
                                    key={index}
                                    className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap"
                                    data-aos="fade-up"
                                >
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong
                                                className="number"
                                                data-number={data.number}
                                            >
                                                0
                                            </strong>
                                            <span>{data.text}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});

Indicator.displayName = "Indicator";