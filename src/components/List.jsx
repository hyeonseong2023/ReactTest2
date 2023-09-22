import React from 'react'
import Item from './Item'

const List = ({list}) => {
  // console.log(list);
  /*
  (1) 포지션이 MF인 선수만 나오는 배열을 생성하기
  (2) 만들어진 배열을 map함수로 뿌려주기
  */
 const mfList = list.filter(item=>item.position=='MF')
 console.log(mfList);
  return (
    <div className='list-container'>
      <h1>KOREA REPUBLIC</h1>
      <div className='item-container'>
        {list.map((item, index)=>
        <Item key={index} imgSrc={"data:image/;base64,"+item.imgSrc} index={index}
        name={item.name} position={item.position}/>)}
      </div>
      <h1>MF</h1>
      <div className='item-container'>
        {mfList.map((item, index)=>
        <Item key={index} imgSrc={"data:image/;base64,"+item.imgSrc} index={index}
        name={item.name} position={item.position}/>)}
      </div>
    </div>
  )
}

export default List