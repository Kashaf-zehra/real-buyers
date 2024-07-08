export const selectCityState = (propertyBuyingDetails, cityOptions) => {
  if (!propertyBuyingDetails) {
    return {};
  }
  const selectedCity = {
    sellingData: propertyBuyingDetails,
    selectCityOption: cityOptions,
  };
  return { selectedCity };
};
