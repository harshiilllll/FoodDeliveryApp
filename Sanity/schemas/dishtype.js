// schemas/dishtype.js
export default {
  name: 'dishtype',
  type: 'document',
  title: 'Dish Type',
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'Dish Type',
      valitadion: (Rule) => Rule.required(),
    },
  ],
}
