import { CONTACTS, NAVLINKS } from "@/constants";
import { SOCIAL_LINKS } from "@/constants";
import { Children, ClassName, Title } from "@/types";
import Link from "next/link";
import { memo } from "react";
import styles from "./Footer.module.css";
import { Button } from "../utility/Button/Button";

interface ColumnWrapperProps extends Title, Children, ClassName { }

const ColumnWrapper = memo(({
    title, children, className
}: ColumnWrapperProps) => (
    <div className="col-md-4">
        <div className={`${styles.ftcoFooterWidget} mb-4 ${className}`}>
            <h2 className={styles.ftcoHeading2}>{title}</h2>
            {children}
        </div>
    </div>
));

ColumnWrapper.displayName = "ColumnWrapper";

export const Footer = memo(() => (
    <footer className={`${styles.ftcoFooter} ftco-section`}>
        <div className="container">
            <div className="row d-flex">

                <ColumnWrapper title="Absolute Professional Spa & Salon">
                    <p>Experience authentic wellness and rejuvenation at Absolute Professional Spa & Salon. Offering seven specialized treatments including Warrior Thai, Sports Therapy, Pain Potli, and Hot Stone Therapy across our three convenient locations in Nepal and India.</p>
                    <ul className={`${styles.ftcoFooterSocial} ${styles.floatLeft} mt-3 ${styles.listUnstyled}`}>

                        {SOCIAL_LINKS.map((link, index) => (
                            <li
                                key={index}
                                data-aos="fade-up"
                            >
                                <Button
                                    href={link.href}
                                    icon={link.icon}
                                />
                            </li>
                        ))}

                    </ul>

                </ColumnWrapper>

                <ColumnWrapper title="Quick Links">
                    <ul className={styles.listUnstyled}>
                        {NAVLINKS.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </ColumnWrapper>

                <ColumnWrapper title="Have a Questions?">
                    <div className={`${styles.block23} mb-3`}>
                        <ul>
                            {CONTACTS.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                    >
                                        <span className={`${styles.icon} icon-${link.icon}`} />
                                        <span className={styles.text}>{link.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ColumnWrapper>

            </div>
            <div className="row">
                <div className="col-md-12 text-center">

                    <p className="mb-0">
                        Copyright &copy;{new Date().getFullYear()} All rights reserved | Designed with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://github.com/chyroshan066" target="_blank">Roshan</a>
                    </p>
                </div>
            </div>
        </div>
    </footer >
));

Footer.displayName = "Footer";