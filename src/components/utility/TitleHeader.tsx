import { ClassName, Header } from "@/types";
import { memo } from "react";

interface TitleHeaderProps extends ClassName, Header {
    subHeader: string;
    outerDivClassName?: string;
}

export const TitleHeader = memo(({
    className, subHeader, header, outerDivClassName
}: TitleHeaderProps) => (
    <div className={`row justify-content-center mb-5 ${outerDivClassName}`}>
        <div
            className={`heading-section text-center ${className}`}
            data-aos="fade-up"
        >
            <h3 className="subheading">{subHeader}</h3>
            <h2 className="mb-1">{header}</h2>
        </div>
    </div>
));

TitleHeader.displayName = "TitleHeader"