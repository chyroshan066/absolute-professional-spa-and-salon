import { CONTACTS } from "@/constants";
import { memo } from "react";

export const Contact = memo(() => {
    return (
        <>
            <section className="ftco-section contact-section">
                <div className="container">
                    <div className="row block-9">

                        <div
                            className="col-md-5 contact-info bg-light p-4"
                            data-aos="fade-up"
                        >
                            <div className="row">
                                <div className="col-md-12 mb-4">
                                    <h2 className="h4">Contact Information</h2>
                                </div>
                                {CONTACTS.map((info, index) => (
                                    <div
                                        key={index}
                                        className="col-md-12"
                                    >
                                        <p>
                                            <span>{info.title}:</span> <a href={info.href}>{info.text}</a>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-md-1" />
                        <div
                            className="col-md-6"
                            data-aos="fade-up"
                        >
                            <form action="#" className="contact-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols={30} rows={7} className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <iframe
                src="https://www.google.com/maps/d/embed?mid=1bMqi42sAqom4GUZwIcEVOdunVxZw1iQ&ehbc=2E312F"
                width="100%"
                height="480"
                style={{
                    border: 0,
                    display: 'block'
                }}
                allowFullScreen
                loading="lazy"
            />
        </>
    );
});

Contact.displayName = "Contact";