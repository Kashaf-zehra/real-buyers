import { PROPERTY_BUYING_DETAIL } from '@/src/constants/Preview_Data';

export const incrementCounterState = (propertyBuyingDetails, identifier) => {
  if (!propertyBuyingDetails) {
    return {};
  }
  return PROPERTY_BUYING_DETAIL.sellingDetails.incrementBtn[identifier];
};
