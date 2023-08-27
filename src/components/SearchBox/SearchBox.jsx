import { Input, Form, Button } from './SearchBox.styled';

export const SearchBox = ({ onChange, onSubmit,value }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input placeholder="Search movie" type="text" onChange={onChange} value={value} />

      <Button type="submit">Search</Button>
    </Form>
  );
};
