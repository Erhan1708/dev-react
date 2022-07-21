import React from 'react'
// 2)Сделать компонент для тегов, теги мы отправляем в таком формате:

//    tags = [
//      { title: 'Тег №1', href: 'http://link1.ru'},
//      { title: 'Тег №2', href: 'http://link2.ru'},
//      { title: 'Тег №3', href: 'http://link3.ru'},
//    ]

const HomeTask2 = (props) => {

   const el = props.tags.map(tag => <a href={`$props.href`}>{tag.title}    , </a>)

  return (
     <>
        <p>№2</p>
        <div>
           {el}
        </div>
     </>
  )
}

export default HomeTask2