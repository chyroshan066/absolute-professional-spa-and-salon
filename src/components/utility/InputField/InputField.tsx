"use client";

import { ContactFormData } from "@/middlewares/schema";
import { memo } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import styles from "./InputField.module.css";

interface FormFieldProps {
    id: keyof ContactFormData;
    placeholder?: string;
    type?: string;
    register: UseFormRegister<ContactFormData> | UseFormRegisterReturn;
    error?: string;
    disabled?: boolean;
    isTextarea?: boolean;
    showError?: boolean;
};

export const ErrorMessage = memo(({
    message
}: {
    message?: string
}) => {
    if (!message) return null;

    return <span style={{
        color: '#d32f2f',
        fontSize: '14px',
        display: 'block',
        fontFamily: 'var(--font-poppins), Poppins, sans-serif',
        marginTop: '8px',
        paddingTop: '0',
        lineHeight: '1.2',
        letterSpacing: '0.02em',
        fontStyle: 'italic',
        fontWeight: '400',
        width: '100%'
    }}>
        {message}
    </span>;
});

ErrorMessage.displayName = "ErrorMessage";

export const InputField = memo((
    {
        id,
        placeholder,
        type = "text",
        register,
        error,
        disabled,
        isTextarea = false,
        showError = true,
    }: FormFieldProps
) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (typeof register === 'object' && 'onChange' in register && register.onChange) {
            register.onChange(e);
        }
    };

    const getRegisterProps = () => {
        if (typeof register === 'function') {
            // If register is a function (UseFormRegister), call it with the field id
            return register(id);
        } else {
            // If register is already an object (UseFormRegisterReturn), return it as is
            return register;
        }
    };

    if (isTextarea) {
        const registerProps = getRegisterProps();

        return (
            // <div>
            <div className={showError ? "" : `${styles.dInlineBlock} w-100`}>
                <textarea
                    {...registerProps}
                    placeholder={placeholder}
                    autoComplete="off"
                    className={styles.formControl}
                    disabled={disabled}
                    onChange={handleInputChange}
                    rows={7}
                    cols={30}
                />
                {showError && error && <ErrorMessage message={error} />}
            </div>
        );
    }

    const registerProps = getRegisterProps();

    return (
        <div className={showError ? "" : `${styles.dInlineBlock} w-100`}>
            <input
                {...registerProps}
                type={type}
                placeholder={placeholder}
                autoComplete="off"
                className={styles.formControl}
                onChange={handleInputChange}
                disabled={disabled}
            />
            {showError && error && <ErrorMessage message={error} />}
        </div>
    );
});

InputField.displayName = "FormField";