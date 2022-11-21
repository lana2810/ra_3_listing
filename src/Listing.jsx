import React from "react";
function Listing({ items = {} }) {
  const handleTitle = (title) => {
    let result;
    if (title) {
      result = title.length <= 50 ? title : `${title.slice(0, 49)}...`;
    } else {
      result = null;
    }
    return result;
  };
  const handlePrice = (price, currency) => {
    switch (currency) {
      case "USD":
        return `$${price}`;
      case "EUR":
        return `€${price}`;
      default:
        return `${price}${currency}`;
    }
  };
  const handleClassQuantity = (value) => {
    const low = (val) => val <= 10 && val;
    const medium = (val) => val > 10 && val <= 20 && val;
    const high = (val) => val > 20 && val;
    let result;
    switch (value) {
      case low(value):
        result = `item-quantity level-low`;
        break;
      case medium(value):
        result = `item-quantity level-medium`;
        break;
      case high(value):
        result = `item-quantity level-high`;
        break;
      default:
        break;
    }
    return result;
  };
  return (
    <>
      {items.map(
        (item) =>
          item.state === "active" && (
            <div key={item.listing_id} className="item">
              <div className="item-image">
                <a href={item.url}>
                  {item.MainImage && (
                    <img src={item.MainImage.url_570xN} alt="" />
                  )}
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{handleTitle(item.title)}</p>
                <p className="item-price">
                  {item.price &&
                    item.currency_code &&
                    handlePrice(item.price, item.currency_code)}
                </p>
                <p className={handleClassQuantity(item.quantity)}>
                  {item.quantity}
                </p>
              </div>
            </div>
          )
      )}
    </>
  );
}

export default Listing;
