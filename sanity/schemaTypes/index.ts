import { type SchemaTypeDefinition } from 'sanity'
import article from './article'
import author from './author'
import project from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, author, project],
}