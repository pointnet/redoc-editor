import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Scrollbars } from 'react-custom-scrollbars';

import { CustomScrollbarsContext } from '../../contexts/custom-scrollbars';

const ThumbBox = withStyles(theme => ({
  root: {
    height: '100%',
    whiteSpace: 'nowrap',
    backgroundColor: theme.palette.primary.main,
  },
}))(Box);

export default componentProps => {
  const scrollbarsElement = React.useRef(null);
  const renderThumb = ({ style, ...props }) => (
    <ThumbBox style={style} {...props} />
  );
  const update = () => {
    scrollbarsElement.current.update();
  };
  return (
    <CustomScrollbarsContext.Provider value={{ update }}>
      <Scrollbars
        ref={scrollbarsElement}
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
        {...componentProps}
      />
    </CustomScrollbarsContext.Provider>
  );
};
