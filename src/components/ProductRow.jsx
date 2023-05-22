import './ProductRow.css';

export default function ProductRow({ name, price, stocked }) {
  return (
    <>
      <tr>
        <td style={{ color: stocked ? 'black' : 'red' }}>{name}</td>
        <td className="price">{price}</td>
      </tr>
    </>
  );
}
