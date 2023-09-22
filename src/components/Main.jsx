import React from 'react'
import {Link} from 'react-router-dom'

const Main = () => {
  /*
  Player List 클릭 시 List 컴포넌트로 이동
  => Link 이용
  */
  return (
    <div style={{
      display : 'flex',
      flexDirection : 'column',
      alignItems : 'center'
    }}>
      <img src='https://www.kfa.or.kr/img_src/main_banner/168127501971331.jpg'
      width='100%'/>
      <br/>
      <Link to='/list'
      style={{
        fontSize : '1.5em',
        fontWeight : 'bold',
        textDecoration : 'none',
        color : 'black',
        backgroundColor : 'lightGray',
        padding : '20px 30px',
        borderRadius : '20px'
      }}>
        Player List
      </Link>
    </div>
  )
}

export default Main