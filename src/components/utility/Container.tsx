import { Children, ClassName } from "@/types";
import { memo } from "react";

interface ContainerProps extends Children, ClassName {
    style?: React.CSSProperties;
}

export const Container = memo(({
    children, className, style
}: ContainerProps) => (
    <section
        className={`ftco-section ${className}`}
        style={style}
    >
        <div className="container">
            {children}
        </div>
    </section>
));

Container.displayName = "Container";