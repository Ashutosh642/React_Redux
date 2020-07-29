import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({  }) => (
  // should render product title and its children 
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList