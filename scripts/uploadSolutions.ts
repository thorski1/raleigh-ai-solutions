import { createClient } from '@sanity/client';
import { solutionsData } from '../lib/solutions-data.js';
import { dataset, projectId } from '../sanity/env.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { IconType } from 'react-icons';
import { FaChartLine, FaCloud, FaPiggyBank, FaRobot } from 'react-icons/fa';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  token: "skOY2GPwIrIC1g5ZcOjstWZP7tEavtQ0xSmppCSyN0jO1qVA5EvZN2Jh1RU1BKLcSC1fVojj0P6k9sjryyIYdaREfm36PlbKmfQzgaHhGKrduGJbqigbN3sX5bxiBQKyuEmneKDbbFhxSYM1AFMgbimgTJzxaKDfBci3v4lujyZ2Unvux2Bx", // Make sure to set this environment variable
  useCdn: false,
  apiVersion: '2023-05-03',
});

const solutionIcons: { [key: string]: IconType } = {
  'automated-workflows-ai-integration-services': FaRobot,
  'data-driven-insights': FaChartLine,
  'reduced-costs-business-process-automation': FaPiggyBank,
  'seamless-expansion-scalable-cloud-infrastructure': FaCloud,
};
async function uploadSolutions() {
  for (const [slug, solution] of Object.entries(solutionsData)) {
    try {
      const doc = {
        _type: 'solution',
        title: solution.title,
        slug: { _type: 'slug', current: slug },
        shortDescription: solution.shortDescription,
        benefits: solution.benefits,
        contentHeader: solution.contentHeader,
        content: solution.content,
        icon: solutionIcons[slug] || 'FaRobot', // Provide a default icon if not found
        statValue: solution.statValue,
        statLabel: solution.statLabel,
        traditional: solution.traditional,
        aiPowered: solution.aiPowered,
      };

      // Check if the document already exists
      const existingDoc = await client.fetch(`*[_type == "solution" && slug.current == $slug][0]`, {
        slug,
      });

      if (existingDoc) {
        // Update existing document
        await client.patch(existingDoc._id).set(doc).commit();
        console.log(`Updated solution: ${slug}`);
      } else {
        // Create new document
        await client.create(doc);
        console.log(`Created solution: ${slug}`);
      }
    } catch (error) {
      console.error(`Error processing solution ${slug}:`, error);
    }
  }
}

uploadSolutions()
  .then(() => console.log('Finished uploading solutions'))
  .catch(console.error);
