import { capitalizeFirstLetter } from './projects';

export function findSelectedAgent(agents, selectedProject) {
  return agents?.find((agent) => agent?.id === selectedProject?.user_id);
}

export function filterAgentsProjects(projects, agentId) {
  return projects?.filter(
    (item) => item?.user_id === parseInt(agentId) && item?.status === 'submit'
  );
}
export function filterAgentsProjectsByType(projects, agentId, capAdsType) {
  return projects?.filter(
    (item) =>
      item?.user_id == agentId &&
      item?.purpose === capAdsType &&
      item?.status === 'submit'
  );
}
export function filterAgentsProjectsByTypeCategory(
  projects,
  agentId,
  category,
  adsType
) {
  const capCategory = capitalizeFirstLetter(category);
  const capAdsType = capitalizeFirstLetter(adsType);
  return projects?.filter(
    (item) =>
      item?.user_id == agentId &&
      item?.propertyCategory === capCategory &&
      item?.purpose === capAdsType &&
      item?.status === 'submit'
  );
}
export function extractAgentId(pathname) {
  const segments = pathname.split(`/`);
  return segments[segments.length - 2];
}
export function extractAgentIdTypeId(pathname) {
  const segments = pathname.split(`/`);
  const agentId = segments[segments.length - 3];
  const adsType = segments[segments.length - 1];
  const capAdsType = capitalizeFirstLetter(adsType);
  return { agentId, adsType, capAdsType };
}
export function extractAgentIdCategoryIdTypeId(pathname) {
  const segments = pathname.split(`/`);
  const agentId = segments[segments.length - 4];
  const category = segments[segments.length - 1];
  const adsType = segments[segments.length - 2];
  return { agentId, category, adsType };
}

export function filterProjectsByPurposeCategory(
  projects,
  agentId,
  purpose,
  propertyCategory
) {
  return projects?.filter(
    (item) =>
      item?.user_id === agentId &&
      item?.purpose === purpose &&
      item?.propertyCategory === propertyCategory &&
      item?.status === 'submit'
  ).length;
}
