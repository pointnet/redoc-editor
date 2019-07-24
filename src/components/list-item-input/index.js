import React from 'react';
import PropTypes from 'prop-types';
import { string } from 'yup';
import { useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

import ListItemBase from '../list-item-base';
import { toReadableString } from '../../utils';

const useStyles = makeStyles({
  root: {
    fontSize: 12,
    width: props => props.width,
  },
  input: {
    textAlign: 'right',
  },
});

const ListItemInput = ({
  text,
  secondary,
  readable,
  nested,
  value,
  onChange,
  schema,
  width,
}) => {
  const classes = useStyles({ width });
  const [state, setState] = React.useState(`${value}`);
  const { enqueueSnackbar } = useSnackbar();
  const readableText = toReadableString(text);
  React.useEffect(() => {
    setState(`${value}`);
  }, [value]);
  const onBlur = evt => {
    if (state !== `${value}`) {
      if (schema) {
        schema
          .validate(state)
          .then(input => void onChange(input))
          .catch(error => {
            enqueueSnackbar(`${readableText.toUpperCase()} ${error.message}`, {
              variant: 'error',
            });
            setState(`${value}`);
          });
      } else if (state !== `${value}`) {
        onChange(state);
      }
    }
  };
  return (
    <ListItemBase
      text={text}
      secondary={secondary}
      readable={readable}
      nested={nested}>
      <FormControl>
        <Input
          classes={classes}
          value={state}
          inputProps={{
            onBlur,
            spellCheck: false,
            autoComplete: 'off',
            autoCorrect: 'off',
            autoCapitalize: 'off',
          }}
          onChange={evt => setState(`${evt.target.value}`)}
          disableUnderline
        />
      </FormControl>
    </ListItemBase>
  );
};

ListItemInput.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  readable: PropTypes.bool.isRequired,
  nested: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  schema: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
};

ListItemInput.defaultProps = {
  text: 'INPUT',
  readable: true,
  nested: false,
  value: 'text',
  onChange: () => {},
  schema: string().required('is required'),
  width: 50,
};

export default ListItemInput;
