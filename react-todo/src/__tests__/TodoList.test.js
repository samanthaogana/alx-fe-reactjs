import React from "react";
import {fireEvent, render, screen } from '@testing-library/react'
import TodoList from "../components/ToDoList";


test ('renders TodoList component correctly', () => {
    render(<TodoList />);


    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master JavaScript')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add a new Todo')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
});

test('adds a new todo', () => {
    render(<TodoList />)


const input = screen.getByPlaceholderText('Add a new todo');
const addButton = screen.getByText('Add');

fireEvent.change(input, { target: { value: 'Test new todo'} });
fireEvent.click(addButton);

expect(screen.getByText('Test new todo')).toBeInTheDocument();

});

test('toggles a todo item', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Learn React');

    expect(todoItem).not.toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo item', () => {
    render(<TodoList />);

    const deleteButton = screen.getAllByText('Delete')[0]

    fireEvent.click(deleteButton);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
