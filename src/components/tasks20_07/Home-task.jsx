import React from 'react'

// 1) Написать компонент по рейтингу, он принимает два пропса, 
//    1 - максимальное количество звезд, 2 - сколько выбрано звезд. 
//    На скрине максмум 4 звезды, а выбрано 3.
const styles = {
	container: {
      display: "flex",
      
	},
};
const HomeTask = (props) => {

   const el = props.colors.map(col => <p style={{ color:col.color }}>{col.color}|</p>);

 return (
		<>
       <p >№1</p>
			<div style={styles.container }>{el}</div>
		</>
 );
}

export default HomeTask