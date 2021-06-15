import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'

import db from './firebase'
import './Todo.css'

const Todo = (props) => {
    return (
        <List className='todo__list'>
            <ListItem>
                <ListItemAvatar>

                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} />
            </ListItem>
            <Button onClick={event=>db.collection('todos').doc(props.todo.id).delete()}>Delete</Button>
        </List>
    )
}

export default Todo
