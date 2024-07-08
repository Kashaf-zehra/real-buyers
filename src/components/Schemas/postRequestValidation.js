import * as yup from 'yup';

export const postRequestValidation = yup.object({
  title: yup.string('Enter title').required('Title is required'),
  description: yup
    .string('Enter description')
    .required('Description is required'),
  purpose: yup.string(''),
  propertyCategory: yup.string(''),
  propertyType: yup.string(''),
  city: yup.string('Enter city').required('City is required'),
  area: yup.string('Enter area').required('Area is required'),
  areaUnit: yup.string('Enter area unit').required('Area unit is required'),
  amount: yup.string('Enter amount').required('Amount is required'),
  amountCurrency: yup
    .string('Enter amount currency')
    .required('Amount currency is required'),
  installmentAvailable: yup.boolean(),
  readyPossession: yup.boolean(),
  featuresAndAmenities: yup.mixed(),
});
