export interface Children {
    children: React.ReactNode;
}

export interface ClassName {
    className?: string
}

export interface Title {
    title?: string;
}

export interface Message {
    message: string;
}

export interface IsVisible {
    isVisible: boolean;
}

export interface AlertState extends Title, Message, IsVisible {
    type: "success" | "error";
}

export interface Name {
    name: string;
}

export interface Description {
    description: string;
}

export interface Email {
    email: string;
}

interface Text {
    text: string;
}

interface ImgSrc {
    imgSrc: string;
}

interface Href {
    href: string;
}

interface Icon {
    icon: string;
}

interface Index {
    index: string;
}

interface Duration {
    duration: number | string;
}

interface Price {
    price: number;
}

export interface Header {
    header: string;
}

export interface NavLink extends Name, Href {}
export interface Offer extends ImgSrc, Title, Text {}
export interface Service extends Icon, Title, Text {}
export interface Treatment extends Service, ClassName {}
export interface Testimonial extends Name, Text, ImgSrc {}

export interface Therapy extends Index, Header {
    section: {
        title: string;
        duration: number;
        price: number;
    }[];
}

export interface Pricing extends Duration, Price {
    features: string[];
} 
