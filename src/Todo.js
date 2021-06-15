import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'

import './Todo.css'

const Todo = ({text,}) => {
    return (
        <List className='todo__list'>
            <ListItem>
                <ListItemAvatar>

                </ListItemAvatar>
                <ListItemText primary={text} />
            </ListItem>
        </List>
    )
}

export default Todo
