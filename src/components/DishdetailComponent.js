import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component
{
	constructor(props) {
        super(props);
        
    }

	render()
	{
		const dishcomments = this.props.detailDish.comments.map((comment) => {

        if(comment != null) {
            return (
                <div key={comment.id}>
                <ul class="list-unstyled">
                        <li>{comment.comment}</li>
                      <li>--{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                   
                
    
            </ul>
                    
                </div>
            );        
        }
        else {
            return (
                <div></div>
            )
        }
      });
              

		return(
    <div className="container">
			<div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    	<Card>
                    		<CardImg top src={this.props.detailDish.image} alt={this.props.detailDish.name} />
                    		<CardBody>
                      			<CardTitle>{this.props.detailDish.name}</CardTitle>
                      			<CardText>{this.props.detailDish.description}</CardText>
                    		</CardBody>
                		</Card>
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                      <h3>Comments</h3>
                    	{dishcomments}
                  </div>
                  
            </div>
				</div>
			)
	}
}
export default DishDetail;