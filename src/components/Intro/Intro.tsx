import Link from "next/link";
import { memo } from "react";
import styles from "./Intro.module.css";
import { Container } from "../utility/Container";

const INTROTEXT: string[] = [
    "Massage boosts brain power",
    "Massage helps you to breathe better",
    "Massage improves your strength",
    "Massage helps you to focus",
    "Massage helps give meaning to your day"
];

export const Intro = memo(() => (
    <Container
        className={styles.ftcoIntro}
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/images/intro.webp)" }}
    >

        <div className={`row ${styles.justifyContentEnd}`}>
            <div className="col-md-6">
                <div className={styles.ftcoIntroContent}>
                    <div
                        className="heading-section"
                        data-aos="fade-up"
                    >
                        <h2 className="mb-4">Benefits of Doing Spa &amp; Massage</h2>
                    </div>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="50"
                    >Indulge in the healing art of massage and spa therapy. Our treatments relieve chronic pain, reduce stress, improve flexibility, and promote deep relaxation—helping you achieve optimal wellness from the inside out.</p>

                    <ul className={`${styles.mt5} ${styles.doList}`}>
                        {INTROTEXT.map((message, index) => (
                            <li
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={50 + (index * 10)}
                            >
                                <Link href="#">
                                    <span className={`ion-ios-checkmark-circle ${styles.mr3}`} />Spa &amp; {message}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    </Container>
));

Intro.displayName = "Intro";