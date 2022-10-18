import ListItem from './ListItem';

function Listing({ items }) {
  return (
    <div className="item-list">
      { items.filter(item => item.state === 'active')
        .map(item => <ListItem item={item} key={item.listing_id} />) }
    </div>
  )
}

export default Listing;
