export const Footer = () => {
  const currentHour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = currentHour <= 9 || currentHour >= 22 ? true : false;

  return (
    <footer>
      <div className="order mt-8 text-center">
        {isOpen && (
          <p>
            We are open untill {closeHour}:00 .Come visit us or order online.
          </p>
        )}
        <button className="my-8 p-4 bg-blue-600 text-white border-blue-500 rounded">
          Order Online
        </button>
      </div>
    </footer>
  );
};
