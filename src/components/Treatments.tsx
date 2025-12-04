import { THERAPIES, TREATMENTS } from "@/constants";
import { Treatment } from "@/types";
import { memo } from "react";
import { TitleHeader } from "./utility/TitleHeader";

const TreatmentCard = memo(({
    treatment
}: {
    treatment: Treatment
}) => (
    <div className="col-md-6 d-flex align-items-stretch">
        <div
            className={`treatment w-100 text-center border p-3 py-4 ${treatment.className}`}
            data-aos="fade-up"
        >
            <div className="icon d-flex justify-content-center align-items-center">
                <span className={treatment.icon} />
            </div>
            <div className="text mt-2">
                <h3>{treatment.title}</h3>
                <p>{treatment.text}</p>
            </div>
        </div>
    </div>
));

TreatmentCard.displayName = "TreatmentCard";

export const Treatments = memo(() => (
    <section className="ftco-section">
        <div className="container-fluid px-md-5">

            <TitleHeader
                subHeader="Services"
                header="Treatments"
                className="col-md-12"
            />

            <div className="row align-items-center">

                <div className="col-lg-4">
                    <div className="row no-gutters">
                        {TREATMENTS.slice(0, 4).map((treatment, index) => (
                            <TreatmentCard
                                key={index}
                                treatment={treatment}
                            />
                        ))}
                    </div>
                </div>


                <div className="col-lg-4 d-flex align-items-stretch">
                    <div
                        id="accordion"
                        className="myaccordion w-100 text-center py-5 px-1 px-md-4"
                    >
                        <div>
                            <h3>Prices</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                        </div>

                        {THERAPIES.map(therapy => (
                            <div
                                key={therapy.index}
                                className="card"
                            >
                                <div
                                    className="card-header"
                                    id={`heading${therapy.index}`}
                                >
                                    <h2 className="mb-0">
                                        <button
                                            className={`d-flex align-items-center justify-content-between btn btn-link ${therapy.index === 'Two' && 'collapsed'}`}
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${therapy.index}`}
                                            aria-expanded={therapy.index === "One" ? "true" : "false"}
                                            aria-controls={`collapse${therapy.index}`}
                                        >
                                            {therapy.header}
                                            <div className="icon-toggle">
                                                <span className="oi oi-plus" />
                                                <span className="oi oi-minus" />
                                            </div>
                                        </button>
                                    </h2>
                                </div>
                                <div
                                    id={`collapse${therapy.index}`}
                                    className={`collapse ${therapy.index === 'One' && 'show'}`}
                                    aria-labelledby={`heading${therapy.index}`}
                                    data-bs-parent="#accordion"
                                >
                                    <div className="card-body text-left">
                                        <ul>
                                            {therapy.section.map((list, sectionIndex) => (
                                                <li
                                                    key={sectionIndex}
                                                    className="d-flex"
                                                >
                                                    <span>{list.title}</span>
                                                    <span>{list.duration} min.</span>
                                                    <span>${list.price}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="row no-gutters">
                        {TREATMENTS.slice(4, 8).map((treatment, index) => (
                            <TreatmentCard
                                key={index}
                                treatment={treatment}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </section>
));

Treatments.displayName = "Treatments";