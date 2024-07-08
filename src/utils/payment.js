import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPaymentMethod,
  updatePaymentMethodSelection,
} from '@/src/redux/slices/settings/PakageCartSlice';

import { PAYMENT_METHODE_DATA } from '@/src/constants/agent/Payment_Method';

import {
  easyPaisaSchema,
  jazzCashSchema,
  paymentSchema,
} from '@/src/components/Schemas/paymentValidation';
import { generateId } from './genrateId';
const { JAZZ_CASH, EASY_PAISA, NAME_ON_CARD } =
  PAYMENT_METHODE_DATA.constantLabel;

export const useFormikForPayment = ({ selectedValue, checked }) => {
  const dispatch = useDispatch();
  const paymentMedthodDetails = useSelector(
    (state) => state.PakageCart.paymentMedthodDetails
  );

  return useFormik({
    initialValues: {
      name_on_card: '',
      card_number: '',
      expiry_date: '',
      cvv_no: '',
      easypaisa_number: '',
      jazzcash_number: '',
    },
    validationSchema:
      selectedValue !== JAZZ_CASH && selectedValue !== EASY_PAISA
        ? paymentSchema
        : selectedValue === EASY_PAISA
          ? easyPaisaSchema
          : jazzCashSchema,
    onSubmit: (values) => {
      const updatedValues = {
        ...values,
        isCheckBox: checked,
        id: generateId(),
      };
      delete updatedValues?.easypaisa_number;
      delete updatedValues?.jazzcash_number;
      const findCard = paymentMedthodDetails?.find(
        (item) => item?.card_number === values?.card_number
      );
      if (
        findCard &&
        (selectedValue !== JAZZ_CASH || selectedValue !== EASY_PAISA)
      ) {
        dispatch(
          updatePaymentMethodSelection({
            isSelected: findCard.isSelected,
            cardNumber: findCard.card_number,
            isCheckBox: checked,
          })
        );
      } else if (selectedValue === JAZZ_CASH || selectedValue === EASY_PAISA) {
        dispatch(
          addPaymentMethod(
            selectedValue === JAZZ_CASH
              ? { jazzcash_number: values?.jazzcash_number }
              : { easypaisa_number: values?.easypaisa_number }
          )
        );
      } else {
        dispatch(addPaymentMethod(updatedValues));
      }
    },
  });
};

export const calculateFormState = ({
  selectedValue,
  formik,
  paymentMedthodDetails,
  typeCard,
}) => {
  if (selectedValue === NAME_ON_CARD) {
    if (
      formik?.values?.name_on_card.length >= 3 &&
      formik?.values?.card_number.toString().length === 16 &&
      formik?.values?.expiry_date.toString().length === 5 &&
      formik?.values?.cvv_no.toString().length === 3
    ) {
      return false;
    } else {
      return true;
    }
  } else if (selectedValue === JAZZ_CASH) {
    return formik?.values?.jazzcash_number.toString().length !== 10;
  } else if (selectedValue === EASY_PAISA) {
    return formik?.values?.easypaisa_number.toString().length !== 10;
  } else if (selectedValue === '') {
    const findIndex = paymentMedthodDetails?.filter((item) => {
      return item?.card_number === typeCard;
    });
    return findIndex.length !== 1;
  }
};

export const isSelectedAccount = (selectedValue, accountName) => {
  return selectedValue === accountName.toLowerCase().replace(/\s/g, '');
};

export const maskAccountNumber = (number) => {
  if (!number) return '';
  const strNumber = String(number);
  const masked =
    '*'.repeat(Math.max(0, strNumber.length - 4)) + strNumber.slice(-4);
  return masked;
};

export const handlePaymentChange = ({
  dispatch,
  ProceedPayment,
  OrderSummaryPayLoad,
  setIsModalOpen,
  formik,
  isResetForm,
  state,
  setChecked,
  paymentMedthod,
}) => {
  dispatch(ProceedPayment(OrderSummaryPayLoad));
  if (paymentMedthod && !state) {
    setIsModalOpen(true);
    formik?.handleSubmit();
    dispatch(isResetForm(true));
    setTimeout(() => {
      formik?.resetForm();
      setChecked(false);
    }, 1000);
  }
};

export const handleCheckBoxChange = ({
  event,
  setChecked,
  paymentMedthodDetails,
  formik,
  dispatch,
  updatePaymentMethodSelection,
}) => {
  const isChecked = event.target.checked;
  setChecked(isChecked);
  const findIndexOfCard = paymentMedthodDetails.findIndex((item) => {
    return item?.card_number === formik?.values?.card_number;
  });
  if (findIndexOfCard !== -1) {
    dispatch(
      updatePaymentMethodSelection({
        isSelected: false,
        cardNumber: formik?.values?.card_number,
        isCheckBox: isChecked,
      })
    );
  }
};
