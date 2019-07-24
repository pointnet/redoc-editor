export default prop => prop.replace(/([A-Z\d])/g, (_, $1) => ` ${$1}`);
