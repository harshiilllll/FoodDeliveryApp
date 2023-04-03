// schemas/restaurant.js
export default {
  name: 'restaurant',
  type: 'document',
  title: 'Restaurant',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      valitadion: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Restaurant Image',
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'latitude',
      type: 'number',
      title: 'Latitude of the restaurant',
    },
    {
      name: 'longitude',
      type: 'number',
      title: 'Longitude of the restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address of the restaurant',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating of the restaurant',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter a rating between 1 and 5'),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
}
