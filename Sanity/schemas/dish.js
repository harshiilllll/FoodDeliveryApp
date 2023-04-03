// schemas/dish.js
export default {
  name: 'dish',
  type: 'document',
  title: 'Dish',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of dish',
      valitadion: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'text',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of the dish',
      validation: (Rule) => Rule.required(),
    },
    {
        name: 'image',
        type: 'image',
        title: 'Image of the dish',
    }
  ],
}
