import Link from "next/link";
import { memo } from "react";

const INTROTEXT: string[] = [
    "Massage boosts brain power",
    "Massage helps you to breathe better",
    "Massage improves your strength",
    "Massage helps you to focus",
    "Massage helps give meaning to your day"
];

export const Intro = memo(() => (
    <section
        className="ftco-section ftco-intro"
        style={{ backgroundImage: "url(/images/intro.jpg)" }}
    >
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-md-6">
                    <div
                        className="heading-section"
                        data-aos="fade-up"
                    >
                        <h2 className="mb-4">Benefits of Doing Spa &amp; Massage</h2>
                    </div>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="50"
                    >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                    <ul className="mt-5 do-list">
                        {INTROTEXT.map((message, index) => (
                            <li
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={50 + (index * 10)}
                            >
                                <Link href="#">
                                    <span className="ion-ios-checkmark-circle mr-3" />Spa &amp; {message}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    </section>
));

Intro.displayName = "Intro";