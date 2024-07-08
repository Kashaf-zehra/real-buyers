export const generateInitialFormValues = (updatedData, currentUser) => {
  return {
    property_id: updatedData?.property_id || '',
    user_id: currentUser?.id || '',
    status: `${updatedData?.status || ''}`,
    title: `${updatedData?.title || ''}`,
    location: `${updatedData?.location || ''}`,
    description: `${updatedData?.description || ''}`,
    area: `${updatedData?.area || ''}`,
    amount: `${updatedData?.amount || ''}`,
    areaUnit: `${updatedData?.areaUnit || ''}`,
    amountCurrency: `${updatedData?.amountCurrency || ''}`,
    city: `${updatedData?.city || ''}`,
    bedrooms: `${updatedData?.bedrooms || ''}`,
    connects: `${updatedData?.connects || ''}`,
    bathrooms: `${updatedData?.bathrooms || ''}`,
    parking: `${updatedData?.parking || ''}`,
    clubhouse: `${updatedData?.clubhouse || ''}`,
    swimming_pool: `${updatedData?.swimming_pool || ''}`,
    fitness_center: `${updatedData?.fitness_center || ''}`,
    playground: `${updatedData?.playground || ''}`,
    servant_area: `${updatedData?.servant_area || ''}`,
    utility_store: `${updatedData?.utility_store || ''}`,
    rooftop_terrace: `${updatedData?.rooftop_terrace || ''}`,
    on_site_maintenance: `${updatedData?.on_site_maintenance || ''}`,
    washing_area: `${updatedData?.washing_area || ''}`,
    hour_electricity: `${updatedData?.hour_electricity || ''}`,
    auto_generator: `${updatedData?.auto_generator || ''}`,
    complete_boundary_wall: `${updatedData?.complete_boundary_wall || ''}`,
    walking_trails: `${updatedData?.walking_trails || ''}`,
    pet_friendly_facilities: `${updatedData?.pet_friendly_facilities || ''}`,
    security: `${updatedData?.security || ''}`,
    masjid: `${updatedData?.masjid || ''}`,
    corridor: `${updatedData?.corridor || ''}`,
    r_o_plant: `${updatedData?.r_o_plant || ''}`,
    basketball_courts: `${updatedData?.basketball_courts || ''}`,
    huge_park: `${updatedData?.huge_park || ''}`,
    concierge_services: `${updatedData?.concierge_services || ''}`,
    business_centre: `${updatedData?.business_centre || ''}`,
    purpose: `${updatedData?.purpose || ''}`,
    propertyCategory: `${updatedData?.propertyCategory || ''}`,
    propertyType: `${updatedData?.propertyType || ''}`,
    instalmentAvailable: `${updatedData?.instalmentAvailable || ''}`,
    readyPossession: `${updatedData?.readyPossession || ''}`,
    images: updatedData?.images || [],
    videos: updatedData?.videos || [],
  };
};

export const getInitialCounterValue = (formik, name) => {
  return formik?.values[name] !== null &&
    formik?.values[name] !== undefined &&
    formik?.values[name] !== ''
    ? parseInt(formik?.values[name])
    : 0;
};
