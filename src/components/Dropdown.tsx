import { useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

interface DropdownProps {
  options: string[];
  placeholder?: string;
  error?: string;
  onSelect?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

const dropdownButton = cva(
  "flex w-80 justify-between items-center px-4 py-3 rounded-lg text-base transition-all duration-150",
  {
    variants: {
      variant: {
        default: "border border-gray-300 text-gray-800 hover:border-gray-500",
        open: "border-2 border-gray-500 text-gray-900",
        error: "border border-red-500 text-gray-800",
        disabled:
          "bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Dropdown = ({
  options,
  placeholder = "선택하세요",
  error,
  onSelect,
  className,
  disabled = false,
}: DropdownProps) => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    onSelect?.(value);
  };

  const variant = disabled
    ? "disabled"
    : error
    ? "error"
    : isOpen
    ? "open"
    : "default";

  return (
    <div className={twMerge("relative inline-block", className)}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={twMerge(clsx(dropdownButton({ variant })))}
      >
        <span className={selected ? "text-gray-900" : "text-gray-400"}>
          {selected || placeholder}
        </span>

        <svg
          className={clsx(
            "w-4 h-4 text-gray-500 transform transition-transform",
            isOpen && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && !disabled && (
        <div className="absolute mt-2 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          {options.map((opt) => (
            <div
              key={opt}
              className={clsx(
                "px-4 py-3 text-gray-800 hover:bg-gray-100 cursor-pointer",
                selected === opt && "bg-gray-100 font-medium"
              )}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-red-500 text-xs mt-2 ml-1">{error}</p>}
    </div>
  );
};

export default Dropdown;
