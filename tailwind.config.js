/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        "Very-Dark-Blue": "hsl(234, 12%, 34%)",
        "Grayish-Blue": "hsl(229, 6%, 66%)",
        "Very-Light-Gray": "hsl(0, 0%, 98%)",
        "chal-Red": "hsl(0, 78%, 62%)",
        "chal-Cyan": "hsl(180, 62%, 55%)",
        "chal-Orange": "hsl(34, 97%, 64%)",
        "chal-Blue": "hsl(212, 86%, 64%)",
      },
    },
  },
  plugins: [],
};
