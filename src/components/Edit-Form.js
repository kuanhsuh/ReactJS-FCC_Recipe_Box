// eslint-disable-next-line
import React, { Component,PropTypes } from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';


class EditForm extends Component {
  constructor(props) {
    super(props);
    const {name, ingredients} = props.recipe;
    this.state = {
      showModal: false,
      recipe: {
        name: name,
        ingredients:ingredients.join(", ")
      }
    };

  }

  close = ()=>{
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  changeRecipe = (e) => {
    const recipe = this.state.recipe
    recipe.name = e.target.value
    this.setState({ recipe: recipe})
  }
  changeIngredient = (e) => {
    const recipe = this.state.recipe
    recipe.ingredients = e.target.value
    this.setState({ recipe: recipe})
  }

  handleSave = () => {
    const recipe = this.state.recipe;
    recipe.ingredients = recipe.ingredients.split(",")
    this.props.editrecipe(recipe)
    this.setState({
      showModal: false
    })
  }
  render() {
    const { name, ingredients } = this.state.recipe;
    // eslint-disable-next-line
    const { formaction, style, size } = this.props;


    return (
      <div>
        <Button
          bsStyle="default"
          bsSize="xsmall"
          onClick={this.open}
        >
          Edit
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit a Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <h5>Enter Recipe</h5>
              <FormControl
                type="text"
                placeholder="Enter recipe"
                value={name}
                onChange={this.changeRecipe}
              />
              <h5>Enter Ingredients</h5>
              <FormControl
                type="text"
                placeholder="Enter Ingredients(separated with commas)"
                value={ingredients}
                onChange={this.changeIngredient}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="danger" bsSize="small" onClick={this.handleSave}>
              Save Edit
            </Button>
            <Button bsStyle="default" bsSize="small" onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

EditForm.propTypes = {
  editrecipe: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
}


export default EditForm;
