import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'member',
  title: 'Members',
  type: 'document',
  fields: [
    defineField({
      name: 'first_name',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'middle_name',
      title: 'Middle Name',
      type: 'string',
    }),
    defineField({
      name: 'last_name',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'dob',
      title: 'Date of Birth',
      type: 'date',
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }), 
    defineField({
      name: 'email',
      title: 'E-mail Address',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'nationality',
      title: 'Nationality',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }), 
    defineField({
      name: 'marital',
      title: 'Marital Status',
      type: 'string',
    }),
    defineField({
      name: 'occupation',
      title: 'Occupation',
      type: 'string',
    }),
    defineField({
      name: 'member_id',
      title: 'Membership ID Number',
      type: 'string',
    }),
    defineField({
      name: 'card_type',
      title: 'Identification Type',
      type: 'string',
    }),
    defineField({
      name: 'card_no',
      title: 'Identification Number',
      type: 'string',
    }),
  ],
})
