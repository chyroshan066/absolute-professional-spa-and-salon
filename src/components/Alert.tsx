// "use client";

// import { memo, useCallback, useEffect, useState } from "react";
// // import { Icon } from "@iconify/react";

// type AlertType = "success" | "error";

// type AlertProps = {
//     type: AlertType;
//     title?: string;
//     message: string;
//     isVisible: boolean;
//     onDismiss: () => void;
//     autoDismiss?: boolean;
//     autoDismissDelay?: number;
//     className?: string;
// }

// const alertStyles = {
//     success: {
//         container: "bg-gray-100 border-l-4 border-[#111] backdrop-blur-sm",
//         icon: "text-[#111]",
//         title: "text-[#111]",
//         message: "text-[#555]",
//         closeButton: "text-[#555] hover:text-[#111] hover:bg-gray-200 rounded-full",
//         name: "carbon:checkmark-outline",
//     },
//     error: {
//         container: "bg-red-50 border-l-4 border-red-600 backdrop-blur-sm",
//         icon: "text-red-600",
//         title: "text-[#111]",
//         message: "text-[#555]",
//         closeButton: "text-[#555] hover:text-red-600 hover:bg-red-100 rounded-full",
//         name: "jam:alert",
//     },
// } as const;

// export const Alert = memo(({
//     type,
//     title,
//     message,
//     isVisible,
//     onDismiss,
//     autoDismiss = true,
//     autoDismissDelay = 5000,
//     className = "",
// }: AlertProps) => {
//     const [isAnimating, setIsAnimating] = useState(false);
//     const [shouldRender, setShouldRender] = useState(isVisible);

//     const styles = alertStyles[type];

//     const handleDismiss = useCallback(() => {
//         setIsAnimating(false);
//         setTimeout(() => {
//             onDismiss();
//         }, 300);
//     }, [onDismiss]);

//     useEffect(() => {
//         let timeoutId: NodeJS.Timeout;

//         if (isVisible && autoDismiss) {
//             timeoutId = setTimeout(() => {
//                 handleDismiss();
//             }, autoDismissDelay);
//         }

//         return () => {
//             if (timeoutId) {
//                 clearTimeout(timeoutId);
//             }
//         };
//     }, [isVisible, autoDismiss, autoDismissDelay, handleDismiss]);

//     useEffect(() => {
//         if (isVisible) {
//             setShouldRender(true);
//             const timer = setTimeout(() => setIsAnimating(true), 10);
//             return () => clearTimeout(timer);
//         } else {
//             setIsAnimating(false);
//             const timer = setTimeout(() => setShouldRender(false), 300);
//             return () => clearTimeout(timer);
//         }
//     }, [isVisible]);

//     if (!shouldRender) return null;

//     return (
//         <div
//             className={`
//                 fixed top-2 right-4 max-w-sm w-full transform transition-all duration-300 ease-in-out z-700000
//                 ${isAnimating
//                     ? 'translate-x-0 opacity-100 scale-100'
//                     : 'translate-x-full opacity-0 scale-95'
//                 }
//                 ${className}
//             `}
//             role="alert"
//             aria-live="polite"
//         >
//             <div className={`${styles.container} border rounded-lg p-1 shadow-xl flex items-start gap-3 backdrop-blur-sm`}>

//                 {/* Alert Icon */}
//                 <div className={`${styles.icon} flex-shrink-0 mt-0.5`}>
//                     {/* <Icon icon={styles.name} className="text-4xl" /> */}
//                 </div>

//                 <div className="flex-1 min-w-0">
//                     {title && (
//                         <h4 className={`${styles.title} font-semibold text-sm mb-1`}>
//                             {title}
//                         </h4>
//                     )}
//                     <p className={`${styles.message} text-sm leading-relaxed`}>
//                         {message}
//                     </p>
//                 </div>

//                 {/* Close button */}
//                 <button
//                     onClick={handleDismiss}
//                     className={`${styles.closeButton} flex-shrink-0 p-1 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-current cursor-pointer`}
//                     aria-label="Dismiss alert"
//                 >
//                     {/* <Icon icon="material-symbols-light:close-rounded" className="text-4xl" /> */}
//                 </button>
//             </div>

//             {/* Auto-dismiss progress bar */}
//             {autoDismiss && isVisible && (
//                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-lg overflow-hidden">
//                     <div
//                         className="h-full bg-current opacity-30 origin-left"
//                         style={{
//                             animation: `shrink ${autoDismissDelay}ms linear forwards`,
//                         }}
//                     />
//                 </div>
//             )}
//         </div>
//     );
// });

// Alert.displayName = "Alert";





























"use client";

import { ClassName, IsVisible, Message, Title } from "@/types";
import { memo, useCallback, useEffect, useState } from "react";

type AlertType = "success" | "error";

interface AlertProps extends Title, Message, IsVisible, ClassName {
    type: AlertType;
    onDismiss: () => void;
    autoDismiss?: boolean;
    autoDismissDelay?: number;
}

const alertStyles = {
    success: {
        container: "bg-light border-start border-5 border-success",
        icon: "text-success",
        title: "text-dark fw-semibold",
        message: "shade-gray",
        closeButton: "shade-gray",
        name: "bi-check-circle",
    },
    error: {
        container: "bg-danger-subtle border-start border-5 border-danger",
        icon: "text-danger",
        title: "text-dark fw-semibold",
        message: "shade-gray",
        closeButton: "shade-gray",
        name: "bi-exclamation-circle",
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

    return (
        <div
            className={`position-fixed top-0 end-0 mt-2 me-3 ${className}`}
            style={{
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
                className={`${styles.container} rounded shadow-lg p-3 d-flex align-items-start gap-3 position-relative`}
                style={{ backdropFilter: 'blur(8px)' }}
            >

                {/* Alert Icon */}
                <div
                    className={`${styles.icon} flex-shrink-0`}
                    style={{ marginTop: '2px' }}
                >
                    <i className={`bi ${styles.name} text-4xl`} />
                </div>

                <div
                    className="flex-grow-1"
                    style={{ minWidth: 0 }}
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
                            lineHeight: '1.5'
                        }}
                    >
                        {message}
                    </p>
                </div>

                {/* Close button */}
                <button
                    onClick={handleDismiss}
                    className={`${styles.closeButton} btn btn-link p-1 flex-shrink-0 border-0`}
                    style={{
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                        if (type === 'success') {
                            e.currentTarget.style.backgroundColor = '#e9ecef';
                            e.currentTarget.style.color = '#111';
                        } else {
                            e.currentTarget.style.backgroundColor = '#f8d7da';
                            e.currentTarget.style.color = '#dc3545';
                        }
                        e.currentTarget.style.borderRadius = '50%';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#6c757d';
                    }}
                    aria-label="Dismiss alert"
                >
                    <i className={`bi bi-x text-4xl`} />
                </button>
            </div>

            {/* Auto-dismiss progress bar */}
            {autoDismiss && isVisible && (
                <div
                    className="position-absolute bottom-0 start-0 end-0 overflow-hidden rounded-bottom"
                    style={{
                        height: '4px',
                        backgroundColor: 'rgba(0,0,0,0.2)'
                    }}
                >
                    <div
                        className="h-100"
                        style={{
                            backgroundColor: 'currentColor',
                            opacity: 0.3,
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