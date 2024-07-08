import { PROPERTY_BUYING_DETAIL } from '@/src/constants/Preview_Data';

export const createPropertyTypeState = (
  iconTitle,
  commercialType,
  plotType,
  propertyBuyingDetails
) => {
  if (!propertyBuyingDetails) {
    return {};
  }
  const mapArray = (array) =>
    Array.isArray(array) ? array.map((item) => ({ ...item, value: '' })) : [];
  const propertyTypeInfo = {
    sellingData: PROPERTY_BUYING_DETAIL.sellingDetails,
    propertyTypeData: [
      ...mapArray(iconTitle),
      ...mapArray(commercialType),
      ...mapArray(plotType),
    ],
  };
  console.log('test', propertyTypeInfo.propertyTypeData);
  return { propertyTypeInfo };
};
