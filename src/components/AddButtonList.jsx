import React from "react";
import List from "./List";
import plusSvg from '../assets/img/add.svg';

function AddButtonList() {
  return (
    <List
      items={[
        {
          className: 'list__add-button',
          icon: plusSvg,
          name: 'Добавить список',
        },
      ]}
    />
  )
}

export default AddButtonList;