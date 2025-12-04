"use client";

import { memo } from "react";
import { TitleHeader } from "./utility/TitleHeader";
import { TESTIMONIALS } from "@/constants/testimonials";
import { useOwlCarousel } from "@/hooks/useOwlCarousel";

const CAROUSEL_OPTIONS = {
    center: true,
    loop: true,
    items: 1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    dots: true,
    navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">'
    ] as [string, string],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
};

export const Testimonials = memo(() => {
    const { carouselRef } = useOwlCarousel(CAROUSEL_OPTIONS);

    return (
        <section className="ftco-section testimony-section">
            <div className="container">

                <TitleHeader
                    subHeader="Testimony"
                    header="Successful Stories"
                    className="col-md-10"
                />

                <div className="row ftco-animate">
                    <div className="col-md-12">
                        <div
                            ref={carouselRef}
                            className="carousel-testimony owl-carousel"
                        >

                            {TESTIMONIALS.map((review, index) => (
                                <div
                                    key={index}
                                    className="item"
                                >
                                    <div className="testimony-wrap p-4 pb-5">
                                        <div className="text">
                                            <div className="line pl-5">
                                                <p className="mb-4 pb-1">{review.text}</p>
                                                <span className="quote d-flex align-items-center justify-content-center">
                                                    <i className="icon-quote-left" />
                                                </span>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <div
                                                    className="user-img"
                                                    style={{ backgroundImage: `url(${review.imgSrc})` }}
                                                >
                                                </div>
                                                <div className="ml-4">
                                                    <p className="name">{review.name}</p>
                                                    <span className="position">Customer</span>
                                                </div>
                                            </div>
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
})