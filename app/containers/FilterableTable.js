import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import ProductTable from '../components/ProductTable';
import { filterableTable } from '../styles/filterableTable.scss';

const FilterableTable = ({ filter, onFilter }) => {
  let input;

  return (
    <div className={filterableTable}>
      <input
        value={filter}
        ref={node => {input = node;}}
        onChange={() => onFilter(input.value)} />

      <ProductTable filter={filter} />
    </div>
  );
};

FilterableTable.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
  api: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: filterText => dispatch(actions.filterTable(filterText))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterableTable);
