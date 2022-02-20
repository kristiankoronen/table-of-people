import React, { useState } from 'react';

import PersonInput from './components/PersonInput';
import MyTable from './components/MyTable';
import Person from './models/Person';
import INITIAL_PEOPLE from './data';

function App() {
  const [people, setPeople] = useState(INITIAL_PEOPLE);

  const addPersonHandler = (personData: Person) => {
    setPeople((prevState) => [...prevState, personData]);
  };

  const removePersonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const personId = Number(event.currentTarget.dataset.itemId);

    setPeople((prevState) =>
      prevState.filter((person) => person.id !== personId)
    );
  };

  return (
    <div>
      <PersonInput onAddPerson={addPersonHandler} />
      <MyTable items={people} onRemovePerson={removePersonHandler} />
    </div>
  );
}

export default App;
