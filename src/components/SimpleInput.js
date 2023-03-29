import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');

  const inputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    console.log(enteredName);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    // nameInputRef.current.value = ''; // NOT IDEAL, DON'T MANIPULATE DOM
    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          onChange={inputChangeHandler}
          type='text'
          id='name'
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
