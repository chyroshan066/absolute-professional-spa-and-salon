import { OFFERS } from "@/constants";
import Link from "next/link";
import { memo } from "react";
import styles from "./Offer.module.css";
import { Container } from "../utility/Container";

export const Offer = memo(() => (
    <Container className={`${styles.ftcoNoPt} ${styles.ftcoNoPb}`}>

        <div className="row no-gutters">
            {OFFERS.map((offer, index) => (
                <div
                    key={index}
                    className="col-md-6 d-flex align-items-stretch"
                >
                    <div className={`${styles.offerDeal} text-center px-2 ${styles.pxLg5} ${index === 1 && styles.active}`}>
                        <div
                            className={`${styles.img} img`}
                            style={{ backgroundImage: `url(${offer.imgSrc})` }}
                        />
                        <div className={`${styles.text} mt-4`}>
                            <h3 className="mb-4">{offer.title}</h3>
                            <p className="mb-5">{offer.text}</p>
                            <p>
                                <Link
                                    href="/contact"
                                    className={`btn ${styles.btnWhite} ${styles.px4} py-3`}
                                >
                                    Book A Treatment <span className="ion-ios-arrow-round-forward" />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </Container>
));

Offer.displayName = "Offer";