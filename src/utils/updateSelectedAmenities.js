export const updateSelectedAmenities = (getAmenities, setSelectedAmenities) => {
  if (getAmenities.length === 0) {
    setSelectedAmenities([]);
  } else {
    setSelectedAmenities(getAmenities);
  }
};
