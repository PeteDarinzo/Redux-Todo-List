import React from "react";
import { render } from '@testing-library/react';
import Todo from './Todo';



it("renders a todo without crashing", () => {
  <Todo
    task="walk dog"
    id={12345}
    completed={false}
    toggleComplete={() => null}
    deleteTask={() => null}
  />
});

it("matches the todo snapshot", () => {
  const { asFragment } = render(<Todo
    task="walk dog"
    id={12345}
    completed={false}
    toggleComplete={() => null}
    deleteTask={() => null}
  />
  );
  expect(asFragment()).toMatchSnapshot();
});