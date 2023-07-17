import "./CartItem.css";
import { Button, ButtonGroup } from "@mui/material";
import { addEllipsis } from "../../Utils/CommonUtils";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { removeFromCart } from "../../redux/actions/productActions";

const CartItem = ({ item, discount,onCountChange  }) => {

  const [count, setCount] = useState(1);

  //to calculte OriginalPrice on product
  const OriginalPrice = () => {
    let Oprice = item.price / (1 - discount / 100);
    // console.log(Oprice);
    return Oprice.toFixed();
  };

  const dispatch = useDispatch();
  //to remove items from cart on remove btn click
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    onCountChange(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
      onCountChange(count - 1);
    }
  };


  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <div className="cart-item-container">
      <div className="left-part">
        <img
          src={item.image}
          alt="product"
          style={{ height: "150px", width: "120px" }}
        />
        <ButtonGroup style={{ marginTop: "30px" }}>
          <Button onClick={handleDecrement}>-</Button>
          <Button disabled>{count}</Button>
          <Button onClick={handleIncrement}>+</Button>
        </ButtonGroup>
      </div>
      <div className="right-part">
        <p>{addEllipsis(item.title)}</p>
        <p className="seller">
          Seller: RetailNet
          <span>
            <img
              src={fassured}
              alt="logo"
              style={{ height: "15%", width: "15%", marginLeft: "10px" }}
            />
          </span>
        </p>
        <p>
          <span style={{ fontSize: 28, fontWeight: 600 }}>₹{item.price}</span>
          <span
            style={{
              color: "#878787",
              marginLeft: "10px",
              textDecorationLine: "line-through",
            }}
          >
            ₹{OriginalPrice()}
          </span>
          <span
            style={{ color: "#388E3C", marginLeft: "10px", fontWeight: 500 }}
          >
            {discount}% off
          </span>
        </p>
        <div></div>
        <Button onClick={() => removeItemFromCart(item.id)}>
          <span className="remove-btn">Remove</span>
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
