import { CONTACTS, NAVLINKS } from "@/constants";
import { SOCIAL_LINKS } from "@/constants";
import { Children, ClassName, Title } from "@/types";
import Link from "next/link";
import { memo } from "react";

interface ColumnWrapperProps extends Title, Children, ClassName { }

const ColumnWrapper = memo(({
    title, children, className
}: ColumnWrapperProps) => (
    <div className="col-md-4">
        <div className={`ftco-footer-widget mb-4 ${className}`}>
            <h2 className="ftco-heading-2">{title}</h2>
            {children}
        </div>
    </div>
));

ColumnWrapper.displayName = "ColumnWrapper";

export const Footer = memo(() => (
    <footer className="ftco-footer ftco-section">
        <div className="container">
            <div className="row d-flex">

                <ColumnWrapper title="Energen">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <ul className="ftco-footer-social list-unstyled float-lft mt-3">
                        {SOCIAL_LINKS.map((link, index) => (
                            <li
                                key={index}
                                data-aos="fade-up"
                            >
                                <a href={link.href}>
                                    <span className={`icon-${link.icon}`} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </ColumnWrapper>

                <ColumnWrapper title="Quick Links">
                    <ul className="list-unstyled">
                        {NAVLINKS.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </ColumnWrapper>

                <ColumnWrapper title="Have a Questions?">
                    <div className="block-23 mb-3">
                        <ul>
                            {CONTACTS.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>
                                        <span className={`icon icon-${link.icon}`} />
                                        <span className="text">{link.text}</span>
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
                        Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    </p>
                </div>
            </div>
        </div>
    </footer >
));

Footer.displayName = "Footer";