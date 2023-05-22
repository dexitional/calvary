import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Menus',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
   defineField({
      name: 'link',
      title: 'URL Link',
      type: 'string',
    }),
    defineField({
      name: 'submenus',
      title: 'Sub Menus',
      type: 'array',
      of: [{type: 'reference', to: {type: 'menu'}}],
    }),
    defineField({
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
    }),
   
  ],
})
