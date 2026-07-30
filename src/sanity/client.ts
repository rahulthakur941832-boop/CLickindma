import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = (import.meta as unknown as { env: Record<string, string> }).env?.VITE_SANITY_PROJECT_ID || 'vuo3tmag';
const dataset = (import.meta as unknown as { env: Record<string, string> }).env?.VITE_SANITY_DATASET || 'production';

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-05-15',
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
