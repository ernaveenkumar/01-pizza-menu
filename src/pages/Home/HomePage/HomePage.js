import { PizzaCard } from '../Components/PizzaCard';

export const HomePage = () => {
  const pizzaData = [
    {
      name: 'Focaccia',
      ingredients: 'Bread with italian olive oil and rosemary',
      price: 6,
      photoName: './assets/img/focaccia.jpg',
      soldOut: false,
    },
    {
      name: 'Pizza Margherita',
      ingredients: 'Tomato and mozarella',
      price: 10,
      photoName: './assets/img/margherita.jpg',
      soldOut: false,
    },
    {
      name: 'Pizza Spinaci',
      ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
      price: 12,
      photoName: './assets/img/spinaci.jpg',
      soldOut: false,
    },
    {
      name: 'Pizza Funghi',
      ingredients: 'Tomato, mozarella, mushrooms, and onion',
      price: 12,
      photoName: './assets/img/funghi.jpg',
      soldOut: false,
    },
    {
      name: 'Pizza Salamino',
      ingredients: 'Tomato, mozarella, and pepperoni',
      price: 15,
      photoName: './assets/img/salamino.jpg',
      soldOut: true,
    },
    {
      name: 'Pizza Prosciutto',
      ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
      price: 18,
      photoName: './assets/img/prosciutto.jpg',
      soldOut: false,
    },
  ];
  const pizzaDataLength = pizzaData.length;
  return (
    <>
      <div className="flex flex-col menu-head items-center">
        <h1 className="w-3/6  text-center text-teal-700 py-4 font-bold text-xl border border-l-white border-r-white border-t-orange-200 border-b-orange-100">
          Our Menu
        </h1>
        <p className="text-center text-teal-600 pt-2 pb-5 text-lg">
          Authentic Italian cusine.6 creative dishes to choose from.All from our
          stone oven, all organic, all delicious.
        </p>
      </div>
      <div className="pizzaItem mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-2">
        {pizzaDataLength > 0 ? (
          pizzaData.map((item) => (
            <PizzaCard
              name={item.name}
              ingredients={item.ingredients}
              photoUrl={item.photoName}
              price={item.price}
              inStock={item.soldOut}
            />
          ))
        ) : (
          <p className="mt-2">
            We are still working on our menu. Please come back to see our
            updated menu
          </p>
        )}
      </div>
    </>
  );
};
