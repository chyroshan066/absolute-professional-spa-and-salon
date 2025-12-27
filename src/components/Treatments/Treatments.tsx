"use client";

import { THERAPIES, TREATMENTS } from "@/constants";
import { Treatment } from "@/types";
import { memo, useState, useCallback } from "react";
import { TitleHeader } from "../utility/TitleHeader";
import styles from "./Treatments.module.css";

const TreatmentCard = memo(({ treatment }: { treatment: Treatment }) => (
  <div className={`col-md-6 d-flex ${styles.alignItemsStretch}`}>
    <div
      className={`${styles.treatment} w-100 text-center ${styles.border} p-3 py-4 ${treatment.className}`}
      data-aos="fade-up"
    >
      <div
        className={`${styles.icon} d-flex justify-content-center align-items-center`}
      >
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

export const Treatments = memo(() => {
  // State to track which accordion item is open.
  const [activeTab, setActiveTab] = useState<string | null>("One");

  const toggleAccordion = useCallback((index: string) => {
    setActiveTab((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="ftco-section">
      <div className="container-fluid px-md-5">
        <TitleHeader
          subHeader="Services"
          header="Treatments"
          className="col-md-12"
          outerDivClassName="pb-3"
        />

        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="row no-gutters">
              {TREATMENTS.slice(0, 4).map((treatment, index) => (
                <TreatmentCard key={index} treatment={treatment} />
              ))}
            </div>
          </div>

          <div className="col-lg-4 d-flex align-items-stretch">
            <div
              id="accordion"
              className={`${styles.myaccordion} w-100 text-center py-5 ${styles.py5} px-1 px-md-4`}
            >
              <div>
                <h3>Prices</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia
                </p>
              </div>

              {THERAPIES.map((therapy) => {
                const isOpen = activeTab === therapy.index;

                return (
                  <div key={therapy.index} className={styles.card}>
                    <div
                      className={styles.cardHeader}
                      id={`heading${therapy.index}`}
                    >
                      <h2 className="mb-0">
                        <button
                          className={`d-flex align-items-center ${
                            styles.justifyContentBetween
                          } btn ${styles.btn} btn-link ${styles.btnLink} ${
                            !isOpen ? "collapsed" : ""
                          }`}
                          onClick={() => toggleAccordion(therapy.index)}
                          aria-expanded={isOpen}
                          aria-controls={`collapse${therapy.index}`}
                        >
                          {therapy.header}
                          <div className={styles.iconToggle} />
                        </button>
                      </h2>
                    </div>

                    {/* Smooth CSS Grid Animation Wrapper */}
                    <div
                      id={`collapse${therapy.index}`}
                      className={`${styles.accordionContent} ${
                        isOpen ? styles.show : ""
                      }`}
                      aria-labelledby={`heading${therapy.index}`}
                    >
                      {/* Inner container required for grid transition */}
                      <div className={styles.innerContent}>
                        <div
                          className={`${styles.cardBody} ${styles.textLeft}`}
                        >
                          <ul>
                            {therapy.section.map((list, sectionIndex) => (
                              <li key={sectionIndex} className="d-flex">
                                <span>{list.title}</span>
                                <span>{list.duration} hr.</span>
                                <span>
                                  {therapy.index === "Four" ||
                                  therapy.index === "Five"
                                    ? "INR."
                                    : "NPR."}
                                  {list.price}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="row no-gutters">
              {TREATMENTS.slice(4, 8).map((treatment, index) => (
                <TreatmentCard key={index} treatment={treatment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Treatments.displayName = "Treatments";
