function formattedPrice(currencyCode, price) {
  if (currencyCode === 'USD') {
    return `$${price}`;
  }

  if (currencyCode === 'EUR') {
    return `€${price}`;
  }

  return `${price} ${currencyCode}`;
}

function setLevelClassName(quantity) {
  if (quantity <= 10) {
    return 'low';
  }

  if (quantity <= 20) {
    return 'medium';
  }

  if (quantity > 20) {
    return 'high';
  }
}

function ListItem( { item }) {
  return (
    <div className="item">
      <div className="item-image">
        <a href={ item.url }>
          <img src={ item.hasOwnProperty('MainImage') && item.MainImage.url_570xN } alt={ item.listing_id }></img>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{ item.title.length <= 50 ? item.title : item.title.slice(0, 50) + '...'}</p> 
        <p className="item-price">{ formattedPrice(item.currency_code, item.price) }</p>
        <p className={ `item-quantity level-${setLevelClassName(item.quantity)}` }>{ item.quantity } left</p>
      </div>
    </div>
  )
}

export default ListItem;
