export default {
  spacing: {
    unit: 5,
    sectionHorizontal: 40,
    sectionVertical: 40,
  },
  breakpoints: {
    small: '50rem',
    medium: '85rem',
    large: '105rem',
  },
  colors: {
    tonalOffset: 0.3,
    primary: {
      main: '#32329f',
      light: '#8e8edc',
      dark: '#0d0d2b',
      contrastText: '#ffffff',
    },
    success: {
      main: '#00aa13',
      light: '#44ff59',
      dark: '#001102',
      contrastText: '#000000',
    },
    warning: {
      main: '#d4ad03',
      light: '#fde373',
      dark: '#3d3201',
      contrastText: '#ffffff',
    },
    error: {
      main: '#e53935',
      light: '#f6bebd',
      dark: '#72110f',
      contrastText: '#000000',
    },
    text: {
      primary: '#333333',
      secondary: '#808080',
    },
    border: {
      dark: 'rgba(0,0,0, 0.1)',
      light: '#ffffff',
    },
    responses: {
      success: {
        color: '#00aa13',
        backgroundColor: 'rgba(0,170,19,0.1)',
      },
      error: {
        color: '#e53935',
        backgroundColor: 'rgba(229,57,53,0.1)',
      },
      redirect: {
        color: '#ffa500',
        backgroundColor: 'rgba(255,165,0,0.1)',
      },
      info: {
        color: '#87ceeb',
        backgroundColor: 'rgba(135,206,235,0.1)',
      },
    },
    http: {
      get: '#6bbd5b',
      post: '#248fb2',
      put: '#9b708b',
      options: '#d3ca12',
      patch: '#e09d43',
      delete: '#e27a7a',
      basic: '#999999',
      link: '#31bbb6',
      head: '#c167e4',
    },
  },
  schema: {
    linesColor: '#a4a4c6',
    defaultDetailsWidth: '75%',
    typeNameColor: '#808080',
    typeTitleColor: '#808080',
    requireLabelColor: '#e53935',
    labelsTextSize: '0.9em',
    nestingSpacing: '1em',
    nestedBackground: '#fafafa',
    arrow: {
      size: '1.1em',
      color: '#808080',
    },
  },
  typography: {
    fontSize: '14px',
    lineHeight: '1.5em',
    fontWeightRegular: '400',
    fontWeightBold: '600',
    fontWeightLight: '300',
    fontFamily: 'Roboto, sans-serif',
    smoothing: 'antialiased',
    optimizeSpeed: true,
    headings: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '400',
      lineHeight: '1.6em',
    },
    code: {
      fontSize: '13px',
      fontFamily: 'Courier, monospace',
      lineHeight: '1.5em',
      fontWeight: '400',
      color: '#e53935',
      backgroundColor: 'rgba(38, 50, 56, 0.05)',
      wrap: false,
    },
    links: {
      color: '#32329f',
      visited: '#32329f',
      hover: '#6868cf',
    },
  },
  menu: {
    width: '260px',
    backgroundColor: '#fafafa',
    textColor: '#333333',
    groupItems: {
      textTransform: 'uppercase',
    },
    level1Items: {
      textTransform: 'none',
    },
    arrow: {
      size: '1.5em',
      color: '#333333',
    },
  },
  logo: {
    maxHeight: '260px',
    maxWidth: '260px',
    gutter: '2px',
  },
  rightPanel: {
    backgroundColor: '#263238',
    width: '40%',
    textColor: '#ffffff',
  },
  codeSample: {
    backgroundColor: '#11171a',
  },
};
