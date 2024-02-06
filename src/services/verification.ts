export const generateVerificationCode = () => {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  return code;
};

export const verifyCode = (code: string, verificationCode: string) => {
  return code === verificationCode;
};
