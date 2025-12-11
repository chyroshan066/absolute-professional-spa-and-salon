import Link from "next/link";
import { memo } from "react";
import styles from "./Hero.module.css";

export const Hero = memo(() => (
    <section
        className="hero-wrap js-fullheight"
        style={{ backgroundImage: "url('images/hero-bg.webp')" }}
        data-stellar-background-ratio="0.5"  // `data-stellar-background-ratio="0.5"` is a custom HTML data attribute used to configure a Parallax Scrolling Effect on the background of the element it's applied to. It does not perform any action by itself; it serves as a configuration parameter for a JavaScript library, specifically jQuery.Stellar.
    >
        <div className="overlay" />
        <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                <div className={`col-md-10 ftco-animate ${styles.ftcoAnimate} text-center`}>
                    <div className={styles.icon}>
                        <span className="flaticon-lotus" />
                    </div>
                    <h1>Absolute Professional Spa &amp; Center</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-7 mb-3">
                            <p>Unwind, restore, and rediscover your inner balance. Experience authentic wellness through ancient healing traditions.</p>
                        </div>
                    </div>
                    <p>
                        <Link
                            href="/contact"
                            className={`btn btn-primary ${styles.btnPrimary} p-3 px-5 py-4 ${styles.mrMd2}`}
                        >
                            Contact
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </section>
));

Hero.displayName = "Hero";
