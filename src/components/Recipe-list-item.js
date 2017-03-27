import React, { Component } from 'react';


class RecipeListItem extends Component {
  render() {
    const {ingredients} = this.props;
    if(!ingredients){
     return <div>Empty</div>
   }
  return (
      <div>
       <ul className="list-group">
         {ingredients.map((ingredients, idx)=> (
           <li key={idx} className="list-group-item">{ingredients}</li>
         ))}
       </ul>
      </div>
  )
  }
}

RecipeListItem.propTypes = {
  ingredients: React.PropTypes.array
};

export default RecipeListItem;
