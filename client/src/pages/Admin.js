import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/model/CreateBrand';
import CreateDevice from '../components/model/CreateDevice';
import CreateType from '../components/model/CreateType';

const Admin = ()=>{
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setdeviceVisible] = useState(false)


  return (
  <Container className='d-flex flex-column'>
    <Button variant='outline-dark' className='mt-4 p-2' onClick={()=> setTypeVisible(true)}>Дабавить тип</Button>
    <Button variant='outline-dark' className='mt-2 p-2' onClick={()=> setBrandVisible(true)}>Дабавить бренд</Button>
    <Button variant='outline-dark' className='mt-2 p-2 ' onClick={()=> setdeviceVisible(true)}>Дабавить устройство</Button> 
    <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
    <CreateDevice show={deviceVisible} onHide={() => setdeviceVisible(false)}/>
    <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
  </Container>  
  );
};

export default Admin;