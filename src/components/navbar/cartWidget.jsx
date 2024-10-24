import carrito from "../../assets/carrito.png"
import "./cartWidget.css"

const CartWidget = () => {
  return (
    <div className="cart">
        <img src={carrito} width={25} alt=""  />
        <p>0</p>
    </div>
  )
}

export default CartWidget