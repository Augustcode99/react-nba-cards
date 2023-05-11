const Card = ({ name, img, statistics }) => {
  return (
    <div className="border-4 border-solid border-zinc-700 grid place-content-center text-center ">
      <img className="w-80 h-96" src={img} alt={name} />
      <h2>{name}</h2>
      <p className="hidden">{statistics}</p>
    </div>
  );
};

export default Card;
