import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: 30,
    height: 30,
    minHeight: 30,
  },
  gutters: {
    paddingLeft: props => (props.nested ? theme.spacing(4) : theme.spacing(2)),
  },
}));

export default props => {
  const classes = useStyles(props);
  const { nested, ...ListItemProps } = props;
  return <ListItem classes={classes} {...ListItemProps} />;
};
