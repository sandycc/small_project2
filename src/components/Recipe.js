import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addShipping } from './actions/cartActions';
class Recipe extends Component{
    
    componentWillUnmount() {
         if(this.refs.shipping.submit)
              this.props.substractShipping()
    }

    handlesubmit = (e)=>{
        if(e.target.submit){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="button" ref="lanjut belanja" onChange= {this.handlesubmit} />
                                <span>tambah wishlist</span>
                            </label>
                        </li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn">beli sekarang</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)