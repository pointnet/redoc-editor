export default {
  specUrl: `${process.env.REACT_APP_BASE_URL}/openapi.yaml`,
  options: ['untrustedSpec'],
  backgroundColor: '#ffffff',
  expandResponses: [],
  labels: {
    enum: 'Enum',
    enumSingleValue: 'Value',
    enumArray: 'Items',
    default: 'Default',
    deprecated: 'Deprecated',
    example: 'Example',
    nullable: 'Nullable',
    recursive: 'Recursive',
    arrayOf: 'Array of ',
  },
};
