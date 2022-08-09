import React,{useState} from 'react';

function Todo(props) {
    const [todos,setTodos] = useState([
        {id:1,
        title:'lau nha',
            complete:false
        },
        {id:3,
            title:'rua bat',
            complete:false
        },
        {id:3,
            title:'quet nha',
            complete:false
        }
    ])

    return (
        <div className='todo-list'>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul></div>
    );
}

export default Todo;