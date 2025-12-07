import { TitleHeader } from "@/components/utility/TitleHeader";
import { PRICING } from "@/constants";
import Link from "next/link";
import { memo } from "react";

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
                        <div className="block-7">
                            <div className="text-center">
                                <h2 className="heading">Pay</h2>
                                <span className="price">
                                    <sup>Rs.</sup> <span className="number">{card.price}</span>
                                </span>
                                <span className="excerpt d-block">For {card.duration} hrs</span>
                                <h3 className="heading-2 my-4">Enjoy All Massages</h3>
                                <ul className="pricing-text mb-5">
                                    {card.features.map((list, featureIndex) => (
                                        <li key={featureIndex}>{list}</li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className="btn btn-primary d-block px-2 py-4"
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