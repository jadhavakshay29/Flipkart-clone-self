import "./ViewAll.css";
import StarIcon from "@mui/icons-material/Star";
import { Button, Checkbox, Slider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { setProducts } from "../../../redux/actions/productActions";
import { Link } from "react-router-dom";

const ViewAll = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [catagory, setCatagory] = useState("");
  const [ratingThreeToFour, setRatingThreeToFour] = useState(false);
  const [ratingAboveFour, setRatingAboveFour] = useState(false);
  const [isCatagorySelected, setIsCatagorySelected] = useState(false);
  const [sliderValue, setSliderValue] = useState(100);

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = useCallback(async () => {
    const response = await axios
      .get(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
      )
      .catch((error) => {
        console.log("error", error);
      });
    // console.log(response.data);
    dispatch(setProducts(response.data));
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  //   console.log("products", products)
  let discount = Math.floor(Math.random() * 60 + 10); // 0 to 69

  const handleChange = (e) => {
    const catagoryValue = e.target.value;
    setCatagory(catagoryValue);
    if(catagoryValue === "men's clothing"){
      setIsCatagorySelected(e.target.checked);
    }
    if(catagoryValue === "women's clothing"){
      setIsCatagorySelected(e.target.checked);
    }
    if(catagoryValue === "jewelery"){
      setIsCatagorySelected(e.target.checked);
    }
    if(catagoryValue === "electronics"){
      setIsCatagorySelected(e.target.checked);
    }
  };

  const showAll =()=>{
    setFilteredProducts(products);
    setSliderValue(100); 
  }

  const handleRatingFilter = (e) => {
    const ratingValue = e.target.value;
    if (ratingValue >=3 && ratingValue<=4) {
      setRatingThreeToFour(e.target.checked);
    } else if (ratingValue > 4) {
      setRatingAboveFour(e.target.checked);
    }
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  useEffect(() => {
    let filtered = products;

    if (catagory !== "") {
      filtered = filtered.filter((prod) => prod);
    }
    if(isCatagorySelected){
       filtered = filtered.filter((prod)=> prod.category.includes(catagory));
    }
    
    if (ratingThreeToFour) {
      filtered = filtered.filter((prod) => prod.rating.rate >= 3 && prod.rating.rate < 4);
    }

    if (ratingAboveFour) {
      filtered = filtered.filter((prod) => prod.rating.rate >= 4);
    }

      // Apply price filter based on slider value
      filtered = filtered.filter((prod) => prod.price <= sliderValue);

    setFilteredProducts(filtered);
  }, [catagory, ratingThreeToFour, ratingAboveFour, products,isCatagorySelected, sliderValue]);

  return (
    <>
      <div className="profile-catagory">
        <ul>
          <li>Electronics</li>
          <li>TVs & Appliances</li>
          <li>Men</li>
          <li>Women</li>
          <li>Baby & Kids</li>
          <li>Home & Furniture</li>
          <li>Sports, Books & More</li>
          <li>Flights</li>
          <li>Offer Zone</li>
        </ul>
      </div>
      <div className="viewall-container">
        <div className="left-viewall-section">
          <div className="filter-text">
            <span>Filters</span>
          </div>
          <div className="catagories">
            <span>CATAGORIES</span>
            <ul>
              <li>
                <span>
                  <Button
                    type="checkbox"
                    variant="contained"
                    value="all"
                    onClick={showAll}
                    style={{cursor:"pointer",fontWeight:"700px"}}
                  >All</Button>
                </span>
                <span></span>
              </li>
              <li>
                <span>
                  <Checkbox
                    type="checkbox"
                    value="men's clothing"
                    onChange={handleChange}
                  />
                </span>
                <span>men's clothing</span>
              </li>
              <li>
                <span>
                  <Checkbox
                    type="checkbox"
                    value="women's clothing"
                    onChange={handleChange}
                  />
                </span>
                <span>women's clothing</span>
              </li>
              <li>
                <span>
                  <Checkbox
                    type="checkbox"
                    value="jewelery"
                    onChange={handleChange}
                  />
                </span>
                <span>jewelery</span>
              </li>
              <li>
                <span>
                  <Checkbox
                    type="checkbox"
                    value="electronics"
                    onChange={handleChange}
                  />
                </span>
                <span>electronics</span>
              </li>
            </ul>
          </div>
          <div className="catagpries-price catagories">
            <span>PRICE</span>
            <div>
              <Slider
                aria-label="Small steps"
                defaultValue={0}
                // getAriaValueText={valuetext}
                value={sliderValue}
                onChange={handleSliderChange}
                step={100}
                marks
                min={100}
                max={1000}
                valueLabelDisplay="auto"
                style={{
                  paddingBottom: "10px",
                  margin: "0 10px 15px 10px",
                  width: "80%",
                }}
              />
            </div>
          </div>
          <div className="catagories-ratings catagories">
            <span>CUSTOMER RATINGS</span>
            <ul>
              <li>
                <span>
                <Checkbox
                    type="checkbox"
                    value="3"
                    onChange={handleRatingFilter}
                />
                </span>
                <span>
                  3 <StarIcon style={{ fontSize: "16px" }} /> & above
                </span>
              </li>
              <li>  
                <span>
                <Checkbox
                    type="checkbox"
                    value="4"
                    onChange={handleRatingFilter}
                  />
                </span>
                <span>
                  4 <StarIcon style={{ fontSize: "16px" }} /> & above
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-viewall-section">

          {
          filteredProducts.map((item, index) => (
            <Link
              key={index}
              to={`/product/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="products-cards">
                <img src={item.image} alt="products" />
                <div className="cards-content">
                  <span>{item.title.substring(0, 66)}</span>
                  <p>
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>
                      ₹{item.price}
                    </span>
                    <span
                      style={{
                        color: "#878787",
                        textDecoration: "line-through",
                        margin: "0 10px",
                      }}
                    >
                      ₹{(item.price / (1 - discount / 100)).toFixed()}
                    </span>
                    <span style={{ color: "green", fontWeight: "600" }}>
                      {discount.toFixed()}% off
                    </span>
                  </p>
                  <span style={{ color: "green", fontWeight: "600" }}>
                    save extra ₹
                    {(item.price / (1 - discount / 100)).toFixed() -
                      item.price.toFixed()}
                  </span>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </>
  );
};

export default ViewAll;
