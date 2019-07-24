/* eslint-disable no-new-func */

import { darken, lighten, readableColor, transparentize } from 'polished';

const setString = (path, value) =>
  new Function('draft', `draft.${path} = "${value}";`);

const setRaw = (path, value) =>
  new Function('draft', `draft.${path} = ${value};`);

export const EVENTS = {
  theme: {
    load: 'redoc.theme.load',
    reset: 'redoc.theme.reset',
    spacing: 'redoc.theme.spacing',
  },
  single: {
    boolean: 'redoc.single.boolean',
    color: 'redoc.single.color',
    integer: 'redoc.single.integer',
    unit: 'redoc.single.unit',
  },
  colors: {
    background: 'redoc.colors.background',
    links: 'redoc.colors.links',
    tone: 'redoc.colors.tone',
    text: 'redoc.colors.text',
  },
};

export default (draft, action) => {
  switch (action.type) {
    case EVENTS.theme.load:
      Object.keys(action.value).forEach(key => {
        Object.keys(action.value[key]).forEach(prop => {
          switch (key) {
            case 'spacing':
              setRaw(`spacing.${prop}`, action.value[key][prop])(draft);
              break;
            case 'schema':
            case 'typography':
            case 'menu':
            case 'colors':
              switch (prop) {
                case 'arrow':
                case 'groupItems':
                case 'level1Items':
                case 'links':
                case 'headings':
                case 'code':
                case 'primary':
                case 'success':
                case 'warning':
                case 'error':
                case 'text':
                case 'border':
                case 'http':
                case 'responses':
                  Object.keys(action.value[key][prop]).forEach(inner => {
                    switch (inner) {
                      case 'wrap':
                        setRaw(
                          `${key}.${prop}.${inner}`,
                          action.value[key][prop][inner]
                        )(draft);
                        break;
                      case 'success':
                      case 'error':
                      case 'redirect':
                      case 'info':
                        Object.keys(action.value[key][prop][inner]).forEach(
                          innerProp => {
                            setString(
                              `${key}.${prop}.${inner}.${innerProp}`,
                              action.value[key][prop][inner][innerProp]
                            )(draft);
                          }
                        );
                        break;
                      default:
                        setString(
                          `${key}.${prop}.${inner}`,
                          action.value[key][prop][inner]
                        )(draft);
                        break;
                    }
                  });
                  break;
                case 'optimizeSpeed':
                  setRaw(`${key}.${prop}`, action.value[key][prop])(draft);
                  break;
                default:
                  setString(`${key}.${prop}`, action.value[key][prop])(draft);
                  break;
              }
              break;
            default:
              setString(`${key}.${prop}`, action.value[key][prop])(draft);
              break;
          }
        });
      });
      return draft;
    case EVENTS.theme.reset:
      return action.value;
    case EVENTS.single.boolean:
    case EVENTS.single.integer:
      return void setRaw(action.path, action.value)(draft);
    case EVENTS.single.unit:
    case EVENTS.single.color:
      return void setString(action.path, action.value)(draft);
    case EVENTS.theme.spacing:
      setRaw(`${action.path}.unit`, action.value)(draft);
      setRaw(`${action.path}.sectionHorizontal`, action.value * 8)(draft);
      return void setRaw(`${action.path}.sectionVertical`, action.value * 8)(
        draft
      );
    case EVENTS.colors.links:
      setString(`${action.path}.color`, action.value)(draft);
      setString(`${action.path}.visited`, action.value)(draft);
      return void setString(`${action.path}.hover`, lighten(0.2, action.value))(
        draft
      );
    case EVENTS.colors.tone:
      setString(`${action.path}.main`, action.value)(draft);
      setString(
        `${action.path}.light`,
        lighten(draft.colors.tonalOffset, action.value)
      )(draft);
      setString(
        `${action.path}.dark`,
        darken(draft.colors.tonalOffset, action.value)
      )(draft);
      return void setString(
        `${action.path}.contrastText`,
        readableColor(action.value)
      )(draft);
    case EVENTS.colors.background:
      setString(`${action.path}.color`, action.value)(draft);
      return void setString(
        `${action.path}.backgroundColor`,
        transparentize(0.9, action.value)
      )(draft);
    case EVENTS.colors.text:
      setString(`${action.path}.primary`, action.value)(draft);
      return void setString(
        `${action.path}.secondary`,
        lighten(draft.colors.tonalOffset, action.value)
      )(draft);
    default:
      return draft;
  }
};
