import React from 'react'
import { shallow } from 'enzyme'
import ProductsList from './ProductsList'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const setup = props => {
  const component = shallow(
    <ProductsList title={props.title}>{props.children}</ProductsList>
  )

  return {
    component: component,
    children: component.children().at(1),
    h3: component.find('h3')
  }
}

describe('ProductsList component', () => {
  it('should render title', () => {
    const { h3 } = setup({ title: 'Test Products' })
    expect(h3.text()).toMatch(/^Test Products$/)
  })

  it('should render children', () => {
    const { children } = setup({ title: 'Test Products', children: 'Test Children' })
    expect(children.text()).toMatch(/^Test Children$/)
  })
})