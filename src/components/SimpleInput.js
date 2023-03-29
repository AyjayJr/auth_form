import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const inputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    console.log(enteredName);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    // nameInputRef.current.value = ''; // NOT IDEAL, DON'T MANIPULATE DOM
    setEnteredName('');
  };

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          onChange={inputChangeHandler}
          type='text'
          id='name'
          value={enteredName}
        />
        {!enteredNameIsValid && <p className='error-text'>Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
