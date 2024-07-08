const isInputValid = (code) => {
  return Object.values(code).every((value) => /^\d$/.test(value));
};
export { isInputValid };
