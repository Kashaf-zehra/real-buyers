import { isValidPhoneNumber } from 'react-phone-number-input';

import * as Yup from 'yup';
export const profileValidationSchema = Yup.object({
  first_name: Yup.string().min(2).max(25).required('Enter First Name'),
  last_name: Yup.string().min(2).max(25).required('Enter Last Name'),
  email: Yup.string().email().required('Enter email'),
  landline_number: Yup.number().min(4).required('Enter Landline'),
  profile_image: Yup.string(),
  country: Yup.string().min(3).max(25).required('Enter Country'),
  city: Yup.string().min(3).max(25).required('Enter City'),
  address: Yup.string().min(3).max(40).required('Enter Address'),
  about: Yup.string().min(10).required('Enter Bio'),
  whatsapp: Yup.string()
    .test('phone', 'Invalid Phone Number', (value) =>
      value ? isValidPhoneNumber(value) : true
    )
    .required('Whatsapp is required'),
  mobile_number: Yup.string()
    .test('phone', 'Invalid Phone Number', (value) =>
      value ? isValidPhoneNumber(value) : true
    )
    .required('Whatsapp is required'),
});
