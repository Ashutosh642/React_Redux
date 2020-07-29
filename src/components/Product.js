import React from 'react'
import PropTypes from 'prop-types'

const Product = ({  }) => (
  // product component should render title and price
  // It should render title, price and quantity when given inventory
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
