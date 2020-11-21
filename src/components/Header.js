import React,{useEffect} from "react";
import { filterTypes, sortTypes, dateTypes } from "./../types/filterTypes";

export default function Header(props) {
  const [filterValue, setFilterValue] = React.useState(filterTypes.NA);
  const [sortType, setSortType] = React.useState();
  const [fromDate, setFromDate] = React.useState();
  const [toDate, setToDate] = React.useState();
  const [isSortFilter, setIsSortFilter] = React.useState(false);
  const [isDateFilter, setIsDateFilter] = React.useState(false);
  const handleChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    setSortType("");
    if (value === filterTypes.NA) {
      setIsDateFilter(false);
      setIsSortFilter(false);
      return;
    }
    if (value === filterTypes.DATE) {
      setIsDateFilter(true);
      setIsSortFilter(false);
    } else {
      setIsDateFilter(false);
      setIsSortFilter(true);
    }
  };
  const handleSortFilterChange = (event) => {
    const value = event.target.value;
    setSortType(value);
    props.onFilterChange(filterValue, value);
  };
  const onDateChange = (event) => {
    const value = event.target.value;
    if (event.target.name === dateTypes.FROM_DATE) {
        setFromDate(value);
    }
    else{
        setToDate(value);
    }
  };
  useEffect(() => {
      if(fromDate && toDate){
        props.onFilterChange(filterValue,fromDate,toDate)
      }
  }, [fromDate,toDate])

  const resetClickHandler = () =>{
      setIsDateFilter(false);
      setIsSortFilter(false);
      setFilterValue(filterTypes.NA);
      props.onResetClick();
  }
  return (
    <div className="header-conatainer">
      <div className="user-title">
        <h2>Twitter Rubic</h2>
      </div>
      <div className="user-filter">
        <div className="filter-type">
          <div className="filter-label">Apply Filter</div>
          <select value={filterValue} onChange={(event) => handleChange(event)}>
            <option value={filterTypes.NA}>{filterTypes.NA}</option>
            <option value={filterTypes.TWUBRIC_SCORE_VALUE}>
              {filterTypes.TWUBRIC_SCORE}
            </option>
            <option value={filterTypes.FRIENDS}>{filterTypes.FRIENDS}</option>
            <option value={filterTypes.INFLUENCE}>
              {filterTypes.INFLUENCE}
            </option>
            <option value={filterTypes.CHIRPINESS}>
              {filterTypes.CHIRPINESS}
            </option>
            <option value={filterTypes.DATE}>{filterTypes.DATE}</option>
          </select>
        </div>
        {isSortFilter && (
          <>
            <label className="sort-type">
              <input
                type="radio"
                value={sortTypes.ACCENDING}
                checked={sortType === sortTypes.ACCENDING}
                onChange={(e) => handleSortFilterChange(e)}
              />
              {sortTypes.ACCENDING}
            </label>
            <label className="sort-type">
              <input
                type="radio"
                value={sortTypes.DECENDING}
                checked={sortType === sortTypes.DECENDING}
                onChange={(e) => handleSortFilterChange(e)}
              />
              {sortTypes.DECENDING}
            </label>
            <div className="reset-button">
                <button onClick={resetClickHandler}>Reset</button>
            </div>
          </>
        )}
        {isDateFilter && (
          <>
            <div className="start-date">
              <div>Start Date</div>
              <input
                type="date"
                value={fromDate}
                name={dateTypes.FROM_DATE}
                onChange={(e) => onDateChange(e)}
              />
            </div>
            <div className="end-date">
              <div>End Date</div>
              <input
                type="date"
                name={dateTypes.TO_DATE}
                value={toDate}
                onChange={(e) => onDateChange(e)}
              />
            </div>
            <div className="reset-button">
                <button onClick={resetClickHandler}>Reset</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
