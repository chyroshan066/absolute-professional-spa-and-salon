import { TitleHeader } from "@/components/utility/TitleHeader";
import { memo } from "react";

export const Pricing = memo(() => (
    <section className="ftco-section bg-light">
        <div className="container">

            <TitleHeader
                subHeader="Pricing Tables"
                header="Pricing Treatments"
                className="col-md-7"
            />

            <div className="row">
                <div className="col-md-4 ftco-animate">
                    <div className="block-7">
                        <div className="text-center">
                            <h2 className="heading">Year Card</h2>
                            <span className="price"><sup>$</sup> <span className="number">449</span></span>
                            <span className="excerpt d-block">For 1 Year</span>

                            <h3 className="heading-2 my-4">Enjoy All The Features</h3>

                            <ul className="pricing-text mb-5">
                                <li>Face Treatments</li>
                                <li>Nail Treatments</li>
                                <li>Medical Treatments</li>
                                <li>Hair Removal</li>
                            </ul>

                            <a href="#" className="btn btn-primary d-block px-2 py-4">Get Started</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ftco-animate">
                    <div className="block-7">
                        <div className="text-center">
                            <h2 className="heading">Monthly Card</h2>
                            <span className="price"><sup>$</sup> <span className="number">200</span></span>
                            <span className="excerpt d-block">For 1 Month</span>

                            <h3 className="heading-2 my-4">Enjoy All The Features</h3>

                            <ul className="pricing-text mb-5">
                                <li>Face Treatments</li>
                                <li>Nail Treatments</li>
                                <li>Medical Treatments</li>
                                <li>Hair Removal</li>
                            </ul>

                            <a href="#" className="btn btn-primary d-block px-2 py-4">Get Started</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ftco-animate">
                    <div className="block-7">
                        <div className="text-center">
                            <h2 className="heading">Weekly Card</h2>
                            <span className="price"><sup>$</sup> <span className="number">85</span></span>
                            <span className="excerpt d-block">For 1 Week</span>

                            <h3 className="heading-2 my-4">Enjoy All The Features</h3>

                            <ul className="pricing-text mb-5">
                                <li>Face Treatments</li>
                                <li>Nail Treatments</li>
                                <li>Medical Treatments</li>
                                <li>Hair Removal</li>
                            </ul>

                            <a href="#" className="btn btn-primary d-block px-2 py-4">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
));

Pricing.displayName = "Pricing";