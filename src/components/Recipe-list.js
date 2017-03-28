import React, {Component} from 'react';
import RecipeListItem from './Recipe-list-item'
import EditForm from './Edit-Form';
import { Button, ButtonToolbar, Col, Row, Image, Grid } from 'react-bootstrap';

class Recipelist extends Component {
  render() {
    const {recipes, deleterecipe,editrecipe} = this.props;
    return (
      <div className="list-group">
        {recipes.map((recipe, idx)=>(
          <a href="#" key={idx} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <Grid>
              <Row className="text-center">
              <h3 className="mb-1">{recipe.name}</h3>
              </Row>
              <Row className="show-grid">
                <Col xs={6}>
                  <RecipeListItem ingredients={recipe.ingredients}/>
                </Col>
                <Col xs={6}>
                  {/* <img alt="demo" src={"http://loremflickr.com/250/150/" + recipe.name} responsive/> */}
                   {/* <Image src="http://placehold.it/350x150" responsive /> */}
                   <Image src={"http://loremflickr.com/250/150/" + recipe.name} responsive />
                </Col>
              </Row>
              <br/>
              <Row className="show-grid">
                 <Col xs={2} xsOffset={10}>
                   <ButtonToolbar>
                     <EditForm
                       editrecipe={editrecipe}
                       recipe={recipe}
                     />
                     <Button onClick={()=>deleterecipe(recipe)} bsStyle="danger" bsSize="xsmall">Delete</Button>
                   </ButtonToolbar>
                 </Col>
               </Row>
               </Grid>
            </div>
          </a>
        ))}
      </div>
    )
  }
}

Recipelist.propTypes = {
  recipes: React.PropTypes.array,
  deleterecipe: React.PropTypes.func,
  editrecipe: React.PropTypes.func
};



export default Recipelist;
