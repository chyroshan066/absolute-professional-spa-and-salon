import { OFFERS } from "@/constants";
import Link from "next/link";
import { memo } from "react";

export const Offer = memo(() => (
    <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
            <div className="row no-gutters">
                {OFFERS.map((offer, index) => (
                    <div
                        key={index}
                        className="col-md-6 d-flex align-items-stretch"
                    >
                        <div className={`offer-deal text-center px-2 px-lg-5 ${index === 1 && 'active'}`}>
                            <div
                                className="img"
                                style={{ backgroundImage: `url(${offer.imgSrc})` }}
                            />
                            <div className="text mt-4">
                                <h3 className="mb-4">{offer.title}</h3>
                                <p className="mb-5">{offer.text}</p>
                                <p>
                                    <Link
                                        href="/contact"
                                        className="btn btn-white px-4 py-3"
                                    >
                                        Book A Treatment <span className="ion-ios-arrow-round-forward" />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
));

Offer.displayName = "Offer";