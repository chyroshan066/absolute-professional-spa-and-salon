"use client";

import { memo } from "react";
import { TitleHeader } from "../utility/TitleHeader";
import { TESTIMONIALS } from "@/constants/testimonials";
import { useOwlCarousel } from "@/hooks/useOwlCarousel";
import styles from "./Testimonials.module.css";
import { Container } from "../utility/Container";

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
        <Container className={`testimony-section ${styles.testimonySection}`}>

            <TitleHeader
                subHeader="Testimony"
                header="Successful Stories"
                className="col-md-10"
                outerDivClassName="pb-3"
            />

            <div
                className="row"
                data-aos="fade-up"
            >
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
                                <div className={`${styles.testimonyWrap} p-4 pb-5`}>
                                    <div className={`text ${styles.testimonialText}`}>
                                        <div className={styles.line}>
                                            <p className={`mb-4 ${styles.pb1}`}>{review.text}</p>
                                            <span className={styles.quote}>
                                                <i className="ion-ios-quote" />
                                            </span>
                                        </div>

                                        <div className="d-flex align-items-center mt-4">
                                            <div
                                                className={`user-img ${styles.userImg}`}
                                                style={{ backgroundImage: `url(${review.imgSrc})` }}
                                            />
                                            <div className={styles.userInfo}>
                                                <p className={styles.name}>{review.name}</p>
                                                <span className={styles.position}>Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </Container>
    )
});

Testimonials.displayName = "Testimonials";