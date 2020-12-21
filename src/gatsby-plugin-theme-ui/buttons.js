export const buttons = {
  default: {
    py: 2,
    px: 4,
    fontSize: "2xl",
    borderRadius: "none",
    borderStyle: "solid",
    borderWidth: 1,
    textTransform: "uppercase",
    fontFamily: "heading",
    fontWeight: 800,
    letterSpacing: "wider",
    cursor: "pointer",
    transition: "0.2s linear",
    "&:disabled": {
      cursor: "not-allowed",
      color: "darkGray",
      bg: "lightGray",
      borderColor: "lightGray",
      "&:hover": {
        color: "darkGray",
        bg: "lightGray",
        borderColor: "lightGray",
      },
    },
  },

  primary: {
    variant: "buttons.default",
    color: "white",
    bg: "primary",
    borderColor: "primary",
    ":hover": {
      bg: "black",
      borderColor: "black",
    },
  },

  gradient: {
    variant: "buttons.default",
    backgroundImage:
      "linear-gradient(128deg, rgba(211,191,136,1) 0%, rgba(161,131,78,1) 30%, rgba(161,131,78,1) 53%, rgba(161,131,78,1) 100%)",
    backgroundSize: "200% auto",
    px: "t.sm",
    py: 3,
    fontFamily: "heading",
    fontSize: "xl",
    textAlign: "center",
    textTransform: "none",
    color: "#FFF",
    cursor: "pointer",
    borderRadius: "2rem",
    borderColor: "transparent",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    ":hover": {
      backgroundPosition: "center",
    },
  },

  secondary: {
    variant: "buttons.default",
    color: "white",
    bg: "black",
    borderColor: "black",
    transition: "all 0.3s ease",
    ":hover": {
      color: "black",
      bg: "transparent",
    },
  },

  "secondary-outline": {
    variant: "buttons.default",
    color: "black",
    bg: "white",
    borderColor: "black",
    ":hover": {
      color: "white",
      bg: "black",
    },
  },

  ghost: {
    variant: "buttons.default",
    bg: "transparent",
    color: "black",
    borderColor: "transparent",
    ":hover": {
      bg: "lightGray",
      borderColor: "lightGray",
    },
  },

  link: {
    px: "0 !important;",
    py: "0 !important;",
    fontFamily: "body",
    fontSize: "sm",
    color: "darkGray",
    bg: "transparent",
    cursor: "pointer",
    ":hover": {
      textDecoration: "underline",
    },
  },

  mvp: {
    default: {
      borderRadius: "full",
      cursor: "pointer",
      fontFamily: "Graphik",
      fontWeight: "500",
      fontSize: ["sm", null, null, "md"],
    },

    primary: {
      variant: "buttons.mvp.default",
      backgroundColor: "primary",
      borderColor: "primary",
      borderStyle: "solid",
      borderWidth: "2px",

      ":hover": {
        backgroundColor: "primary",
        borderColor: "primary",
        borderStyle: "solid",
      },
    },
    primaryDisabled: {
      variant: "buttons.mvp.primary",
      opacity: 0.6,
      cursor: "not-allowed",
    },

    secondary: {
      variant: "buttons.mvp.default",
      backgroundColor: "black",
      borderColor: "black",
      borderWidth: "2px",
      borderStyle: "solid",
    },

    tertiary: {
      variant: "buttons.mvp.default",

      backgroundColor: "transparent",
      borderColor: "black",
      borderWidth: "2px",
      borderStyle: "solid",
      color: "black",
    },

    inverted: {
      variant: "buttons.mvp.default",
      backgroundColor: "transparent",
      borderColor: "primary",
      borderWidth: "1px",
      borderStyle: "solid",
      color: "primary",
      ":hover": {
        backgroundColor: "primary",
        borderColor: "primary",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "white",
      },
    },

    ghost: {
      variant: "buttons.mvp.default",
      backgroundColor: "transparent",
      border: 0,
      color: "black",
      ":hover": {
        backgroundColor: "transparent",
        border: 0,
        color: "black",
      },
    },

    link: {
      px: "0 !important;",
      py: "0 !important;",
      fontSize: "sm",
      color: "darkGray",
      bg: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
      ":hover": {
        textDecoration: "underline",
        bg: "transparent",
        border: 0,
      },
    },
  },

  sm: { py: 1, px: 4, fontSize: "base" },
  md: { py: 2, px: 8 },
  lg: { py: 4, px: 16, fontSize: "3xl" },

  icon: {
    borderRadius: "none",
    cursor: "pointer",
    padding: "0px",
    p: "4px",
    width: "32px",
    height: "32px",
    backgroundColor: "transparent",
    ":disabled": {
      cursor: "not-allowed",
      color: "gray",
    },
  },

  close: {
    borderRadius: "none",
    cursor: "pointer",
    padding: "0px",
    p: "4px",
    width: "32px",
    height: "32px",
  },

  menu: {
    borderRadius: "none",
    cursor: "pointer",
    padding: "0px",
    p: "4px",
    width: "32px",
    height: "32px",
  },
}
