export const generateId = () => {
  const codeLength = 12;
  let code = '';
  for (let i = 0; i < codeLength; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
};
