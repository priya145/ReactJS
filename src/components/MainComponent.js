import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
      
    };
  }
   
  /*renderDish(dish) {
        if (dish != null)
            return(
              <DishDetail detailDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                
            );
        else
            return(
                <div></div>
            );



            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        
        {this.renderDish(this.state.selectedDish)}
    }*/





  render() {
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route path = "/home" component={HomePage} />
        <Route exact path='/contactus' component={Contact} />
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
        <Redirect to="/home" />
        </Switch>
        
        <Footer />
            
      </div>
      
    );
  }
}

export default Main;
