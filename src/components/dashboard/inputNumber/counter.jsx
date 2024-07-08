import React from 'react';
import CustomNumberInput from './customInputNumber';
import { getInitialCounterValue } from '@/src/utils/draftProperty';
import { INCREMENT_DECREMENT } from '@/src/constants/Preview_Data';

const Counter = ({ formik, name, limit }) => {
  const { ZERO, ONE } = INCREMENT_DECREMENT;
  const initialValue = getInitialCounterValue(formik, name);

  const handleIncrement = () => {
    const value = initialValue;

    if (typeof value === 'number') {
      if (value < limit) {
        const newIncrementValue = value + ONE;
        formik?.setFieldValue(name, newIncrementValue.toString());
      }
    }
  };

  const handleDecrement = () => {
    if (initialValue > ZERO) {
      const newDecrementValue = initialValue - ONE;
      formik?.setFieldValue(name, newDecrementValue.toString());
    }
  };

  return (
    <div>
      <CustomNumberInput
        limit={limit}
        value={initialValue}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};
export default Counter;
