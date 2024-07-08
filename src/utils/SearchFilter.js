import { ALL, ZERO } from '@/src/constants/Proposals';

export const filterProposals = (item, search) => {
  return (
    search &&
    (item?.amount?.toLowerCase() === search?.toLowerCase() ||
      item?.title?.toLowerCase() === search?.toLowerCase() ||
      item?.location?.propertyType?.toLowerCase() === search?.toLowerCase() ||
      item?.location?.city?.toLowerCase() === search?.toLowerCase() ||
      item?.location?.location?.toLowerCase() === search?.toLowerCase() ||
      item?.location?.purpose?.toLowerCase() === search?.toLowerCase())
  );
};

export const countFilteredData = (data, tabProposalStatus, search) => {
  const filteredProperties = filterPropertiesByStatus(data, tabProposalStatus);

  let filteredDataCount;
  if (filterDataBySearch(filteredProperties, tabProposalStatus, search)) {
    filteredDataCount = filterDataBySearch(
      filteredProperties,
      tabProposalStatus,
      search
    )?.length;
  } else {
    filteredDataCount = search ? ZERO : data?.length;
  }

  let filteredPropertiesCount;
  if (tabProposalStatus === ALL) {
    filteredPropertiesCount = data?.length;
  } else {
    filteredPropertiesCount = filteredProperties?.length;
  }

  if (tabProposalStatus === ALL) {
    return filteredDataCount;
  } else {
    return filteredPropertiesCount;
  }
};

export const filterDataBySearch = (data, tabProposalStatus, search) => {
  if (search) {
    return data?.filter((item) => filterProposals(item, search));
  } else {
    return null;
  }
};

export const filterPropertiesByStatus = (data, tabProposalStatus) => {
  if (tabProposalStatus === ALL) {
    return data;
  } else {
    return data?.filter(
      (proposal) => proposal?.proposalStatus === tabProposalStatus
    );
  }
};
