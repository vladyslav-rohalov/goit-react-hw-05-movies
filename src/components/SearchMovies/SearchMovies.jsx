import { useState } from 'react';
import { Form, Input, Button, ButtonLabel } from './SearchMovies.styled';
import PropTypes from 'prop-types';

export default function SearchMovies({ onFormSubmit }) {
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() === '') return;
    onFormSubmit(input);
    setInput('');
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search movies"
          onInput={handleInput}
          value={input}
        />
        <Button type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </Button>
      </Form>
    </div>
  );
}

SearchMovies.propTypes = {
  onFormSubmit: PropTypes.func,
};
