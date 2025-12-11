'use client';

import { NAVLINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useEffect, useRef } from "react";
import styles from "./NavBar.module.css";

export const NavBar = memo(() => {
    const navbarRef = useRef<HTMLElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const navbar = navbarRef.current;

        if (!navbar) return;

        // Sticky Navbar on scroll
        const handleScroll = () => {
            if (window.scrollY > 40) {
                navbar.classList.add('sticky-top');
            } else {
                navbar.classList.remove('sticky-top');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = () => {
        const navbarCollapse = document.getElementById('ftco-nav');
        const navbarToggler = document.querySelector('.navbar-toggler') as HTMLButtonElement;

        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            navbarToggler?.click();
        }
    };

    return (
        <nav
            ref={navbarRef}
            className={`${styles.navbar} navbar navbar-expand-lg ${styles.navbarExpandLg} navbar-dark ftco_navbar ftco-navbar-light ${styles.ftcoNavbarLight} ${pathname !== '/' && ' ftco-navbar-light-2'}`}
            id="ftco-navbar"
        >
            <div className={`container ${styles.container}`}>
                <Link
                    className={styles.navbarBrand}
                    href="/"
                >
                    <span className="flaticon-lotus" />Absolute Professional
                </Link>

                <button
                    className={`navbar-toggler ${styles.navbarToggler}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#ftco-nav"
                    aria-controls="ftco-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="oi oi-menu" />
                </button>

                <div
                    className={`collapse ${styles.navbarCollapse} navbar-collapse`}
                    id="ftco-nav"
                >

                    <ul className={`${styles.mlAuto} ${styles.navbarNav}`}>
                        {NAVLINKS.map((link, index) => {
                            const isActive = pathname === link.href;

                            return (
                                <li
                                    key={index}
                                    className={`nav-item ${styles.navItem} ${isActive ? 'active' : ''}`}
                                    onClick={handleLinkClick}
                                >
                                    <Link
                                        href={link.href}
                                        className={`nav-link ${styles.navLink}`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                </div>
            </div>
        </nav>
    )
});

NavBar.displayName = "NavBar";