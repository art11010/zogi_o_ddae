import React from 'react';

function ListPlace() {
  const placeArr = [
    { title: '제주도' },
    { title: '부산' },
    { title: '경주' },
    { title: '대전' },
  ];

  const placeMap = placeArr.map((item, idx) => (
    <li key={item.title + idx}>
      <button className="w-full py-5 btn-secondary rounded-full">
        {item.title}
      </button>
    </li>
  ));

  return <ul className="mt-2 grid grid-cols-4 gap-4">{placeMap}</ul>;
}
export default ListPlace;
