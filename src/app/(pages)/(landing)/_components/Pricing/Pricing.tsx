import { TitleHeader } from "@/components/utility/TitleHeader";
import { PRICING } from "@/constants";
import Link from "next/link";
import { memo } from "react";
import styles from "./Pricing.module.css";

export const Pricing = memo(() => (
    <section className="ftco-section bg-light">
        <div className="container">

            <TitleHeader
                subHeader="Pricing Tables"
                header="Pricing Treatments"
                className="col-md-7"
                outerDivClassName="pb-3"
            />

            <div className="row">
                {PRICING.map((card, index) => (
                    <div
                        key={index}
                        className="col-md-4"
                        data-aos="fade-up"
                    >
                        <div className={styles.block7}>
                            <div className={`text-center ${styles.textCenter}`}>
                                <h2 className={styles.heading}>Pay</h2>
                                <span className={styles.price}>
                                    <sup>Rs.</sup> <span className={styles.number}>{card.price}</span>
                                </span>
                                <span className={`${styles.excerpt} ${styles.dBlock}`}>For {card.duration} hrs</span>
                                <h3 className={`${styles.heading2} my-4`}>Enjoy All Massages</h3>
                                <ul className={`${styles.pricingText} mb-5`}>
                                    {card.features.map((list, featureIndex) => (
                                        <li key={featureIndex}>{list}</li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className={`btn btn-primary ${styles.btnPrimary} ${styles.dBlock} px-2 py-4`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
));

Pricing.displayName = "Pricing";