import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { PAYMENT_METHODE_DATA } from '@/src/constants/agent/Payment_Method';
import {
  updatePaymentMethodSelection,
  setFormError,
} from '@/src/redux/slices/settings/PakageCartSlice';

import { getCardType } from '@/src/utils/getCardType';
import Title from './Title';
import MasterCard from './MasterCard';
import VisaCard from './VisaCard';
import GeneralCard from './GeneralCard';
import CreditCardType from './CreditCardType';
import CheckBoxDescription from './CheckBoxDescription';
import AccountType from './AccountType';

const PaymentMethod = ({
  data,
  formik,
  selectedValue,
  setSelectedValue,
  checked,
  setState,
  setChecked,
  paymentMedthodDetails,
  handleChange,
  handleChangeCheckBox,
  setTypeCard,
  typeCard,
  selectCardId,
}) => {
  const {
    image,
    title,
    textField,
    checkBoxLabel,
    cardTypeImage,
    creditCardLabel,
    addButtonLabel,
    easyPaisa,
    jazzCash,
  } = data;
  const {
    JAZZ_CASH,
    EASY_PAISA,
    ACCOUNT_NAME_EASYPAISA,
    ACCOUNT_NAME_JAZZCASH,
    VISA,
    MASTER_CARD,
    NAME_ON_CARD,
    GENERAL_CARD,
  } = PAYMENT_METHODE_DATA.constantLabel;
  const [cardTypeNumber, setCardTypeNumber] = useState();

  const dispatch = useDispatch();
  const handleChangeRadioButton = (e) => {
    setSelectedValue(e.target.value);
    if (
      e.target.value === VISA ||
      e.target.value === MASTER_CARD ||
      e.target.value === GENERAL_CARD
    ) {
      setState(false);
    }
  };

  useEffect(() => {
    dispatch(setFormError(Object.values(formik?.errors)));
  }, [formik?.errors]);

  useEffect(() => {
    if (selectedValue === '') {
      setState(false);
    }
  }, [selectedValue]);

  useEffect(() => {
    if (
      selectedValue === GENERAL_CARD ||
      selectedValue === MASTER_CARD ||
      selectedValue === VISA
    ) {
      const findOrder = paymentMedthodDetails?.filter(
        (item) => item?.card_number === cardTypeNumber
      );
      if (findOrder.length === 1) {
        dispatch(
          updatePaymentMethodSelection({
            cardNumber: findOrder[0].card_number,
            isSelected: true,
            isCheckBox: true,
          })
        );
      }
    } else if (
      selectedValue === NAME_ON_CARD ||
      selectedValue === EASY_PAISA ||
      selectedValue === JAZZ_CASH
    ) {
      paymentMedthodDetails?.forEach((item) => {
        dispatch(
          updatePaymentMethodSelection({
            cardNumber: item?.card_number,
            isSelected: false,
            isCheckBox: item?.isCheckBox,
          })
        );
        return false;
      });
    }
  }, [selectedValue]);

  const selectedCard = paymentMedthodDetails?.filter(
    (card) => card?.card_number === typeCard
  );
  console.log(selectedCard);
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '100%',
        height: { xs: 'auto', lg: 'auto ' },
        pb: '60px',
        border: '2px solid #E4E4E4',
        borderRadius: '10px',
        backgroundColor: '#fff',
        backgroundImage: `url('${image}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: { xs: '90%', sm: '70%', md: '70%', lg: '45%' },
      }}
    >
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Title title={title} />
        </Grid>
        {paymentMedthodDetails?.map(
          (card) =>
            card?.isCheckBox && (
              <>
                {getCardType(card.card_number) === MASTER_CARD && (
                  <MasterCard
                    setCardTypeNumber={setCardTypeNumber}
                    image={data?.masterCard?.image}
                    cardName={data?.masterCard?.cardName}
                    accountNumber={card?.card_number}
                    selectedValue={selectedValue}
                    handleChangeRadioButton={handleChangeRadioButton}
                    cardNo={card?.card_number}
                    setTypeCard={setTypeCard}
                    typeCard={typeCard}
                    paymentMedthodDetails={paymentMedthodDetails}
                    setSelectedValue={setSelectedValue}
                  />
                )}
                {getCardType(card.card_number) === VISA && (
                  <VisaCard
                    setCardTypeNumber={setCardTypeNumber}
                    image={data?.visaCard?.image}
                    cardName={data?.visaCard?.cardName}
                    accountNumber={card?.card_number}
                    selectedValue={selectedValue}
                    handleChangeRadioButton={handleChangeRadioButton}
                    cardNo={card?.card_number}
                    setTypeCard={setTypeCard}
                    typeCard={typeCard}
                    paymentMedthodDetails={paymentMedthodDetails}
                    id={card.id}
                    setSelectCardId={selectCardId}
                    setSelectedValue={setSelectedValue}
                  />
                )}
                {getCardType(card.card_number) === GENERAL_CARD && (
                  <GeneralCard
                    setCardTypeNumber={setCardTypeNumber}
                    image={data?.generalCard?.image}
                    cardName={data?.generalCard?.cardName}
                    accountNumber={card?.card_number}
                    selectedValue={selectedValue}
                    handleChangeRadioButton={handleChangeRadioButton}
                    cardNo={card?.card_number}
                    setTypeCard={setTypeCard}
                    typeCard={typeCard}
                    setSelectCardId={selectCardId}
                    paymentMedthodDetails={paymentMedthodDetails}
                    setSelectedValue={setSelectedValue}
                  />
                )}
              </>
            )
        )}
        <CreditCardType
          cardTypeImage={cardTypeImage}
          creditCardLabel={creditCardLabel}
          addButtonLabel={addButtonLabel}
          selectedValue={selectedValue}
          handleChangeRadioButton={handleChangeRadioButton}
          handleChange={handleChange}
          textField={textField}
          formik={formik}
          NAME_ON_CARD={NAME_ON_CARD}
          setTypeCard={setTypeCard}
        />
        <CheckBoxDescription
          checked={checked}
          setChecked={setChecked}
          handleChangeCheckBox={handleChangeCheckBox}
          checkBoxLabel={checkBoxLabel}
        />
        <AccountType
          AccountName={ACCOUNT_NAME_EASYPAISA}
          selectedValue={selectedValue}
          handleChangeRadioButton={handleChangeRadioButton}
          handleChange={handleChange}
          textField={easyPaisa}
          formik={formik}
          setTypeCard={setTypeCard}
        />
        <AccountType
          AccountName={ACCOUNT_NAME_JAZZCASH}
          selectedValue={selectedValue}
          handleChangeRadioButton={handleChangeRadioButton}
          handleChange={handleChange}
          textField={jazzCash}
          formik={formik}
          setTypeCard={setTypeCard}
        />
      </Grid>
    </Box>
  );
};

export default PaymentMethod;
