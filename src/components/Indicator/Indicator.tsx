"use client";

import { Text } from "@/types";
import { memo, useEffect, useRef } from "react";
import styles from "./Indicator.module.css";

interface Indicator extends Text {
    number: string;
}

const INDICATOR_DATA: Indicator[] = [
    {
        number: "2560",
        text: "Happy Customers",
    },
    {
        number: "7",
        text: "Treatments",
    },
    {
        number: "50",
        text: "Years of Experience",
    },
];

export const Indicator = memo(() => {
    const hasAnimated = useRef(false);

    useEffect(() => {
        const handleIntersection = (
            entries: IntersectionObserverEntry[],
            observer: IntersectionObserver
        ) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    // Use type assertion for jQuery
                    const $ = window.$ as JQueryStatic & {
                        fn: {
                            animateNumber?: (options: unknown, duration?: number) => JQuery;
                        };
                    };

                    if ($ && $.fn && $.fn.animateNumber) {
                        hasAnimated.current = true;

                        $('.ftco-counter .number').each(function (this: HTMLElement) {
                            const $this = $(this);
                            const num = $this.data('number') as string;

                            // Use the animateNumber plugin
                            $.fn.animateNumber?.call($this, {
                                number: parseInt(num),
                                numberStep: function (now: number) {
                                    const floored_number = Math.floor(now);
                                    $this.text(floored_number.toString());
                                },
                            }, 2500);
                        });

                        observer.disconnect();
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.5,
        });

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
                                    className={`col-md-6 col-lg-4 d-flex justify-content-center ${styles.counterWrap}`}
                                    data-aos="fade-up"
                                >
                                    <div className={`text-center`}>
                                        <div className={`text ${styles.text}`}>
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
    );
});

Indicator.displayName = "Indicator";