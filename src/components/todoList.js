import React, { useState } from 'react'
import TodoCards from './todoCards'
import {useSelector} from 'react-redux'
import {Form,Col,Row,Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import {uuid} from 'uuidv4'
import {addtodo} from '../redux/actions'

const TodoList = () => {
    const [input,setInput] = useState(
        {
            id:uuid(),
            title:"",
            discription:"",
            isEdited:false
        }
    )
    const dispatch = useDispatch()
    const handelChange=(e)=>{
        setInput({...input, [e.target.name]:e.target.value})
    }
    const handelSave=()=>{
        dispatch(addtodo(input))
    }
    const state = useSelector(state => state.todoreducer)
    const todo=state.todoList

    return (
        <div>
            {/* add to do */}
            <Form className="form">
                <Row>
                <Col>
                <Form.Control placeholder="ToDo Title" name="title" onChange={handelChange} />
                </Col>
                <Col>
                <Form.Control placeholder="ToDo Discription" name="discription" onChange={handelChange} />
                </Col>
                <Col>
                <Button variant="primary" onClick={handelSave} >Add ToDo</Button>
                </Col>
                </Row>
            </Form>
            <div class="cardStyle">
            {todo.map(todo=><TodoCards todo={todo }/>)}
            </div>
        </div>
        
    )
}

export default TodoList
