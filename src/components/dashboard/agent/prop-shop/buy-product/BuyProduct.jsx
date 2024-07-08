'use client';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import {
  ProceedPayment,
  isResetForm,
  updatePaymentMethodSelection,
} from '@/src/redux/slices/settings/PakageCartSlice';
import {
  Buy_Connects,
  Buy_Product_Data,
} from '@/src/constants/agent/Buy_Product';
import { PAYMENT_METHODE_DATA } from '@/src/constants/agent/Payment_Method';

import Subscription from './Subscription';
import PaymentMethod from './PaymentMethod';
import ProductCart from './ProductCart';
import BuyConnects from './BuyConnects';
import {
  calculateFormState,
  handleCheckBoxChange,
  handlePaymentChange,
  useFormikForPayment,
} from '@/src/utils/payment';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  alignItems: 'center',
  display: 'flex',
  border: 'none',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}));

export default function BuyProduct() {
  const {
    title,
    description,
    cart,
    connects,
    image,
    buttonText,
    textField,
    dropdown,
  } = Buy_Connects;
  const { NAME_ON_CARD } = PAYMENT_METHODE_DATA.constantLabel;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState(NAME_ON_CARD);
  const [typeCard, setTypeCard] = useState();
  const [selectCardId, setSelectCardId] = useState('');
  const [state, setState] = useState(true);

  const dispatch = useDispatch();
  const { paymentMedthod } = useSelector((state) => state.PakageCart);
  const OrderSummaryPayLoad = { ...cart, ...connects };
  const paymentMedthodDetails = useSelector(
    (state) => state.PakageCart.paymentMedthodDetails
  );
  const formik = useFormikForPayment({ selectedValue, checked });

  useEffect(() => {
    setState(
      calculateFormState({
        selectedValue,
        formik,
        paymentMedthodDetails,
        typeCard,
      })
    );
  }, [formik?.values, selectedValue, paymentMedthodDetails, typeCard]);

  const handleChange = () => {
    handlePaymentChange({
      dispatch,
      ProceedPayment,
      OrderSummaryPayLoad,
      setIsModalOpen,
      formik,
      isResetForm,
      state,
      setChecked,
      paymentMedthod,
    });
  };

  const handleChangeCheckBox = (event) => {
    handleCheckBoxChange({
      event,
      setChecked,
      paymentMedthodDetails,
      formik,
      dispatch,
      updatePaymentMethodSelection,
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {!paymentMedthod && (
          <Grid xs={12} sm={12} md={12} lg={8.5} item>
            <Item>
              <Subscription title={Buy_Product_Data?.title} />
            </Item>
          </Grid>
        )}
        {paymentMedthod && (
          <Grid xs={12} sm={12} md={12} lg={8.5} item>
            <Item>
              <PaymentMethod
                data={PAYMENT_METHODE_DATA}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                formik={formik}
                checked={checked}
                setChecked={setChecked}
                dispatch={dispatch}
                paymentMedthodDetails={paymentMedthodDetails}
                handleChange={handleChange}
                handleChangeCheckBox={handleChangeCheckBox}
                typeCard={typeCard}
                setTypeCard={setTypeCard}
                setSelectCardId={setSelectCardId}
                selectCardId={selectCardId}
                setState={setState}
              />
            </Item>
          </Grid>
        )}
        <Grid xs={12} sm={12} md={12} lg={3.5} item>
          <Item>
            <ProductCart
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              handleChange={handleChange}
              state={state}
              resetForm={formik?.resetForm}
            />
          </Item>
        </Grid>

        {!paymentMedthod && (
          <Grid xs={12} sm={12} md={12} lg={8.5} item>
            <Item>
              <BuyConnects
                title={title}
                image={image}
                fields={textField}
                description={description}
                buttonText={buttonText}
                dropdown={dropdown}
              />
            </Item>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
