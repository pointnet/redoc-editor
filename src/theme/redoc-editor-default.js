import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import deepPurple from '@material-ui/core/colors/deepPurple';

let theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: deepPurple,
  },
});

theme = {
  ...theme,
  palette: {
    ...theme.palette,
    text: {
      primary: theme.palette.primary.contrastText,
      secondary: theme.palette.secondary.contrastText,
    },
  },
  props: {
    MuiTab: {
      disableRipple: true,
      disableFocusRipple: true,
      disableTouchRipple: true,
    },
  },
  overrides: {
    MuiCardHeader: {
      title: {
        color: theme.palette.primary.dark,
      },
      subheader: {
        color: theme.palette.primary.light,
      },
    },
    MuiCardContent: {
      root: {
        color: theme.palette.primary.main,
      },
    },
    MuiList: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      },
    },
    MuiListSubheader: {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        minHeight: 40,
      },
      gutters: {
        paddingRight: theme.spacing(0.5),
      },
    },
    MuiListItem: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexGrow: 1,
      },
      dense: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiListItemText: {
      root: {
        textTransform: 'uppercase',
      },
      multiline: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
      },
      secondary: {
        fontSize: 10,
      },
    },
    MuiExpansionPanel: {
      root: {
        backgroundColor: 'transparent',
        width: '100%',
        '&:before': {
          content: 'none',
        },
        '&$expanded': {
          margin: 0,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      },
      expanded: {},
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: `2px 0 2px ${theme.spacing(2)}px`,
        backgroundColor: theme.palette.primary.main,
        minHeight: 'auto',
        '&$expanded': {
          minHeight: 'auto',
        },
      },
      content: {
        margin: 0,
        '&$expanded': {
          margin: 0,
        },
      },
      expandIcon: {
        paddingTop: 0,
        paddingBottom: 0,
      },
      expanded: {},
    },
    MuiExpansionPanelDetails: {
      root: {
        overflow: 'auto',
        padding: 0,
        flexGrow: 1,
        '&>div>div:first-child': {
          marginRight: `-${theme.spacing(2) + 1}px !important`,
          marginBottom: `-${theme.spacing(2) + 1}px !important`,
        },
      },
    },
    MuiCollapse: {
      container: {
        display: 'flex',
        flexGrow: 1,
      },
      wrapper: {
        flexGrow: 1,
      },
      wrapperInner: {
        display: 'flex',
        flexGrow: 1,
        '&>div:first-child': {
          display: 'flex',
          flexGrow: 1,
        },
      },
    },
    MuiToolbar: {
      root: {
        display: 'flex',
        alignItems: 'center',
      },
      dense: {
        minHeight: theme.spacing(4),
      },
      gutters: {
        paddingLeft: theme.spacing(1),
        paddingRight: 0,
        [theme.breakpoints.up('sm')]: {
          paddingLeft: theme.spacing(1),
          paddingRight: 0,
        },
      },
    },
    MuiTabs: {
      root: {
        display: 'flex',
        alignItems: 'center',
        minHeight: theme.spacing(4),
        height: theme.spacing(4),
        padding: 0,
      },
      scroller: {
        display: 'flex',
        alignItems: 'center',
      },
      indicator: {
        display: 'none',
      },
    },
    MuiTab: {
      root: {
        minWidth: 'auto',
        padding: `0 ${theme.spacing(1)}px`,
        minHeight: 'auto',
        '&$selected': {
          color: theme.palette.primary.contrastText,
        },
        [theme.breakpoints.up('sm')]: {
          minWidth: 'auto',
          padding: `0 ${theme.spacing(1)}px`,
        },
      },
      selected: {},
    },
  },
};

export default theme;
