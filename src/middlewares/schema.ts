import z from "zod";

export const ContactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(1, "Phone number is required").regex(/^[\d\s+-]+$/, "Enter valid number"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export const SubscriptionFormSchema = z.object({
    email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
});

export type SubscriptionFormData = z.infer<typeof SubscriptionFormSchema>;