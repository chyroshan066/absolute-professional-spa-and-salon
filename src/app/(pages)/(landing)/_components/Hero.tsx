import Link from "next/link";
import { memo } from "react";

export const Hero = memo(() => (
    <section
        className="hero-wrap js-fullheight"
        style={{ backgroundImage: "url('images/hero-bg.webp')" }}
        data-stellar-background-ratio="0.5"  // `data-stellar-background-ratio="0.5"` is a custom HTML data attribute used to configure a Parallax Scrolling Effect on the background of the element it's applied to. It does not perform any action by itself; it serves as a configuration parameter for a JavaScript library, specifically jQuery.Stellar.
    >
        <div className="overlay" />
        <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                <div className="col-md-10 ftco-animate text-center">
                    <div className="icon">
                        <span className="flaticon-lotus" />
                    </div>
                    <h1>Spa &amp; Beauty Center</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-7 mb-3">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <p>
                        <Link
                            href="#"
                            className="btn btn-primary p-3 px-5 py-4 mr-md-2"
                        >
                            Get in Touch
                        </Link>
                        <a href="#" className="btn btn-outline-primary p-3 px-5 py-4 ml-md-2">Contact</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
));

Hero.displayName = "Hero";
