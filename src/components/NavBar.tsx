'use client';

import { NAVLINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useEffect, useRef } from "react";

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

    return (
        <nav
            ref={navbarRef}
            className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ${pathname !== '/' && ' ftco-navbar-light-2'}`}
            id="ftco-navbar"
        >
            <div className="container">
                <Link
                    className="navbar-brand"
                    href="/"
                >
                    <span className="flaticon-lotus" />Energen
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#ftco-nav"
                    aria-controls="ftco-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="oi oi-menu" /> Menu
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="ftco-nav"
                >

                    <ul className="navbar-nav ml-auto">
                        {NAVLINKS.map((link, index) => {
                            const isActive = pathname === link.href;

                            return (
                                <li
                                    key={index}
                                    className={`nav-item ${isActive ? 'active' : ''}`}
                                >
                                    <Link
                                        href={link.href}
                                        className="nav-link"
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