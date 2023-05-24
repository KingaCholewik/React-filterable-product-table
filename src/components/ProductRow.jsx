import './ProductRow.css';

export default function ProductRow({ name, price, stocked, onButtonClick }) {
  const handleClick = (e) => {
    onButtonClick(e);
  };
  return (
    <div className="productRow">
      <span style={{ color: stocked ? 'black' : 'red' }}>{name}</span>
      <span className="price">{price}</span>

      <button className="deleteButton" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}
