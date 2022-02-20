import React from 'react';
import Person from '../models/Person';

const MyTable: React.FC<{
  items: Person[];
  onRemovePerson: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = (props) => {
  const tableRows = props.items.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.age}</td>
        <td>
          <button onClick={props.onRemovePerson} data-item-id={item.id}>
            X
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <caption>Basic information about people</caption>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Age</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default MyTable;
