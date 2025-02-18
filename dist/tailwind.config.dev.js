"use strict";

// tailwind.config.js
module.exports = {
  content: ["./index.html", ""],
  theme: {
    extend: {},
    screens: {
      // Default min-width (mobile-first) breakpoints
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      // Custom max-width breakpoints
      'max-sm': {
        max: '639px'
      },
      'max-md': {
        max: '767px'
      },
      'max-lg': {
        max: '1023px'
      },
      'max-xl': {
        max: '1279px'
      },
      'maxu': {
        max: '425px'
      }
    },
    colors: {
      'light-gray': '#f2f2f2',
      'primary': '#ee0181'
    }
  },
  plugins: []
};
//# sourceMappingURL=tailwind.config.dev.js.map
