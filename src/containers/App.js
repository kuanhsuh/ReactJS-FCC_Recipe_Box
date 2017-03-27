import React, { Component, PropTypes } from 'react';
import Recipelist from '../components/Recipe-list';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RecipeActions from '../actions/index';
import {Grid} from 'react-bootstrap';

class App extends Component {
  render() {
    console.log(this.props)

    const {actions, recipes} = this.props;

    return (
      <Grid>
        <Recipelist
          recipes={recipes}
          deleterecipe={actions.deleteRecipe}
        />
        <Footer addrecipe={actions.addRecipe}/>
      </Grid>

    );
  }
}
App.propTypes = {
  actions: PropTypes.object.isRequired,
  recipes: React.PropTypes.array
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(RecipeActions, dispatch)
})

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
