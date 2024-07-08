import { PROPERTY_BUYING_DETAIL } from '@/src/constants/Preview_Data';

export const createPropertyStatusState = ({
  propertySell,
  propertyBuyingDetails,
}) => {
  if (!propertyBuyingDetails) {
    return {};
  }
  const propertyStatusData = {
    sellingData: PROPERTY_BUYING_DETAIL.sellingDetails,
    purposeData: propertySell.map((item) => ({ ...item, value: '' })),
  };
  return { propertyStatusData };
};
