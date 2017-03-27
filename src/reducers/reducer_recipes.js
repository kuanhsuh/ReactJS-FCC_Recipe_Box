import {ADD_RECIPE, DELETE_RECIPE} from '../constants/ActionTypes'

const initialState = [
  {name: 'Veggie Soup', ingredients: ['Carrot', 'Beef', 'Water']},
  {name: 'Steak', ingredients: ['Steak', 'Pepper', 'Oil']},
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

    default:
      return state
  }
}
