const ComplexCard = ({ complexDetails }) => {
  const { name, event, image, address, rating } = complexDetails;
  return (
    <div className="flex flex-row m-5  justify-around">
      <div className="flex flex-row ">
        <img className="max-w-[200px] rounded-lg" src={image} alt={name} />

        <div className="mx-5">
          <p className="text-lg font-bold text-black-500">{event}</p>
          <p className="text-2xl mb-2 py-2">{name}</p>
          <p className="text-black-400 mb-2">{address}</p>
          <span className="p-2 w-9 rounded-2xl border-gray-500 border">
            $500
          </span>
          <span className="p-2 ml-2 w-9 rounded-2xl border-gray-500 border">
            2HS
          </span>
        </div>
        <span className="self-center text-xl">{rating} ★</span>
      </div>
    </div>
  );
};

export default ComplexCard;

