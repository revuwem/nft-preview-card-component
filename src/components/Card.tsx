interface ICardProps {}

const Card: React.FC<ICardProps> = () => {
  return (
    <section className="p-5 bg-blue-200 rounded-xl">
      <img
        src="/images/image-equilibrium.jpg"
        alt="Image of equilibrium"
        className="rounded-lg mb-5"
      />
      <h3 className="text-xl font-semibold mb-3">Equilibrium #3429</h3>
      <p className="text-base font-light mb-3">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex justify-between">
        <p className="text-base uppercase">0.041 ETH</p>
        <p className="text-base">3 days left</p>
      </div>
      <hr className="border-blue-300 my-3" />
      <div className="flex items-center gap-4">
        <img
          src="/images/image-avatar.png"
          alt="Image of author"
          className="max-w-[2rem] rounded-full border-white border-2"
        />
        <p className="text-sm">Creation of Jules Wyvern</p>
      </div>
    </section>
  );
};

export default Card;
