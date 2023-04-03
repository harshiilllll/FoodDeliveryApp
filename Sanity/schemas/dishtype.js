// schemas/dishtype.js
export default {
  name: 'dishType',
  type: 'document',
  title: 'Dish Type',
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'Dish Type',
      valitadion: (Rule) => Rule.required(),
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
}
