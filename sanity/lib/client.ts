import { createClient, type ClientConfig } from '@sanity/client';
import { apiVersion, dataset, projectId } from '../env';

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
};

export const client = createClient(config);
