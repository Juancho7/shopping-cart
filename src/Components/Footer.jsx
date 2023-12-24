// import { useCart } from '../hooks/useCart.js'
// import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
  // const { filters } = useFilters()
  // const { cart } = useCart()

  return (
    <footer className='footer'>
      {/* {
            JSON.stringify(filters, null, 2)
        } */}
      {/*
          JSON.stringify(cart, null, 2)
      */}
      <h4>React Technical Test</h4>
      <span>@Juancho7</span>
      <h5>Shopping Cart with useContext & useReducer</h5>
    </footer>
  )
}
