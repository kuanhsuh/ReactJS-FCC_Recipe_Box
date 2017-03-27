import React, {Component} from 'react';
import RecipeListItem from './Recipe-list-item'
import { Button, ButtonToolbar, Col, Row } from 'react-bootstrap';

class Recipelist extends Component {
  render() {
    const {recipes, deleterecipe} = this.props;
    return (
      <div className="list-group">
        {recipes.map((recipe, idx)=>(
          <a href="#" key={idx} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <Row className="show-grid">
                <Col xs={6}>
                  <h5 className="mb-1">{recipe.name}</h5>
                  <RecipeListItem ingredients={recipe.ingredients}/>
                </Col>
                <Col xs={6}>
                  <img alt="demo" src="http://placehold.it/150x150" />
                </Col>
              </Row>
              <Row className="show-grid">
                 <Col xs={2} xsOffset={10}>
                   <ButtonToolbar>
                     <Button bsStyle="default" bsSize="xsmall">Edit</Button>
                     <Button onClick={()=>deleterecipe(recipe)} bsStyle="danger" bsSize="xsmall">Delete</Button>
                   </ButtonToolbar>
                 </Col>
               </Row>
            </div>
          </a>
        ))}
      </div>
    )
  }
}

Recipelist.propTypes = {
  recipes: React.PropTypes.array,
  deleterecipe: React.PropTypes.func
};


export default Recipelist;
