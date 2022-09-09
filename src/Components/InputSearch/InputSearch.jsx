import React, { useState } from 'react';

const InputSearch = (props) => {

    // console.log(props);


    // =======  Search
    const [filterList, setFilterList] = useState(props.listItems);

    // console.log(filterList);

    const [searchValue, setSearchValue] = useState('');


  const onSearch = (value) => {
  const searchList = filterList.filter(item => {
    return item.title.toLowerCase().includes(value.toLowerCase())
  });
   props.setList(searchList);
}

  const changeSerchValue = (e) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  }

//   ================ sort

const onSort = () => {
    const sortList =  [...props.listItems].sort((a, b) =>
      a.title > b.title ? 1 : -1);

      props.setList(sortList);
    }

  const onSortId = () => {
    const sortId =
      [...props.listItems].sort((a, b) => a.id > b.id ? 1 : -1);

    props.setList(sortId);
  }

  const [boxValue, setBoxValue] = useState(true)

  const [check, setCheck] = useState(false)

  const changeBox = () => {

    setCheck((check) => !check)
    setBoxValue((boxValue) => !boxValue)

    if (boxValue) {
      onSort()
    } else {
      onSortId()
    }
  }

//   ===============Reset

const reset = (e) => {
    setCheck(false);
    onSearch(e.target.value)
    setSearchValue('')
  }

    return  (
        <div className={'block-search'}>
            <input className={'input-search'}
        type="text"
        placeholder={'search'}
        value={searchValue}
        onChange={changeSerchValue}
      ></input>
      <input className={'input-checkbox'} type="checkbox" checked={check} onChange={changeBox}></input>
      <button className={'btn'} onClick={reset} >Reset</button>
        </div>
    );
};

export default InputSearch;