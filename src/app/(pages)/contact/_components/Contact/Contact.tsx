"use client";

import { Alert } from "@/components/Alert/Alert";
import { InputField } from "@/components/utility/InputField/InputField";
import { SubmitButton } from "@/components/utility/SubmitButton";
import { CONTACTS } from "@/constants";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { ContactFormData, ContactFormSchema } from "@/middlewares/schema";
import { onSubmit } from "@/utils/contactData";
import { memo, useMemo } from "react";
import styles from "./Contact.module.css";

const initialValues: ContactFormData = {
    name: "",
    phone: "",
    subject: "",
    message: "",
};

interface Field {
    id: "name" | "phone" | "subject" | "message";
    placeholder: string;
}

const FIELDS: Field[] = [
    {
        id: "name",
        placeholder: "Your Name",
    },
    {
        id: "phone",
        placeholder: "Phone No.",
    },
    {
        id: "subject",
        placeholder: "Subject",
    },
    {
        id: "message",
        placeholder: "Message",
    },
];

export const Contact = memo(() => {
    const {
        register,
        formState: {
            errors,
            isSubmitting
        },
        onFormSubmit,
        isButtonDisabled,
        alertState,
        hideAlert,
    } = useFormSubmission<ContactFormData>({
        schema: ContactFormSchema,
        defaultValues: initialValues,
        onSubmit: onSubmit,
        successMessage: "Thank you! Your message has been sent. We look forward to serving you.",
        successTitle: "Message Sent!",
        errorTitle: "Sending Failed",
        errorMessage: "Something went wrong while sending your message. Please try again.",
    });

    const buttonText = useMemo(
        () => isSubmitting ? "Sending..." : "Send Message",
        [isSubmitting]
    );


    return (
        <>
            <Alert
                type={alertState.type}
                title={alertState.title}
                message={alertState.message}
                isVisible={alertState.isVisible}
                onDismiss={hideAlert}
                autoDismiss={true}
                autoDismissDelay={6000}
            />

            <section className={`ftco-section contact-section`}>
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
                                            <span className={styles.contactTitleBlack}>{info.title}:</span> <a href={info.href}>{info.text}</a>
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
                            <form
                                onSubmit={onFormSubmit}
                                noValidate
                            >

                                <div className="row">
                                    {FIELDS.slice(0, 2).map((field, index) => (
                                        <div
                                            key={index}
                                            className="col-md-6"
                                        >
                                            <div className="form-group">
                                                <InputField
                                                    id={field.id}
                                                    type={field.id === "phone" ? "tel" : "text"}
                                                    placeholder={field.placeholder}
                                                    register={register(field.id)}
                                                    error={errors[field.id]?.message}
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {FIELDS.slice(2, 4).map((field, index) => (
                                    <div
                                        key={index}
                                        className="form-group"
                                    >
                                        <InputField
                                            id={field.id}
                                            placeholder={field.placeholder}
                                            register={register(field.id)}
                                            isTextarea={field.id === "message" ? true : false}
                                            error={errors[field.id]?.message}
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                ))}

                                <div className="form-group">
                                    <SubmitButton
                                        isButtonDisabled={isButtonDisabled}
                                        btnText={buttonText}
                                    />
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