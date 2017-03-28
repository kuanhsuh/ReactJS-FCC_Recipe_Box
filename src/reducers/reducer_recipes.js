import {ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE} from '../constants/ActionTypes'

const initialState = [
  {name: 'Veggie Soup', ingredients: ['Carrot', 'Beef', 'Water']},
  {name: 'Steak', ingredients: ['Carrot', 'Beef', 'Pepper']},
  {name: 'Grilled Chicken', ingredients: ['Chicken', 'Salt', 'Water']},
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
