// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      6: "1.5rem",
      24: "6rem",
      36: "9rem",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    minHeight: {
      6: "1.5rem",
      24: "6rem",
      36: "9rem",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    // margin: {
    //     // "18": "72px",
    // },
    extend: {
      colors: {
        bg: {
          primary: "hsl(214, 47%, 23%)",
          secondary: "hsl(237, 49%, 15%)",
          dark: "hsl(223, 46%, 17%)",
        },
        textColor: {
          dark: "hsl(229, 25%, 31%)",
          score: "hsl(229, 64%, 46%)",
        },
        borderColor: {
          paper: "hsl(230, 89%, 62%)",
          rock: "hsl(349, 71%, 52%)",
          scissors: "hsl(39, 89%, 49%)",
        },
        header: "hsl(217, 16%, 45%)",
        score: "hsl(228, 25%, 31%)",
      },
      backgroundImage: {
        paper: "url('../public/images/icon-paper.svg')",
        rock: "url('../public/images/icon-rock.svg')",
        scissors: "url('../public/images/icon-scissors.svg')",
      },
      spacing: {
        13: "3.125rem",
        17: "4.375rem",
        18: "4.5rem",
        160: "160px",
        250: "250px",
      },
      fontSize: {
        "4xll": "2.5rem",
        scoreRem: "3.5rem",
      },
      borderWidth: {
        3: "3px",
        18: "18px",
        25: "25px",
      },
      borderRadius: {
        head: "5px",
      },
      maxWidth: {
        43: "43.75rem",
      },
      boxShadow: {
        paperShadow: "inset 0 5px 6px grey, 0 8px rgb(13, 49, 227)",
        rockShadow: "inset 0 5px 6px grey, 0 8px rgb(161, 27, 52)",
        scissorsShadow: "inset 0 5px 6px grey, 0 8px rgb(164, 110, 10)",
      },
      backgroundSize: {
        "50%": "50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
