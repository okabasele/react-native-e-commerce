const truncate = input =>
  input.length > 10 ? `${input.substring(0, 10)}...` : input;
export default truncate;
