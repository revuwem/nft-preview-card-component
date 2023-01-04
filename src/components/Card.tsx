interface ICardProps {}

const Card: React.FC<ICardProps> = () => {
  return (
    <section>
      <img src="/images/image-equilibrium.jpg" alt="Image of equilibrium" />
      <h3 className="text-2xl font-semibold">Equilibrium #3429</h3>
      <p className="text-lg font-light">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <p className="text-lg uppercase">0.041 ETH</p>
      <p className="text-lg">3 days left</p>
      <img src="/images/image-avatar.png" alt="Image of author" />
      <p className="text-lg">Creation of Jules Wyvern</p>
    </section>
  );
};

export default Card;
