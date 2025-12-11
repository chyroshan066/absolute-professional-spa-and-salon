"use client";

import { ClassName, IsVisible, Message, Title } from "@/types";
import { memo, useCallback, useEffect, useState } from "react";
import AlertStyles from "./Alert.module.css";

type AlertType = "success" | "error";

interface AlertProps extends Title, Message, IsVisible, ClassName {
    type: AlertType;
    onDismiss: () => void;
    autoDismiss?: boolean;
    autoDismissDelay?: number;
}

const THEME_GOLD = '#d9bf77';

const alertStyles = {
    success: {
        // White background (default body/light) with custom golden border
        container: `bg-light border-start border-5`,
        icon: `text-success`, // We'll override this with inline style to be golden
        title: `${AlertStyles.textDark} fw-semibold`,
        message: "shade-gray",
        closeButton: "shade-gray",
        name: "bi-check-circle",
        accentColor: THEME_GOLD,
        containerBackground: '#fff',
    },
    error: {
        container: `bg-danger-subtle border-start border-5 ${AlertStyles.borderDanger}`,
        icon: `${AlertStyles.textDanger}`,
        title: `${AlertStyles.textDark} fw-semibold`,
        message: "shade-gray",
        closeButton: "shade-gray",
        name: "bi-exclamation-circle",
        accentColor: '#dc3545',
        containerBackground: '#f8d7da',
    },
} as const;

export const Alert = memo(({
    type,
    title,
    message,
    isVisible,
    onDismiss,
    autoDismiss = true,
    autoDismissDelay = 5000,
    className = "",
}: AlertProps) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(isVisible);

    const styles = alertStyles[type];

    const handleDismiss = useCallback(() => {
        setIsAnimating(false);
        setTimeout(() => {
            onDismiss();
        }, 300);
    }, [onDismiss]);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isVisible && autoDismiss) {
            timeoutId = setTimeout(() => {
                handleDismiss();
            }, autoDismissDelay);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isVisible, autoDismiss, autoDismissDelay, handleDismiss]);

    useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
            const timer = setTimeout(() => setIsAnimating(true), 10);
            return () => clearTimeout(timer);
        } else {
            setIsAnimating(false);
            const timer = setTimeout(() => setShouldRender(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    if (!shouldRender) return null;

    // Determine the border color based on type
    const borderColor = type === 'success' ? styles.accentColor : AlertStyles.borderDanger;

    return (
        <div
            className={`${AlertStyles.positionFixed} ${className}`}
            style={{
                top: '1rem',
                right: '1rem',
                maxWidth: '24rem',
                width: '100%',
                transform: isAnimating ? 'translateX(0)' : 'translateX(100%)',
                opacity: isAnimating ? 1 : 0,
                transition: 'all 0.3s ease-in-out',
                zIndex: 700000,
            }}
            role="alert"
            aria-live="polite"
        >
            <div
                className={`${AlertStyles.rounded} ${AlertStyles.shadowLg} p-3 d-flex ${AlertStyles.alignItemsStart} gap-3 ${AlertStyles.positionRelative}`}
                style={{
                    backgroundColor: styles.containerBackground,
                    borderLeft: `5px solid ${borderColor}`,
                }}
            >
                {/* Alert Icon (Status icon) */}
                <div
                    className={`${AlertStyles.flexShrink0}`}
                    style={{
                        marginTop: '0.1rem',
                        color: styles.accentColor
                    }}
                >
                    <i
                        className={`bi ${styles.name}`}
                        style={{ fontSize: '1.5rem' }}
                    />
                </div>

                <div
                    className={AlertStyles.flexGrow1}
                    style={{
                        minWidth: 0,
                        paddingRight: '0.5rem'
                    }}
                >
                    {title && (
                        <h4
                            className={`${styles.title} mb-1`}
                            style={{ fontSize: '0.875rem' }}
                        >
                            {title}
                        </h4>
                    )}
                    <p
                        className={`${styles.message} mb-0`}
                        style={{
                            fontSize: '0.875rem',
                            lineHeight: '1.5',
                            color: AlertStyles.textDark,
                        }}
                    >
                        {message}
                    </p>
                </div>

                {/* Close button */}
                <button
                    onClick={handleDismiss}
                    className={`${styles.closeButton} btn ${AlertStyles.p1} ${AlertStyles.flexShrink0} ${AlertStyles.border0} ${AlertStyles.btnLink}`}
                    style={{
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                        color: styles.accentColor,
                        fontSize: '1.5rem',
                        marginTop: '-0.2rem',
                    }}
                    onMouseEnter={(e) => {
                        const hoverColor = type === 'success' ? '#fcf8e3' : '#f8d7da';
                        const hoverTextColor = styles.accentColor;
                        e.currentTarget.style.backgroundColor = hoverColor;
                        e.currentTarget.style.color = hoverTextColor;
                        e.currentTarget.style.borderRadius = '50%';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = styles.accentColor;
                    }}
                    aria-label="Dismiss alert"
                >
                    <i className={`bi bi-x`} />
                </button>
            </div>

            {/* Auto-dismiss progress bar */}
            {autoDismiss && isVisible && (
                <div
                    className={`${AlertStyles.positionAbsolute} bottom-0 start-0 end-0 ${AlertStyles.overflowHidden} ${AlertStyles.roundedBottom}`}
                    style={{
                        height: '4px',
                        backgroundColor: 'rgba(0,0,0,0.2)'
                    }}
                >
                    <div
                        className={AlertStyles.h100}
                        style={{
                            backgroundColor: styles.accentColor,
                            opacity: 0.8,
                            transformOrigin: 'left',
                            animation: `shrink ${autoDismissDelay}ms linear forwards`,
                        }}
                    />
                </div>
            )}

            <style jsx>{`
                @keyframes shrink {
                    from {
                        transform: scaleX(1);
                    }
                    to {
                        transform: scaleX(0);
                    }
                }
            `}</style>

        </div>
    );
});

Alert.displayName = "Alert";