import React, {useEffect, useState} from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigstar from "../assets/bigstar"
import {useParams} from 'react-router-dom'
import img from '../assets/img.jpg'
import { fetchOneDevices } from '../http/deviceAPI';


const DevicePage = ()=>{
  const  [device, setDevice] = useState({info:[]})
  const {id} = useParams()
  useEffect(() =>{
    fetchOneDevices(id).then(data => setDevice(data))

  }, [])
  return (
  <Container className='mt-3'>
    <Row>
    <Col md = {4}>
      <Image width = {300} height = {300} src = {img} />
    </Col>
    <Col md = {4}>
      <Row className='d-flex flex-column align-items-center'>
        <h2>{device.name}</h2>
        <div
          className='d-flex align-items-center justify-content-center'
          style={{background:`url(${bigstar}) no-repeat center center`, width:240, height:240, backgroundSize:"cover", fontSize:64}}
        >

        </div>
      </Row>
      
    </Col>
    <Col md = {4}>
      <Card
      className='d-flex flex-column align-items-center justify-content-around'
      style={{width:300, height:300, fontSize:32, border: "5px solid lightgray"}}
      >
        <h3>от: {device.price} руб.</h3>
        <Button variant='outline-dark'>Добовить в корзину</Button>
      </Card>
      
    </Col>
    </Row>
    <Row className='d-flex flex-column mt-3'>
      <h1>характеристики</h1>
      {device.info.map((info, index) =>
        <Row key={info.id} style={{background: index %2===0 ? 'lightgray' : 'transparent', padding:10}}>
          {info.title}:{info.description}
        </Row>
        )}
    </Row>
    
  </Container>
  );
};

export default DevicePage;