import React from 'react';

interface TodoListeProps {
  items: { id: string, text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListeProps> = (props) => {
  return (
  <ul>
    {props.items.map((item) => (
        <li key={ item.id }>
          <span>{ item.text }</span>
          <button onClick={props.onDeleteTodo.bind(null, item.id)}>DELETE</button>
        </li>
      ))}
  </ul>
  );
};

export default TodoList;