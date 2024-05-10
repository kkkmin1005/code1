import React from 'react';
import { Link, useParams } from 'react-router-dom';
//import image1 from '../image/img1.jpg'
import './detail.css';
import data from './data.js';
import { useEffect, useState } from 'react';


function Header({title}) {
  return(
    <>
      <h1 style={{}}>{title}</h1>
    </>
  )
}

function Image() {
  return(
    <>
    
      <div className='detail_imagebox'>
        <img
          src= "../image/img1.jpg"
          alt= "image"
          className='main-image'
        />
      </div>

    </>
  )
}

function Fund(props) {
  var category= ''
  if(props.categories==='corporation') category= 'ESG 기업';
  else if(props.categories==='organization') category= '환경 단체';
  return(
    <>
      <h5 class='category'>{category}</h5>
      <div>
        <h2 class='num_money'>{props.amounts}원</h2>
        <h5 class='num_text'>펀딩 중</h5>
      </div>
      <div>
        <h5 class='num_text'>남은 기간 </h5>
        <h3 class='num'>{props.days}일</h3>
      </div>
      <div>
        <h5 class='num_text'>참여자 </h5>
        <h3 class='num'>{props.participants}명</h3>
      </div>
      <Link to='/pay'><button className='button_fund'>펀딩 하기</button></Link>
      <div className='btn_'>
        <button onClick={function() {
          //로그인 확인 기능 구현하기
          alert('관심 상품으로 표시했습니다');
        }} className='button_like'>❤︎</button>
        <button className='button_about'>기업 정보 더보기</button>
      </div>
    </>
  )
}

function Detail() {

  const {id}= useParams();
  const [Posts, SetPosts] = useState([]);

  useEffect(() => {
    // data.js에서 데이터 가져와서 상태 업데이트
    fetch('url')
      .then(res => res.json()) // .json() 메서드 호출
      .then(data => {
        SetPosts(data); // 첫 번째 then 메서드에서 처리 // 첫 번째 then 메서드에서 처리
      });
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행됨

  return(
    <div className= 'Detail'>

      <div className='detail_title'>
        <Header title= {Posts[id].name} />
      </div>

      <div className='detail_main'>
        <div className='detail_image'>
          <Image/>
        </div>


        <div className='detail_fund'>
          <Fund
            categories= {'corporation'}
            amounts= {'0'}
            days= {0}
            participants= {0}
          />
        </div>


        <div>{Posts[id].data}</div>
      </div>

    </div>
  );
}

export default Detail;