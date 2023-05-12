import React, { useState } from 'react';
import { IProduct } from '../Interfaces/Interfaces';
import "./SearchFilter.css"
import { Link } from 'react-router-dom';

interface SearchFilterProps {
  products: IProduct[];
}

const SearchFilter: React.FC<SearchFilterProps> = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState<IProduct[]>([]); 

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = products.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const displayData = searchQuery === '' ? products : filteredData;

  return (
    <div>
      <input
        type="text"
        placeholder="Sök..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="product-field">
        {displayData.map((item) => (
          <div key={item.title} className="product-card">
            <Link to={`/products/${item.title}`}>
              <img className="product-img" src={item.imageUrl}></img>
            </Link>
            <p className="product-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
