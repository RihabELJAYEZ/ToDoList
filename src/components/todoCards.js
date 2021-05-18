import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {Card,Button} from 'react-bootstrap';
import {deletetodo,editetodo,updatetodo} from '../redux/actions'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const TodoCards = ({todo}) => {
    const {id,title,discription,isEdited}=todo
    const [field, setField] = useState(title)
    const dispatch=useDispatch();
    const [editable, setEditable] = useState(false) 
    return (
        <div>
            <Card>
                {isEdited?(<input type="text" value={field} onChange={(e)=>setField(e.target.value)}></input>):
                <Card.Header>{title}</Card.Header>}
                
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    
                    {editable? <input type="text" value={discription} className="form_control"/> : <p>{todo.discription}</p>}
                    
                    
                    </blockquote>
            </Card.Body>
            <div className="towBTN">
            <BootstrapSwitchButton checked={true} onstyle="outline-success" offstyle="outline-danger" onlabel='DONE' offlabel='NOT DONE' style='w-25 mx-3' />
            <Button variant="warning" 
            onClick={()=>isEdited ? dispatch(updatetodo({...todo,title:field,isEdited:false}))
            : dispatch(editetodo(id))}>
                {isEdited?'Save':'Edite'}
                </Button>
            <Button variant="danger" onClick={()=>dispatch(deletetodo(id))} >Delete</Button>
            </div>           
            </Card>
        </div>
    )
}
export default TodoCards
