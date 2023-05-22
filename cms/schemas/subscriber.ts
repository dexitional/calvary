import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'subscriber',
  title: 'Subscribers',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email address',
      type: 'string',
    }),
  ],
})
