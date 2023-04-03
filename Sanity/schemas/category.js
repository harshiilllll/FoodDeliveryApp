// schemas/category.js
export default {
    name: 'category',
    type: 'document',
    title: 'Menu Category',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        valitadion: (Rule) => Rule.required(),
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Category Image',
      }
    ],
  }
  