import './ProductCategoryRow.css';
export default function ProductCategoryRow({ category }) {
  return (
    <div className="category">
      <h3>{category}</h3>
    </div>
  );
}
