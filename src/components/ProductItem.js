import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({  }) => (
  <div style={{ marginBottom: 20 }}>
    
    // should render a product (title, product, inventory)
    
    // should have a button with message 'Add to cart'
    
    // should call an action when button is clicked.
    
    // should disable the the button when the inventory is empty
    
    // should change the message on the button to 'Sold Out' when inventory is empty

    
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem