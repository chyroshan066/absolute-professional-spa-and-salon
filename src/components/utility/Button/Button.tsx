import { ClassName, Href, Icon } from "@/types";
import { memo } from "react";

interface ButtonProps extends ClassName, Href, Icon { }

export const Button = memo(({
    className, href, icon
}: ButtonProps) => (
    <a
        href={href}
        className={className}
        target="_blank"
    >
        <span className={`icon-${icon}`} />
    </a>
));

Button.displayName = "Button";