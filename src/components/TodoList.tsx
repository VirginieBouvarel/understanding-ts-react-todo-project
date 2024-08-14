import React from 'react';

interface TodoListeProps {
  items: { id: string, text: string }[];
}

const TodoList: React.FC<TodoListeProps> = (props) => {
  return (
  <ul>
    {props.items.map((item) => (
        <li key={ item.id }>{ item.text }</li>
      ))}
  </ul>
  );
};

export default TodoList;