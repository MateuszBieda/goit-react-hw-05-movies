import { Input, Form, Button } from './SearchBox.styled';
import PropTypes from 'prop-types';

export const SearchBox = ({ onChange, onSubmit,value }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input placeholder="Search movie" type="text" onChange={onChange} value={value} />

      <Button type="submit">Search</Button>
    </Form>
  );
};


SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};