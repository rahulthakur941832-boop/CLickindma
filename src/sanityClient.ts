import { createClient } from '@sanity/client';

const metaEnv = (import.meta as unknown as { env?: Record<string, string> }).env || {};

export const sanityProjectId = metaEnv.VITE_SANITY_PROJECT_ID || 'vuo3tmag';
export const sanityDataset = metaEnv.VITE_SANITY_DATASET || 'production';

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  useCdn: true,
  apiVersion: '2023-05-03',
});

// Helper function to safely fetch Sanity data with a fallback
export async function fetchSanityData<T>(query: string, fallback: T): Promise<T> {
  try {
    const data = await client.fetch(query);
    if (data && (Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0)) {
      return data;
    }
    return fallback;
  } catch (err) {
    console.warn('Sanity fetch warning (using fallback data):', err);
    return fallback;
  }
}

// Fetch custom CMS documents if added in Sanity Studio
export async function getSanityServices() {
  return fetchSanityData(`*[_type == "service"]`, null);
}

export async function getSanityReviews() {
  return fetchSanityData(`*[_type == "review"]`, null);
}

export async function getSanityPackages() {
  return fetchSanityData(`*[_type == "package"]`, null);
}
