import React, { useContext, useState } from 'react';
import { Col, Dropdown, Form, FormControl, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import Modal from 'react-bootstrap/Modal';
import {Context} from '../../index'


const CreateDevice = ({show, onHide})=>{


    
    const {device} = useContext(Context)
    const[info, setInfo] = useState([])
    const addInfo = () =>{
        setInfo([...info, {title:'', description:'', number: Date.now()}])
    }
    const removeInfo = (number) =>{
        setInfo(info.filter(i => i.number !==number))
    }
  return (
    <Modal
      show = {show}
      onHide = {onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Дабавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className='mt-2 mb-2 '>
                <DropdownToggle>Виберите тип</DropdownToggle>
                <DropdownMenu>
                    {device.types.map(type =>
                        <DropdownItem key = {type.id}>
                            {type.name}
                        </DropdownItem>
                        )}
                </DropdownMenu>
            </Dropdown>
            <Dropdown className='mt-2 mb-2' >
                <DropdownToggle>Виберите бранд</DropdownToggle>
                <DropdownMenu>
                    {device.brands.map(brand =>
                        <DropdownItem key = {brand.id}>
                            {brand.name}
                        </DropdownItem>
                        )}
                </DropdownMenu>
            </Dropdown>
            <FormControl
                className='mt-3'
                placeholder='Введите название устройства'
            />
            <FormControl
                className='mt-3'
                placeholder='Введите стоимость устройства'
                type="number"            
            />
            <FormControl
                className='mt-3'
                type="file"            
            />
            <hr/>
            <Button variant={'outline-dark'} onClick={addInfo}>Добавить новое свойство</Button>
            {
                info.map(i=>
                    <Row className='mt-4' key = {i.number}>
                        <Col md={4}>
                            <FormControl
                                placeholder='Введите название свойства'                            
                            />
                        </Col>
                        <Col md={4}>
                            <FormControl
                                placeholder='Введите описание свойства'                               
                            
                            />
                        </Col>
                        <Col md={4}>
                            <Button 
                            onClick={()=>removeInfo(i.number)}
                            variant='outline-danger'
                            >
                                Удалить
                            </Button>

                        
                        </Col>
                    </Row>
                    )
            }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;