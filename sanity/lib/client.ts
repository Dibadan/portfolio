import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  stega: {
    enabled: process.env.VERCEL_ENV === 'preview',
    studioUrl: '/studio',
  },
})