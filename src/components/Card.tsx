interface ICardProps {}

const Card: React.FC<ICardProps> = () => {
  return (
    <section>
      <img src="/images/image-equilibrium.jpg" alt="Image of equilibrium" />
      <h3>Equilibrium #3429</h3>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <p>0.041 ETH</p>
      <p>3 days left</p>
      <img src="/images/image-avatar.png" alt="Image of author" />
      <p>Creation of Jules Wyvern</p>
    </section>
  );
};

export default Card;
