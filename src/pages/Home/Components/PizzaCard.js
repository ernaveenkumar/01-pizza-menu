export const PizzaCard = (props) => {
  console.log(props);
  return (
    <div
      /*className="border border-gray-300 flex flex-row gap-6 "*/
      className={`flex flex-row gap-6 w-9/12 min-w-80 mx-auto bg-white rounded-xl ${
        props.inStock ? 'shadow' : 'shadow-md'
      } overflow-hidden`}
      key={props.name}
    >
      <img
        src={props.photoUrl}
        alt={props.name}
        className={`h-48 w-48 rounded-md ${props.inStock ? 'grayscale' : ''}`}
      />
      <div
        className={`flex flex-col gap-0.5 ${
          props.inStock ? 'text-gray-400' : ''
        }`}
      >
        <h3 className="font-bold tracking-wider my-2">{props.name}</h3>
        <p className="italic font-light">{props.ingredients}</p>
        <p>
          <span className="font-bold">
            {props.inStock ? 'Sold out' : props.price}
          </span>
        </p>
      </div>
    </div>
  );
};
