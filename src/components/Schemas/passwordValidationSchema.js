import * as Yup from 'yup';
export const passwordValidationSchema = Yup.object({
  oldPassword: Yup.string().min(6).max(8).required('Enter Old Password'),
  newPassword: Yup.string().min(6).max(8).required('Enter New Password'),
  confirmPassword: Yup.string()
    .min(6)
    .max(8)
    .required('Enter New Password')
    .oneOf([Yup.ref('newPassword'), null], 'Password must match'),
});
