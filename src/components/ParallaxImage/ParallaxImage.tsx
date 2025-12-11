import Link from "next/link";
import { memo } from "react";
import styles from "./ParallaxImage.module.css";

export const ParallaxImage = memo(({
    page
}: {
    page: string
}) => (
    <section
        className={`hero-wrap ${styles.heroWrap2}`}
        style={{ backgroundImage: "url('images/parallax-bg.webp')" }}
        data-stellar-background-ratio="0.5"
    >
        <div className="overlay" />
        <div className="container">
            <div className={`row no-gutters slider-text ${styles.sliderText} js-fullheight align-items-center justify-content-center`}>
                <div
                    className="col-md-9 text-center"
                    data-aos="fade-up"
                >
                    <h1 className={`mb-3 ${styles.bread}`}>{page}</h1>
                    <p className={styles.breadcrumbs}>
                        <span className="mr-2">
                            <Link href="/">Home</Link>
                        </span>
                        <span>{page}</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
));

ParallaxImage.displayName = "ParallaxImage";