import { PROPERTY_BUYING_DETAIL } from '@/src/constants/Preview_Data';

export const createInformationState = (
  propertyInformation,
  propertyBuyingDetails
) => {
  if (!propertyBuyingDetails) {
    return {};
  }
  const adInfoData = {
    sellingData: propertyBuyingDetails,
    addInfo: propertyInformation.map((item) => ({
      ...item,
      value: PROPERTY_BUYING_DETAIL.sellingDetails[item?.label],
    })),
  };
  return { adInfoData };
};
