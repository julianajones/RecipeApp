import { defineField, defineType } from 'sanity'

export const recipeType = defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'ingredientSection',
          title: 'Ingredient Section',
          fields: [
            defineField({
              name: 'category',
              title: 'Category (optional)',
              type: 'string'
            }),
            defineField({
              name: 'items',
              title: 'Ingredients',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Ingredient Name',
                      type: 'string'
                    }),
                    defineField({
                      name: 'amount',
                      title: 'Amount',
                      type: 'string'
                    })
                  ]
                }
              ]
            })
          ]
        }
      ]
    }),
    defineField({
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'stepNumber',
              title: 'Step Number',
              type: 'number'
            }),
            defineField({
              name: 'description',
              title: 'Description of Step',
              type: 'text'
            })
          ]
        }
      ]
    }),
    defineField({
      name: 'image',
      title: 'Recipe Image',
      type: 'image'
    }),
    defineField({
      name: 'notes',
      title: 'Additional Notes',
      type: 'text'
    }),
    defineField({
      name: 'prepTime',
      title: 'Preparation Time',
      type: 'string'
    }),
    defineField({
      name: 'servings',
      title: 'Number of Servings',
      type: 'number'
    }),
    defineField({
      name: 'nutrition',
      title: 'Nutrition per Serving',
      type: 'object',
      fields: [
        defineField({
          name: 'calories',
          title: 'Calories',
          type: 'number'
        }),
        defineField({
          name: 'protein',
          title: 'Protein (g)',
          type: 'number'
        }),
        defineField({
          name: 'carbs',
          title: 'Carbohydrates (g)',
          type: 'number'
        }),
        defineField({
          name: 'fat',
          title: 'Fat (g)',
          type: 'number'
        })
      ]
    }),
    defineField({
      name: 'recipeType',
      title: 'Recipe Type',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Breakfast', value: 'breakfast' },
          { title: 'Lunch', value: 'lunch' },
          { title: 'Dinner', value: 'dinner' },
          { title: 'Snack', value: 'snack' },
          { title: 'Seasoning', value: 'seasoning' },
          { title: 'Shake', value: 'shake' },
          { title: 'Supplement', value: 'supplement' }
        ]
      }
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [
          { title: '1 Star', value: 1 },
          { title: '2 Stars', value: 2 },
          { title: '3 Stars', value: 3 }
        ]
      }
    })
  ]
})