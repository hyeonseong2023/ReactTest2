import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({ imgSrc, name, position, index }) => {
    /*
    프로필 카드 클릭 시 해당하는 선수의 상세페이지로 이동
    /detail/index
    => useNavigate 사용
    */
    const nav = useNavigate();
    return (
        <div className='item-item'
            onClick={() => {
                console.log("Detail 요청")
                let url = "http://43.200.182.176/:8090/SpringBoot2/PlayerDetail.do?name=" + name;

                axios.get(url)
                    .then((res) => {
                        console.log(res.data) // 나상호의 정보
                    });

                nav(`/detail/${index}`)
            }}>
            <img src={imgSrc} />
            <table>
                <tbody>
                    <tr>
                        <td>이름</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>포지션</td>
                        <td>{position}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Item