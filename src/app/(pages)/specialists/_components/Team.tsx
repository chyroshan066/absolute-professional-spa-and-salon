import { TitleHeader } from "@/components/utility/TitleHeader";
import { TEAM } from "@/constants";
import { memo } from "react";

export const Team = memo(() => (
    <section className="ftco-section">
        <div className="container">

            <TitleHeader
                subHeader="Specialists"
                header="Meet Our Spa Specialists"
                className="col-md-12"
            />

            <div className="row">

                {
                    TEAM.map((member, index) => (
                        <div
                            key={index}
                            className="col-lg-3 d-flex"
                        >
                            <div className="coach align-items-stretch">
                                <div
                                    className="img"
                                    style={{ backgroundImage: `url(${member.imgSrc})` }}
                                />
                                <div
                                    className="text bg-white p-4"
                                    data-aos="fade-up"
                                >
                                    <span className="subheading">{member.position}</span>
                                    <h3><a href="#">{member.name}</a></h3>
                                    <p>{member.text}</p>
                                    <ul className="ftco-social-media d-flex mt-4">
                                        {member.social.map((link, socialIndex) => (
                                            <li
                                                key={socialIndex}
                                                data-aos="fade-up"
                                            >
                                                <a
                                                    href={link.href}
                                                    className="mr-2 d-flex justify-content-center align-items-center"
                                                >
                                                    <span className={`icon-${link.icon}`} />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    </section>
));

Team.displayName = "Team";