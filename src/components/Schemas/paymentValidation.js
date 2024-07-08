import * as Yup from 'yup';

export const paymentSchema = Yup.object().shape({
  name_on_card: Yup.string().required('Name on card is required'),
  card_number: Yup.string()
    .matches(/^\d{16}$/, 'Invalid card number')
    .required('Card number is required'),
  expiry_date: Yup.string()
    .matches(/^(0[1-9]|1[0-2])-(\d{2})$/, 'Invalid expiry date (MM-YY format)')
    .required('Expiry date is required')
    .test(
      'not-in-past',
      'Expiry date should not be in the past',
      function (value) {
        if (!value) return true;
        const [month, year] = value.split('-');
        const currentDate = new Date();
        const cardDate = new Date(`20${year}`, month - 1);
        return cardDate > currentDate;
      }
    ),
  cvv_no: Yup.string()
    .matches(/^\d{3}$/, 'Invalid CVV')
    .required('CVV is required'),
});

export const jazzCashSchema = Yup.object().shape({
  jazzcash_number: Yup.string()
    .test('jazzcash-length', 'Invalid JazzCash number', function (value) {
      if (!value)
        return this.createError({ message: 'JazzCash number is required' });
      const regex = value.startsWith('0') ? /^\d{11}$/ : /^\d{10}$/;
      return regex.test(value);
    })
    .required('JazzCash number is required'),
});

export const easyPaisaSchema = Yup.object().shape({
  easypaisa_number: Yup.string()
    .test('easypaisa-length', 'Invalid Easypaisa number', function (value) {
      if (!value)
        return this.createError({ message: 'Easypaisa number is required' });
      const regex = value.startsWith('0') ? /^\d{11}$/ : /^\d{10}$/;
      return regex.test(value);
    })
    .required('Easypaisa number is required'),
});
