import { type SchemaTypeDefinition } from 'sanity';

const post: SchemaTypeDefinition = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
};

const author: SchemaTypeDefinition = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};

const category: SchemaTypeDefinition = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};

const gatedAsset: SchemaTypeDefinition = {
  name: 'gatedAsset',
  title: 'Gated Asset',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'teaserContent',
      title: 'Teaser Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'assetFile',
      title: 'Asset File',
      type: 'file',
    },
  ],
};

const service: SchemaTypeDefinition = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'text' },
            { name: 'icon', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'videoSrc',
      title: 'Video Source',
      type: 'url',
    },
    {
      name: 'thumbnailSrc',
      title: 'Thumbnail Source',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'hoverDescription',
      title: 'Hover Description',
      type: 'string',
    },
  ],
};

const solution: SchemaTypeDefinition = {
  name: 'solution',
  title: 'Solution',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contentHeader',
      title: 'Content Header',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'text' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'statValue',
      title: 'Stat Value',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'statLabel',
      title: 'Stat Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'traditional',
      title: 'Traditional Approach',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'aiPowered',
      title: 'AI-Powered Approach',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};

const technologyUsed: SchemaTypeDefinition = {
  name: 'technologyUsed',
  title: 'Technology Used',
  type: 'object',
  fields: [
    { name: 'name', type: 'string', title: 'Technology Name' },
    {
      name: 'icon',
      type: 'image',
      title: 'Technology Icon',
      options: {
        hotspot: true,
      },
    },
  ],
};

const newSolution: SchemaTypeDefinition = {
  name: 'newSolution',
  type: 'document',
  title: 'New Solution',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroTitle',
      type: 'string',
      title: 'Hero Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroSubtitle',
      type: 'string',
      title: 'Hero Subtitle',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'problemTitle',
      type: 'string',
      title: 'Problem Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'problemDescription',
      type: 'text',
      title: 'Problem Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'problemVideo',
      type: 'file',
      title: 'Problem Video',
      options: {
        accept: 'video/*'
      }
    },
    {
      name: 'stepsTitle',
      type: 'string',
      title: 'Steps Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'steps',
      type: 'array',
      title: 'Steps',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Step Title' },
            { name: 'description', type: 'text', title: 'Step Description' },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'featuresTitle',
      type: 'string',
      title: 'Features Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'features',
      type: 'array',
      title: 'Key Features',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'feature', type: 'string', title: 'Feature' },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'technologiesUsedTitle',
      type: 'string',
      title: 'Technologies Used Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'technologiesUsed',
      type: 'array',
      title: 'Technologies Used',
      of: [{ type: 'technologyUsed' }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'ctaTitle',
      type: 'string',
      title: 'Call to Action Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ctaButton',
      type: 'string',
      title: 'CTA Button Text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'kpi',
      type: 'string',
      title: 'KPI Statement',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Font Awesome Icon',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    },
  ],
};

const newService: SchemaTypeDefinition = {
  name: 'newService',
  type: 'document',
  title: 'New Service',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Service Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'solutions',
      type: 'array',
      title: 'Solutions',
      of: [{ type: 'reference', to: [{ type: 'newSolution' }] }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'heroTitle',
      type: 'string',
      title: 'Hero Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroSubtitle',
      type: 'string',
      title: 'Hero Subtitle',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'introductionTitle',
      type: 'string',
      title: 'Introduction Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'introductionDescription',
      type: 'text',
      title: 'Introduction Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'introductionVideo',
      type: 'file',
      title: 'Introduction Video',
      options: {
        accept: 'video/*'
      }
    },
    {
      name: 'steps',
      type: 'array',
      title: 'Service Steps',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Step Title' },
            { name: 'description', type: 'text', title: 'Step Description' },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'keyFeatures',
      type: 'array',
      title: 'Key Features',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'feature', type: 'string', title: 'Feature' },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'technologiesUsed',
      type: 'array',
      title: 'Technologies Used',
      of: [{ type: 'technologyUsed' }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'whyChooseUs',
      type: 'text',
      title: 'Why Choose Us Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ctaTitle',
      type: 'string',
      title: 'CTA Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ctaButton',
      type: 'string',
      title: 'CTA Button Text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    gatedAsset,
    service,
    solution,
    newService,
    newSolution,
    technologyUsed
  ],
};
