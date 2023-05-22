import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'message',
  title: 'Greeting',
  type: 'document',
  fields: [
    defineField({
      name: 'message',
      title: 'Greeting',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'URL Resource',
      type: 'string',
    }),
  ],
})
