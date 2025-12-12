import { memo } from "react";
import { ClassName } from "@/types";

interface SubmitButtonProps extends ClassName {
    isButtonDisabled?: boolean;
    btnText: string;
}

export const SubmitButton = memo(({
    isButtonDisabled = false,
    btnText,
    className
}: SubmitButtonProps) => (
    <button
        type="submit"
        className="btn btn-primary py-3 px-5"
        disabled={isButtonDisabled}
    >
        {btnText}
    </button>
));

SubmitButton.displayName = "SubmitButton";