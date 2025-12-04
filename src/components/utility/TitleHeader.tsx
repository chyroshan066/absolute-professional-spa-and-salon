import { ClassName, Header } from "@/types";
import { memo } from "react";

interface TitleHeaderProps extends ClassName, Header {
    subHeader: string
}

export const TitleHeader = memo(({
    className, subHeader, header
}: TitleHeaderProps) => (
    <div className="row justify-content-center mb-5 pb-3">
        <div className={`heading-section ftco-animate text-center ${className}`}>
            <h3 className="subheading">{subHeader}</h3>
            <h2 className="mb-1">{header}</h2>
        </div>
    </div>
));

TitleHeader.displayName = "TitleHeader"