import React from "react";
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it("renders a new todo form without crashing", () => {
  <NewTodoForm
    addTask={() => null}
  />
});

it("matches the new todo form snapshot", () => {
  const { asFragment } = render(<NewTodoForm
    addTask={() => null}
  />
  );
  expect(asFragment()).toMatchSnapshot();
});
