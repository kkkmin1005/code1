import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './fundingpage.css';
import data from './data.js'
import {Route, Routes, Link} from 'react-router-dom';

function FundingPage() {
  // 상태를 사용하여 데이터를 관리
  const [fundingData, setFundingData] = useState(data);

  return (
    <>
      <div className='Fundingbox'>
        {fundingData.map((post, index) => <FundingPosts post={post} index={index} />)}
      </div>
    </>
  );
}

function FundingPosts({ post }) {
  return (
    <Card style={{ width: '18rem' }} id='Fundingcard'>
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

export default FundingPage;
