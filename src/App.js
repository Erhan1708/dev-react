import React from 'react'
import State from './components/State';
import Task1 from './components/Task1'
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import HomeTask from './components/tasks20_07/Home-task';
import HomeTask2 from './components/tasks20_07/Home-task2';

const tags = [
      { title: 'Тег №1', href: 'http://link1.ru'},
      { title: 'Тег №2', href: 'http://link2.ru'},
      { title: 'Тег №3', href: 'http://link3.ru'},
    ]

const colors = [
       {color:'yellow'},
       {color:'yellow'},
       {color:'yellow'},
       {color:'grey'},
]

const styl = {
	fon: {
		backgroundColor: "#FFA500",
	},
};
const App = () => {
  return (
     <div style={styl.fon}>
        <State />
        <Task1 />
        <Task2 />
        <Task3 />
        <HomeTask colors={colors} />
        <HomeTask2 tags={ tags}/>
    </div>
  )
}

export default App