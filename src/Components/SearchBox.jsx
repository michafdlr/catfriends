import PropTypes from 'prop-types';

const SearchBox = ({searchChange}) => {
  return (
    <>
      <input className='justify-center h-10 w-44 border-4 border-orange rounded-xl my-8'
      placeholder='Search'
      type='search'
      onChange={searchChange}
      />
    </>
  )
}

SearchBox.propTypes = {
  searchChange: PropTypes.func.isRequired
};

export default SearchBox;
