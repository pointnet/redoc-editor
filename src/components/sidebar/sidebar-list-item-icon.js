import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default withStyles(theme => ({
  root: {
    minWidth: 'auto',
    color: theme.palette.primary.light,
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
}))(ListItemIcon);
