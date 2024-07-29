export const validateMobileNumber = (phone) => {
  const mobileNumberRegex = /^[6-9]\d{9}$/;
  return mobileNumberRegex.test(phone);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};