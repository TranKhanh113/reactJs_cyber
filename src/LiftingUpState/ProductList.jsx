import React, { Component } from 'react'
import Product from './Product';
export default class ProductList extends Component {
    renderProList = () => {
        return this.props.proList1.map((item, index) => {
            return <div className="col-sm-4" key={index}>
                <Product handleSelectPro={this.props.handleSelectPro} item={item} handleBuy={this.props.handleBuy} />
            </div>
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderProList()}
            </div>
        )
    }
}
