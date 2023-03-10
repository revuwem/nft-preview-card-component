interface ICardProps {}

const Card: React.FC<ICardProps> = () => {
  return (
    <section className="max-w-sm p-5 pb-7 bg-blue-200 rounded-xl">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src="images/image-equilibrium.jpg"
          alt="Image of equilibrium"
          className="max-h-[20rem] w-full object-cover"
        />
        <a
          href="#"
          className="opacity-0 hover:opacity-100 bg-cyan/[.6] w-full h-full absolute inset-0 grid place-items-center transition"
        >
          <img src="images/icon-view.svg" alt="View" />
        </a>
      </div>
      <h3 className="text-base lg:text-xl font-semibold mb-3">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan transition"
        >
          Equilibrium #3429
        </a>
      </h3>
      <p className="text-base lg:text-lg font-light text-blue-400 mb-3">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex justify-between">
        <div className="grid grid-flow-col place-items-center gap-1.5">
          <img src="images/icon-ethereum.svg" alt="" />
          <p className="text-base lg:text-lg font-semibold uppercase text-cyan">
            0.041 ETH
          </p>
        </div>
        <div className="grid grid-flow-col place-items-center gap-1.5">
          <img src="images/icon-clock.svg" alt="" />
          <p className="text-base lg:text-lg text-blue-400">3 days left</p>
        </div>
      </div>
      <hr className="border-blue-300 my-3" />
      <div className="flex items-center gap-4">
        <img
          src="images/image-avatar.png"
          alt="Image of author"
          className="max-w-[2rem] rounded-full border-white border-2"
        />
        <p className="text-sm lg:text-base text-blue-400">
          Creation of{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan transition"
          >
            Jules Wyvern
          </a>
        </p>
      </div>
    </section>
  );
};

export default Card;
