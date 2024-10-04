import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
})