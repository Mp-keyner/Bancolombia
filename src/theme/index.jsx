import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Crear un tema base
const theme = createTheme({
  palette: {
    primary: {
      main: "#2c2a29",
      Light: "#565453",
      Dark: "#1E1D1C",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fdda24", // Color principal
      Light: "#FDE14F",
      Dark: "#FDE14F",
      contrastText: "#2c2a29",
    },
    error: {
      main: "#f44336", // Color de error
    },
    warning: {
      main: "#ff9800", // Color de advertencia
    },
    info: {
      main: "#2196f3", // Color de información
    },
    success: {
      main: "#4caf50", // Color de éxito
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.8rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    // ... otras configuraciones tipográficas
  },
  transitions: {
    duration: {
      enteringScreen: 200, // Duración de la animación de entrada
      leavingScreen: 150, // Duración de la animación de salida
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Estilos para la variante "root"
        root: {
          fontSize: "1rem",
          borderRadius: "4px", // Redondear bordes
          textTransform: "none", // No transformar texto
          boxShadow: "none",
          // ... otros estilos globales para todos los botones
        },
        contained: {
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: "1rem", // Estilo personalizado para todos los inputs
        },
      },
    },
    // ... otras sobrescrituras de estilo por componente
  },
});

// Aplicar responsiveFontSizes para ajustar el tamaño de la fuente de forma dinámica
const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
