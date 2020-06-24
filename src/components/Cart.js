import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
import Recipe from './Recipe';
class Cart extends Component{

 
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAdd= (id)=>{
        this.props.add(id);
    }
    //to substruct from the quantity
    handleSubtractQ = (id)=>{
        this.props.subtract(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAdd(item.id)}}>arrow_drop_up</i></Link>//
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtract(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn orange remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" ><button><i className="material-icons " data-toggle="modal" data-target="#myModal">add</i></span></button>

                                    </div>
                                    
                                </li>
                                <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

                         
                    )
                })
            ):

             (
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Recipe />          
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        add: (id)=>{dispatch((id))},
        subtract: (id)=>{dispatch((id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)