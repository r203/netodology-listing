const Listing = ({ items = [] }) => {

  const kitcut = (text = '', limit = 0) => {
    text = text.trim();
    if (text.length <= limit) return text;
    text = text.slice(0, limit);
    let lastSpace = text.lastIndexOf(" ");

    if (lastSpace > 0) {
      text = text.substr(0, lastSpace);
    }

    return text + "...";
  }

  const currencySign = (currency_code, price) => {
    if(isNaN(price)) {
      return null;
    }
    switch (currency_code) {
      case 'USD':
        return '$' + price;
      case 'EUR':
        return '€' + price;
      case 'GBP':
        return price + 'GBP';
      default:
        return currency_code + price;
    }
  }

  const getLevelClass = (quantity) => {
    if(quantity <= 10) {
      return 'level-low'
    }
    if(quantity <= 20) {
      return 'level-medium'
    }
    return 'level-high'
  }

  return (
    <div className="item-list">
      {items.map((item) => {
        return (
          <div className="item" key={item.listing_id.toString()}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item?.MainImage?.url_570xN} alt={item.title} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{kitcut(item.title, 50)}</p>
              <p className="item-price">{currencySign(item.currency_code, item.price)}</p>
              <p className={`item-quantity ${getLevelClass(item.quantity)}`}>{item.quantity} left</p>
            </div>
          </div>
        )
      })}
    </div >
  )
}

export default Listing;

// item.MainImage.url_570xN