// Resource data - loaded from JSON for easy editing
import data from './resources.json';

export const resources = data.resources;
export const resourceCategories = data.resourceCategories;

// Helper function to filter resources by section
export const getResourcesBySection = (section) => {
  if (section === 'all') return resources;
  return resources.filter(r => r.section === section);
};

export default resources;
