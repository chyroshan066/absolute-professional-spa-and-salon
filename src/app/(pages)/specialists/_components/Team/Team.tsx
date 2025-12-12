import { TitleHeader } from "@/components/utility/TitleHeader";
import { TEAM } from "@/constants";
import { memo } from "react";
import styles from "./Team.module.css";
import { Container } from "@/components/utility/Container";
import { Button } from "@/components/utility/Button/Button";

export const Team = memo(() => (
    <Container>

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
                        <div className={`${styles.coach} align-items-stretch`}>
                            <div
                                className={`img ${styles.img}`}
                                style={{ backgroundImage: `url(${member.imgSrc})` }}
                            />
                            <div
                                className={`${styles.text} ${styles.bgWhite} p-4`}
                                data-aos="fade-up"
                            >
                                <span className={styles.subheading}>{member.position}</span>
                                <h3><a href="#">{member.name}</a></h3>
                                <p>{member.text}</p>
                                <ul className={`${styles.ftcoSocialMedia} d-flex mt-4`}>

                                    {member.social.map((link, socialIndex) => (
                                        <li
                                            key={socialIndex}
                                            data-aos="fade-up"
                                        >
                                            <Button
                                                href={link.href}
                                                className="mr-2 d-flex justify-content-center align-items-center"
                                                icon={link.icon}
                                            />
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

    </Container>
));

Team.displayName = "Team";