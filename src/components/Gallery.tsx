"use client";

import { memo, useEffect } from "react";
import { TitleHeader } from "./utility/TitleHeader";
import { GALLERIES } from "@/constants";

export const Gallery = memo(() => {
    useEffect(() => {
        const initLightbox = () => {
            const $ = (window as any).$;

            if (!$ || !$.fn || !$.fn.magnificPopup) {
                setTimeout(initLightbox, 100);
                return;
            }

            console.log('🔄 Initializing gallery lightbox...');

            // Destroy any existing instances first
            $('.image-popup').magnificPopup('destroy');

            // Initialize with proper configuration
            $('.image-popup').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: true,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                },
                image: {
                    titleSrc: function (item: any) {
                        return '';
                    },
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300
                },
                callbacks: {
                    open: function () { },
                    close: function () { }
                }
            });
        };

        setTimeout(initLightbox, 1000);

        return () => {
            const $ = (window as any).$;
            if ($ && $.magnificPopup && $.magnificPopup.instance) {
                $.magnificPopup.instance.close();
            }
        };
    }, []);

    return (
        <section className="ftco-gallery ftco-section">
            <div className="container">

                <TitleHeader
                    subHeader="Gallery"
                    header="See the latest photos"
                    className="col-md-7"
                />

                <div className="row">
                    {GALLERIES.map((img, index) => (
                        <div
                            key={index}
                            className="col-md-3"
                            data-aos="fade-up"
                        >
                            <a
                                href={img}
                                className="gallery image-popup img d-flex align-items-center"
                                style={{
                                    backgroundImage: `url(${img})`,
                                    display: 'block',
                                    position: 'relative',
                                    height: '250px',
                                    overflow: 'hidden',
                                    cursor: 'pointer'
                                }}
                            >
                                {/* CRITICAL: Add a hidden img tag for Magnific Popup */}
                                <img
                                    src={img}
                                    alt={`Gallery ${index + 1}`}
                                    style={{
                                        display: 'none',
                                        width: '100%',
                                        height: 'auto'
                                    }}
                                />
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram" />
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

Gallery.displayName = "Gallery";