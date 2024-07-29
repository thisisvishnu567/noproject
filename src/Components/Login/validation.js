export const validateMobileNumber = (phonenumber) => {
  const mobileNumberRegex = /^[6-9]\d{9}$/;
  return mobileNumberRegex.test(phonenumber);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};