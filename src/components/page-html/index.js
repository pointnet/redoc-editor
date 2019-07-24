import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Highlight from 'react-highlight';

import { RedocContext } from '../../contexts/redoc';
import CustomScrollbars from '../custom-scrollbars';

const useStyles = makeStyles(theme => ({
  root: {
    visibility: props => (props.path === '/html' ? 'visible' : 'hidden'),
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.primary.light,
    padding: `${theme.spacing(1)}px`,
    '&>div>div:first-child': {
      right: '-1px !important',
      bottom: '-1px !important',
    },
    '& pre': {
      margin: 0,
      minHeight: '100%',
      display: 'flex',
      '& code': {
        flexGrow: 1,
      },
    },
  },
}));

const PageHtml = ({ path }) => {
  const classes = useStyles({ path });
  const redoc = React.useContext(RedocContext);
  const htmlCode = redoc.getHtmlCode();
  const highlight = React.useMemo(() => {
    return <Highlight language="html">{htmlCode}</Highlight>;
  }, [htmlCode]);
  return (
    <Box className={classes.root}>
      <CustomScrollbars>{highlight}</CustomScrollbars>
    </Box>
  );
};

PageHtml.propTypes = {
  path: PropTypes.string.isRequired,
};

PageHtml.defaultProps = {
  path: '/',
};

export default PageHtml;
