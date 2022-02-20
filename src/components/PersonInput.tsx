import React, { useState } from 'react';

import Person from '../models/Person';

const PersonInput: React.FC<{ onAddPerson: (data: Person) => void }> = (
  props
) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const personData = {
      id: Math.random(),
      firstName,
      lastName,
      age: Number(age),
    };

    props.onAddPerson(personData);

    setFirstName('');
    setLastName('');
    setAge('');
  };

  const firstNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.currentTarget.value);
  };

  const lastNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLastName(event.currentTarget.value);
  };

  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.currentTarget.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={firstNameChangeHandler}
          ></input>
        </label>
      </div>
      <div>
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={lastNameChangeHandler}
          ></input>
        </label>
      </div>
      <div>
        <label>
          Age
          <input
            type="number"
            min="0"
            max="150"
            step="1"
            value={age}
            onChange={ageChangeHandler}
          ></input>
        </label>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default PersonInput;
