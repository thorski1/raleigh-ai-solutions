import { createClient } from '@sanity/client';
import { services } from '../lib/services.js';
import { dataset, projectId } from '../sanity/env.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const client = createClient({
      projectId: projectId,
      dataset: dataset,
      token:
        '', // Be careful with this token and don't commit it to version control
      useCdn: false,
      apiVersion: '2023-05-03',
    });

async function uploadServices() {
  for (const service of services) {
    const { slug, thumbnailSrc, ...serviceData } = service;

    try {
      // Upload the thumbnail image first
      let asset;
      if (thumbnailSrc.startsWith('/')) {
        const imagePath = join(__dirname, '..', 'public', thumbnailSrc);
        asset = await client.assets.upload('image', fs.createReadStream(imagePath));
      }

      // Prepare the document
      const doc = {
        _type: 'service',
        slug: { _type: 'slug', current: slug },
        ...serviceData,
        features: serviceData.features.map((feature) => ({
          ...feature,
          icon: feature.icon,
        })),
        thumbnailSrc: asset
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: asset._id,
              },
            }
          : undefined,
      };

      // Check if the document already exists
      const existingDoc = await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, {
        slug,
      });

      if (existingDoc) {
        // Update existing document
        await client.patch(existingDoc._id).set(doc).commit();
        console.log(`Updated service: ${slug}`);
      } else {
        // Create new document
        await client.create(doc);
        console.log(`Created service: ${slug}`);
      }

    } catch (error) {
      console.error(`Error processing service ${slug}:`, error);
    }
  }
}

uploadServices()
  .then(() => console.log('Finished uploading services'))
  .catch(console.error);