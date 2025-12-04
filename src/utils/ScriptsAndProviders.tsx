'use client';

import { ReactNode, useState, useEffect } from 'react';
import Script from 'next/script';
import AOS from 'aos';
import JQueryProvider from './jQueryProvider';

interface ScriptsAndProvidersProps {
    children: ReactNode;
}

export default function ScriptsAndProviders({ children }: ScriptsAndProvidersProps) {
    const [jQueryLoaded, setJQueryLoaded] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const handleJQueryReady = () => {
        console.log('📢 jQuery is ready, loading dependent scripts...');
        setJQueryLoaded(true);
    };

    return (
        <>
            {/* Bootstrap can load independently */}
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                strategy="afterInteractive"
            />

            {/* Load jQuery first through JQueryProvider */}
            <JQueryProvider onJQueryReady={handleJQueryReady}>
                {children}
            </JQueryProvider>

            {/* Load jQuery-dependent scripts ONLY after jQuery is ready */}
            {jQueryLoaded && (
                <>
                    <Script
                        src="/js/popper.min.js"
                        strategy="afterInteractive"
                        onError={() => console.error('❌ Failed to load Popper')}
                    />
                    <Script
                        src="/js/jquery.easing.1.3.js"
                        strategy="afterInteractive"
                        onError={() => console.error('❌ Failed to load Easing')}
                    />
                    <Script
                        src="/js/jquery.waypoints.min.js"
                        strategy="afterInteractive"
                        onError={() => console.error('❌ Failed to load Waypoints')}
                    />
                    <Script
                        src="/js/jquery.stellar.min.js"
                        strategy="afterInteractive"
                        onError={() => console.error('❌ Failed to load Stellar')}
                    />
                    <Script
                        src="/js/owl.carousel.min.js"
                        strategy="afterInteractive"
                        onLoad={() => window.dispatchEvent(new CustomEvent('owlCarouselReady'))}
                        onError={(e) => console.error('❌ Failed to load Owl Carousel script:', e)}
                    />
                    <Script
                        src="/js/jquery.magnific-popup.min.js"
                        strategy="afterInteractive"
                        onError={() => console.error('❌ Failed to load Magnific Popup')}
                    />

                    <Script
                        src="/js/jquery.animateNumber.min.js"
                        strategy="afterInteractive"
                        onError={() => console.error('❌ Failed to load Animate Number')}
                    />
                    <Script
                        src="/js/bootstrap-datepicker.js"
                        strategy="afterInteractive"
                        onError={() => console.error('❌ Failed to load Datepicker')}
                    />
                    <Script
                        src="/js/jquery.timepicker.min.js"
                        strategy="afterInteractive"
                        onError={() => console.error('❌ Failed to load Timepicker')}
                    />
                    <Script
                        src="/js/scrollax.min.js"
                        strategy="afterInteractive"
                        onError={() => console.error('❌ Failed to load Scrollax')}
                    />
                </>
            )}
        </>
    );
}