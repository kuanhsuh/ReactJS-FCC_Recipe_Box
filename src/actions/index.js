import * as types from '../constants/ActionTypes'

export const addRecipe = recipe => ({ type: types.ADD_RECIPE, recipe })
export const deleteRecipe = recipe => ({ type: types.DELETE_RECIPE, recipe })
