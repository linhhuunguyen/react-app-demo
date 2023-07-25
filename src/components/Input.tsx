import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  error?: string;
  value?: string | number | ReadonlyArray<string> | undefined;
}

export default function Input({
  className,
  classNameLabel,
  classNameContainer,
  label,
  id,
  value,
  error,
  required,
  ...props
}: InputProps) {
  return (
    <div className={clsx(classNameContainer, "relative")}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            "block mb-[12px] text-sm lg:text-[18px] text-purple-primary",
            classNameLabel
          )}
        >
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <input
        id={id}
        readOnly={false}
        className={clsx(
          "border-[#44226d] outline-0 text-purple-primary text-sm lg:text-base",
          !className?.startsWith("border") && "border lg:border-[2px] ",
          !className?.startsWith("px") && "lg:px-2.5 px-1",
          !className?.startsWith("py") && "lg:py-2.5 py-1",
          className
        )}
        value={value ?? ""}
        {...props}
      />
      {error && <p className="text-xs mt-1 text-[#ff4d4f] absolute">{error}</p>}
    </div>
  );
}
