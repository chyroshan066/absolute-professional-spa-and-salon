import { SERVICES } from "@/constants";
import { memo } from "react";

export const Services = memo(() => (
    <section className="ftco-section ftco-section-services bg-light">
        <div className="container-fluid px-md-5">
            <div className="row">

                {SERVICES.map((service, index) => (
                    <div
                        key={index}
                        className="col-md-6 col-lg-3"
                    >
                        <div
                            className="services text-center"
                            data-aos="fade-up"
                            data-aos-delay={100 + (index * 100)}
                        >
                            <div className="icon d-flex justify-content-center align-items-center">
                                <span className={service.icon} />
                            </div>
                            <div className="text mt-3">
                                <h3>{service.title}</h3>
                                <p>{service.text}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </section>
));

Services.displayName = "Services";