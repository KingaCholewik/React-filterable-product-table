import './SearchBar.css';
export default function SearchBar({
  showProductsOnStock,
  setShowProductsOnStock,
  setSearchText,
}) {
  return (
    <form className="searchForm">
      <div className="search">
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <label htmlFor="stock">
        <input
          type="checkbox"
          id="stock"
          onChange={() => setShowProductsOnStock(!showProductsOnStock)}
        />{' '}
        Only show products in stock
      </label>
    </form>
  );
}
