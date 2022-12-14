import { createTheme } from '@mui/material/styles';

const primaryDark = '#131919';
const primaryColor = '#253232';

const secondaryColor = '#A68764';
const secondaryLight = '#E6E1DD';
const secondaryDark = '#cfcac7';
const warningColor = '#d14334';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      dark: primaryDark,
    },
    secondary: {
      dark: secondaryDark,
      light: secondaryLight,
      main: secondaryColor,
    },
    warning: {
      main: warningColor,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 850,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ['"Google Sans, sans-serif"', 'Google Sans Text, sans-serif'].join(','),
    h1: {
      fontFamily: 'Google Sans, sans-serif',
    },
    header1: {
      fontWeight: 400,
      fontFamily: 'Google Sans, sans-serif',
      textTransform: 'capitalize',
      fontStyle: 'italic',
      fontSize: '4.8rem',
      color: secondaryLight,
    },
    header2: {
      fontWeight: 400,
      fontFamily: 'Google Sans, sans-serif',
      textTransform: 'capitalize',
      fontStyle: 'italic',
      fontSize: '4.8rem',
      color: secondaryLight,
    },
    subheader1: {
      color: secondaryLight,
      fontSize: '3.2rem',
      fontWeight: 400,
      fontFamily: 'Google Sans, sans-serif',
      textAlign: 'center',
    },
    subheader2: {
      color: secondaryLight,
      fontSize: '4.2rem',
      fontWeight: 400,
      fontFamily: 'Google Sans, sans-serif',
      textAlign: 'center',
    },
    subheader3: {
      color: secondaryLight,
      fontSize: '2.6rem',
      fontWeight: 400,
      fontFamily: 'Google Sans, sans-serif',
      textAlign: 'center',
    },
    body1: {
      fontSize: '1.6rem',
      fontFamily: 'Google Sans Text',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    body2: {
      fontSize: '1.8rem',
      fontFamily: 'Google Sans Text',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: 1.2,
    },
    navOption: {
      color: secondaryLight,
      fontSize: '1.6rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontFamily: 'Google Sans Text',
      textTransform: 'uppercase',
      transition: 'all color .2s ease',
      position: 'relative',
      display: 'inline-block',
      padding: '3px 0',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 'calc(100% + 5px)',
        width: 0,
        right: 0,
        height: '3px',
        transition: 'width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s',
        background: primaryDark,
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 'calc(100% + 5px)',
        width: 0,
        right: 0,
        height: '3px',
        transition: 'width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83)',
        background: secondaryColor,
      },
      '&:hover': {
        '&::after': { width: '100%', left: 0 },
        '&::before': { width: '100%', left: 0 },
      },
      '&.active': {
        color: primaryDark,
      },
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'main' },
          style: {
            color: primaryColor,
            background: secondaryColor,
            border: '1px solid transparent',
            letterSpacing: '0.025rem',
            fontSize: '1.8rem',
            fontWeight: 300,
            WebkitFontSmoothing: 'subpixel-antialiased',
            WebkitTextStroke: `0.5px ${primaryColor}`,
            padding: '1rem 4rem',
            borderRadius: '3px',
            boxSizing: 'border-box',
            height: '5rem',
            width: '100%',
            maxWidth: '65rem',
            transition: 'border color background 0.2s ease-in-out',
            textTransform: 'capitalize',
            '&:hover': {
              background: 'none',
              color: secondaryColor,
              border: `2px solid ${secondaryColor}`,
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            background: 'none',
            borderLeft: `1px solid ${secondaryLight}`,
            borderRight: `1px solid ${secondaryLight}`,
            borderBottom: `1px solid ${secondaryLight}`,
            color: secondaryColor,
            width: '100%',
            borderRadius: '0',
            height: '6.5rem',
            transition: 'all transform 250ms',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: secondaryColor,
              color: primaryDark,
            },
          },
        },
        {
          props: { variant: 'tertiary' },
          style: {
            background: primaryColor,
            color: secondaryColor,
            fontSize: '1.6rem',
            fontFamily: 'Google Sans Text',
            fontWeight: 400,
            padding: '1.5rem 4rem',
            borderRadius: '8px',
            boxSizing: 'border-box',
            width: '100%',
            marginTop: '5rem',
            transition: 'background border color 0.5s ease-in-out',
            '&:hover': {
              background: secondaryColor,
              color: primaryColor,
            },
          },
        },
      ],
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
  },
});
