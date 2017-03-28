import {ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE} from '../constants/ActionTypes'

const initialState = [
  {name: 'Sushi', ingredients: ['3 tablespoons rice vinegar', '4 sheets nori (dry seaweed)', '1/2 cucumber, sliced into thin strips']},
  {name: 'Chicken Pie', ingredients: ['1 lb skinless, boneless chicken breast', '1 cup sliced carrots', '1 cup frozen green peas', '1/2 cup sliced celery']},
  {name: 'Stripe Steak', ingredients: ['4 (1/2 pound) strip steaks', 'Salt', 'Pepper', '1 teaspoon Mustard', '3 tablespoon lemon juice']},
];


export default function(state = initialState, action){
  switch (action.type) {
    case ADD_RECIPE:
      return [
        ...state
        ,
        {
        name: action.recipe.name,
        ingredients: action.recipe.ingredients
        }
      ]
    case DELETE_RECIPE:
      return state.filter(recipe =>
        recipe.name !== action.recipe.name
      )
    case EDIT_RECIPE:
      return state.map(recipe =>
        recipe.name === action.recipe.name ?
          {
          name: action.recipe.name,
          ingredients: action.recipe.ingredients
        } :
        recipe
      )

    default:
      return state
  }
}
