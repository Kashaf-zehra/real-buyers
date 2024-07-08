export const filterData = (selectedData, purpose, city, location, type) => {
  return selectedData?.filter(
    (item) =>
      (purpose === '' ||
        item?.propertyData?.propertyLocation?.purpose?.toLowerCase() ===
          purpose?.toLowerCase()) &&
      (city === '' ||
        item?.propertyData?.propertyLocation?.city?.toLowerCase() ===
          city?.toLowerCase()) &&
      (location === '' ||
        item?.location?.toLowerCase() === location?.toLowerCase()) &&
      (type === '' ||
        item?.propertyData?.type?.toLowerCase() === type?.toLowerCase())
  );
};

export const getUniqueFilteredOptions = (selectedData) => {
  const uniquePurposeOptions = getUniqueFilteredValues(selectedData, 'purpose');
  const uniqueCityOptions = getUniqueFilteredValues(selectedData, 'city');
  const uniqueLocationOptions = getUniqueFilteredValues(selectedData, 'area');
  const uniquePropertyTypeOptions = getUniqueFilteredValues(
    selectedData,
    'type'
  );

  return {
    purposeOptions: uniquePurposeOptions,
    cityOptions: uniqueCityOptions,
    locationOptions: uniqueLocationOptions,
    typeOptions: uniquePropertyTypeOptions,
  };
};

const getUniqueFilteredValues = (selectedData, key) => {
  const uniqueFilteredValues = [];
  selectedData?.forEach((item) => {
    if (uniqueFilteredValues?.indexOf(item[key]) === -1) {
      uniqueFilteredValues?.push(item[key]);
    }
  });
  return uniqueFilteredValues;
};

export function getUniqueProposalStatus(selectedData) {
  const uniqueProposalStatuss = [];
  const seenProposalStatuss = {};

  selectedData?.forEach((proposal) => {
    if (!seenProposalStatuss[proposal?.proposalStatus]) {
      uniqueProposalStatuss?.push(proposal?.proposalStatus);
      seenProposalStatuss[proposal?.proposalStatus] = true;
    }
  });

  return uniqueProposalStatuss;
}

export function getFilteredCount(selectedData, proposalStatus) {
  return proposalStatus === 'All'
    ? selectedData?.length
    : selectedData?.filter(
        (proposal) => proposal?.proposalStatus === proposalStatus
      )?.length;
}
