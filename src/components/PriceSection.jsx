import {
  priceSectionWrapper,
  priceSectionTitle,
  priceSectionList,
  priceSectionCart,
  priceSectionCartTitle,
  priceSectionCartInformation,
  priceSectionCartOff,
  priceSectionCartTag,
  priceSectionCartBtn,
  priceSectionCartLink,
} from "../helpers/style";

const pricingCart = [
  {
    title: "six month",
    information: "rm 810",
    off: "10% save",
    link: "#",
  },
  {
    title: "one year",
    information: "rm 1,350",
    off: "25% save",
    link: "#",
    popular: "Most Popular",
  },
  {
    title: "one month",
    information: "rm 150",
    off: "0% save",
    link: "#",
  },
];

const PriceSection = () => {
  const cartList = pricingCart.map((cart, index) => (
    <div key={index} style={{ width: "400px" }}>
      {cart.popular ? (
        <div>
          <span style={priceSectionCartTag}>{cart.popular}</span>
        </div>
      ) : (
        <div style={{ height: "65px" }}></div>
      )}
      <div style={priceSectionCart}>
        <h4 style={priceSectionCartTitle}>{cart.title}</h4>
        <p style={priceSectionCartInformation}>{cart.information}</p>
        <p style={priceSectionCartOff}>{cart.off}</p>
        <button style={priceSectionCartBtn}>
          <a href={cart.link} style={priceSectionCartLink}>
            get started
          </a>
        </button>
      </div>
    </div>
  ));

  return (
    <section style={priceSectionWrapper}>
      <h3 style={priceSectionTitle}>Pricing</h3>
      <div style={priceSectionList}>{cartList}</div>
    </section>
  );
};
export default PriceSection;
