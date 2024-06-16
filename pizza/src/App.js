import './App.css';

function App() {
  const pizza_list = [
    {
      name: "Margherita",
      ingredients: "Tomato Sauce, Mozzarella, Basil",
      price: "$8.99",
      photo: "https://theorganisedhousewife.com.au/wp-content/uploads/2020/03/pizza-or-flatbread-with-salami-cheese-263x175.jpg",
      IsSold: false
    },
    {
      name: "Pepperoni",
      ingredients: "Tomato Sauce, Mozzarella, Pepperoni",
      price: "$9.99",
      photo: "https://theorganisedhousewife.com.au/wp-content/uploads/2020/03/pizza-or-flatbread-with-salami-cheese-263x175.jpg",
      IsSold: false
    },
    {
      name: "BBQ Chicken",
      ingredients: "BBQ Sauce, Mozzarella, Chicken, Red Onions, Cilantro",
      price: "$11.99",
      photo: "https://theorganisedhousewife.com.au/wp-content/uploads/2020/03/pizza-or-flatbread-with-salami-cheese-263x175.jpg",
      IsSold: true
    }
    ,
    {
      name:"Hawaiian",
    ingredients:"Tomato Sauce, Mozzarella, Ham, Pineapple",
    price:"$10.99",
    photo:"https://theorganisedhousewife.com.au/wp-content/uploads/2020/03/pizza-or-flatbread-with-salami-cheese-263x175.jpg",
    IsSold:true
    },
    {
      name:"Veggie",
      ingredients:"Tomato Sauce, Mozzarella, Bell Peppers, Olives, Onions, Mushrooms",
      price:"$10.49",
      photo:"https://theorganisedhousewife.com.au/wp-content/uploads/2020/03/pizza-or-flatbread-with-salami-cheese-263x175.jpg",
      IsSold:false
    },
    {
      name:"Meat Lover's",
    ingredients:"Tomato Sauce, Mozzarella, Pepperoni, Sausage, Ham, Bacon",
    price:"$12.49",
    photo:"https://theorganisedhousewife.com.au/wp-content/uploads/2020/03/pizza-or-flatbread-with-salami-cheese-263x175.jpg",
    IsSold:true
    },
    {
      name: "BBQ Chicken",
      ingredients: "BBQ Sauce, Mozzarella, Chicken, Red Onions, Cilantro",
      price: "$11.99",
      photo: "https://theorganisedhousewife.com.au/wp-content/uploads/2020/03/pizza-or-flatbread-with-salami-cheese-263x175.jpg",
      IsSold: true
    },
    {
      name: "BBQ Chicken",
      ingredients: "BBQ Sauce, Mozzarella, Chicken, Red Onions, Cilantro",
      price: "$11.99",
      photo: "https://theorganisedhousewife.com.au/wp-content/uploads/2020/03/pizza-or-flatbread-with-salami-cheese-263x175.jpg",
      IsSold: true
    }
    
  ];

  return (
    <div>
      <Header />
      <Pizza />
      <div className="pizza-list-container">
        {pizza_list.map((pizza, index) => (
          <Pizzalist 
            key={index}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            pic={pizza.photo}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

function Pizzalist(props) {
  return (
    <div className="pizza-list">
      <img src={props.pic} alt={props.name} />
      <h1>{props.name}</h1>
      <p>{props.ingredients}</p>
      <p className="price">{props.price}</p>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1 className="heading">React Pizza</h1>
    </div>
  );
}

function Pizza() {
  return (
    <div className="pizza">
      <h2 className="p-heading">OUR MENU</h2>
      <p className="p-para">Ever looked at Pizza Toppings and wondered, "WHY SO LESS"?
      we made the pizzas that we all deserve - PIZZAS</p>
    </div>
  );
}

function Footer() {
  const hour=new Date().getHours();
  const openHour=12;
  const closeHour=22;
  const isOpen=hour>=openHour && hour <=closeHour;
  console.log(isOpen);
  return (
    <div className="footer">
      {isOpen &&(
        <div className="order">
          <p>We'r open until {closeHour}:00.Come visit us or order online. </p>
          <button className="btn">Order</button>
        </div>
      )}
      <p>&copy; 2024 React Pizza. All rights reserved.</p>
    </div>
  );
}

export default App;
