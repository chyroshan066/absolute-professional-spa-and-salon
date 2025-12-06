"use client";

import { memo, useEffect, useState } from "react";

export const Loader = memo(() => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            id="ftco-loader"
            className={`fullscreen ${isLoading ? 'show' : ''}`}
        >
            <svg
                className="circular"
                width="48px"
                height="48px"
            >
                <circle
                    className="path-bg"
                    cx="24"
                    cy="24"
                    r="22"
                    fill="none"
                    strokeWidth="4"
                    stroke="#eeeeee"
                />
                <circle
                    className="path"
                    cx="24"
                    cy="24"
                    r="22"
                    fill="none"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    stroke="#F96D00"
                />
            </svg>
        </div>
    )
});

Loader.displayName = "Loader";