import React from 'react';
import List from './components/List';
import listSvg from './assets/img/list.svg';
import AddList from './components/AddButtonList';
import DB from './assets/db.json';

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List
          items={[
            {
              icon: listSvg,
              name: 'Все задачи',
              active: true,
            },
          ]}
        />
        <List
          items={[
            {
              color: 'green',
              name: 'Покупки',
            },
            {
              color: 'blue',
              name: 'Фронтенд',
            },
            {
              color: 'pink',
              name: 'Фильмы и сериалы',
            },
          ]}
          isRemovable
        />
        <AddList colors={DB.colors} />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
