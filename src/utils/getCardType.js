import { PAYMENT_METHODE_DATA } from '@/src/constants/agent/Payment_Method';
const { VISA, MASTER_CARD, GENERAL_CARD } = PAYMENT_METHODE_DATA.constantLabel;

export const getCardType = (cardNumber) => {
  const visaRegex = /^4\d{12}(?:\d{3})?$/;
  const mastercardRegex = /^5[1-5]\d{14}$/;

  if (visaRegex.test(cardNumber)) {
    return VISA;
  } else if (mastercardRegex.test(cardNumber)) {
    return MASTER_CARD;
  } else {
    return GENERAL_CARD;
  }
};
