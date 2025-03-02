import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: '4aqh6cuk', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2024-01-04', // Use a specific date or the latest API version
  useCdn: false, // Set to `false` if you want fresh data for each query (e.g., in previews)
});

// Fetch all projects
export const fetchProjects = async () => {
  const query = `*[_type == "project"]{
    _id,
    title,
    slug,
    description,
    image{
      asset->{
        _id,
        url
      }
    },
    liveUrl,
    repoUrl,
    technologies,
    publishedAt
  } | order(publishedAt desc)`;

  return await sanityClient.fetch(query);
};

// Fetch all articles
export const fetchArticles = async () => {
  const query = `*[_type == "article"]{
    _id,
    title,
    slug,
    excerpt,
    content[]{
      ...,
      _type == "image" => {
        asset->{
          _id,
          url
        }
      }
    },
    mainImage{
      asset->{
        _id,
        url
      }
    },
    author->{
      name,
      image{
        asset->{
          _id,
          url
        }
      }
    },
    categories,
    publishedAt
  } | order(publishedAt desc)`;

  return await sanityClient.fetch(query);
};

// Fetch a single article by slug
export const fetchArticleBySlug = async (slug: string) => {
  const query = `*[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    content[]{
      ...,
      _type == "image" => {
        asset->{
          _id,
          url
        }
      },
      _type == "code" => {
        language,
        code
      }
    },
    mainImage{
      asset->{
        _id,
        url
      }
    },
    author->{
      name,
      image{
        asset->{
          _id,
          url
        }
      },
      bio
    },
    categories,
    publishedAt
  }`;

  return await sanityClient.fetch(query, { slug });
};

// Fetch all authors
export const fetchAuthors = async () => {
  const query = `*[_type == "author"]{
    _id,
    name,
    slug,
    bio,
    image{
      asset->{
        _id,
        url
      }
    },
    socialLinks
  }`;

  return await sanityClient.fetch(query);
};

// Fetch a single author by slug
export const fetchAuthorBySlug = async (slug: string) => {
  const query = `*[_type == "author" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    bio,
    image{
      asset->{
        _id,
        url
      }
    },
    socialLinks
  }`;

  return await sanityClient.fetch(query, { slug });
};