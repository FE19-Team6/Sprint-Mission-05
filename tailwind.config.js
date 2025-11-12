// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "4rem",
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        xl: "1800px",
      },
    },
    extend: {
      // 컬러 정의
      colors: {
        primary: {
          900: "#155bb7",
          700: "#2F80ED",
        },

        gray: {
          900: "#111827",
          800: "#1F2937",
          600: "#4B5563",
          500: "#6B7280",
          400: "#9CA3AF",
          300: "#d6d6d6",
          200: "#E5E7EB",
          100: "#F3F4F6",
        },
      },

      //폰트 스타일 정의
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },

      // 폰트 사이즈 정의
      fontSize: {
        xs: "12px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        xxl: "20px",
      },

      // 폰트 두께 정의
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
