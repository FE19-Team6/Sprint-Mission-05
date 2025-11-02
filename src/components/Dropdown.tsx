// ✅ Dropdown.tsx
import { useState } from "react";

interface DropdownProps {
  options: string[];
  placeholder?: string;
  error?: string;
  onSelect?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

const Dropdown = ({
  options,
  placeholder = "선택하세요",
  error,
  onSelect,
  className = "",
  disabled = false,
}: DropdownProps) => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    onSelect?.(value);
  };

  const baseButton =
    "flex w-80 justify-between items-center px-4 py-3 rounded-lg text-base transition-all duration-150";
  const stateStyles = disabled
    ? "bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed"
    : error
    ? "border border-red-500 text-gray-800"
    : isOpen
    ? "border-2 border-gray-500 text-gray-900"
    : "border border-gray-300 text-gray-800 hover:border-gray-500";

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`${baseButton} ${stateStyles}`}
      >
        <span className={selected ? "text-gray-900" : "text-gray-400"}>
          {selected || placeholder}
        </span>

        <svg
          className={`w-4 h-4 text-gray-500 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
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
              className={`px-4 py-3 text-gray-800 hover:bg-gray-100 cursor-pointer ${
                selected === opt ? "bg-gray-100 font-medium" : ""
              }`}
              onMouseDown={(e) => e.preventDefault()}
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
