export function capitalizeFirstLetter(text) {
  return text.replace(/\b\w/g, (match) => match.toUpperCase());
}

export function findSelectedProject(properties, id) {
  return properties?.find(
    (property) =>
      String(property?.property_id) === String(id) &&
      property?.status === 'submit'
  );
}

export function filterProjects(projects) {
  return projects?.filter((item) => item?.status === 'submit');
}
export function filterProjectsByType(projects, capAdsType) {
  return projects?.filter(
    (item) => item?.purpose === capAdsType && item?.status === 'submit'
  );
}
export function filterProjectsByTypeCategory(projects, category, adsType) {
  const capCategory = capitalizeFirstLetter(category);
  const capAdsType = capitalizeFirstLetter(adsType);
  return projects?.filter(
    (item) =>
      item?.propertyCategory === capCategory &&
      item?.purpose === capAdsType &&
      item?.status === 'submit'
  );
}
export function extract(pathname) {
  const segments = pathname.split(`/`);
  return segments[segments.length - 2];
}
export function extractTypeId(pathname) {
  const segments = pathname.split(`/`);
  const adsType = segments[segments.length - 1];
  const capAdsType = capitalizeFirstLetter(adsType);
  return { adsType, capAdsType };
}
export function extractCategoryIdTypeId(pathname) {
  const segments = pathname.split(`/`);
  const category = segments[segments.length - 1];
  const adsType = segments[segments.length - 2];
  return { category, adsType };
}

export function filterProjectsByPurposeCategory(
  projects,
  purpose,
  propertyCategory
) {
  return projects?.filter(
    (item) =>
      item?.purpose === purpose &&
      item?.propertyCategory === propertyCategory &&
      item?.status === 'submit'
  ).length;
}
