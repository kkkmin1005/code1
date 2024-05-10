import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from './data.js';
import './mainpage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Posts({ post }) {
  return (
    <Card style={{ width: '18rem' }} className='Card'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.shortExplain}
        </Card.Text>
        <Link to={`/detail/${post.id}`}>
          <Button variant="primary">자세히 보기</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

function Mainpage() {
  // NewPosts와 RecommendPosts를 useState 내부에서 초기화
  const [NewPosts, SetNewPosts] = useState([]);
  const [RecommendPosts, SetRecommendPosts] = useState([]);

  useEffect(() => {
    // data.js에서 데이터 가져와서 상태 업데이트
    SetNewPosts(data);
    SetRecommendPosts(data);
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행됨

  return (
    <>
      <div className='Posts'>
        <p>신규기업</p>
      </div>

      <div className="box">
        {NewPosts.map((post, index) => <Posts key={index} post={post} />)}
      </div>

      <div className='Posts'>
        <p>추천기업</p>
      </div>

      <div className="box">
        {RecommendPosts.map((post, index) => <Posts key={index} post={post} />)}
      </div>
    </>
  );
}

export default Mainpage;
