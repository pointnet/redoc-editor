import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

export default withStyles(theme => ({
  gutters: {
    paddingLeft: 13,
    paddingRight: 13,
  },
  dense: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  button: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  root: {
    flexGrow: 0,
    '&$selected': {
      backgroundColor: 'transparent !important',
      '&>div': {
        color: theme.palette.text.primary,
      },
    },
  },
  selected: {},
}))(ListItem);
