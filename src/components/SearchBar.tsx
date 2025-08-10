import React from 'react'
import type { SearchFilters } from '../types/Property';


interface SearchBarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onSearch: () => void;
}

const SearchBar:React.FC<SearchBarProps> = ({ filters, onFiltersChange, onSearch }) => {
  return (
    <div>SearchBar</div>
  )
}

export default SearchBar