import { describe, test, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { MyCounterApp } from './MyCounterApp'

describe("MyCounterApp", () => {
    test("should render the component", () => {
        render(<MyCounterApp />);

        screen.debug();

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).contain('counter: 0');
        
        expect(screen.getByRole('button', { name: "+1" })).toBeDefined();
        expect(screen.getByRole('button', { name: "-1" })).toBeDefined();
        expect(screen.getByRole('button', { name: "reset" })).toBeDefined();
    })
    test("should increment the counter", () => {
        render(<MyCounterApp />);

        const labelH1 = screen.getByRole('heading', {level: 1});
        const button = screen.getByRole('button', {name: "+1"});

        fireEvent.click(button);

        expect(labelH1.innerHTML).toContain("counter: 1");
    })
    test("should decrement the counter", () => {
        render(<MyCounterApp />);

        const labelH1 = screen.getByRole('heading', {level: 1});
        const button = screen.getByRole('button', {name: "-1"});

        fireEvent.click(button);

        expect(labelH1.innerHTML).toContain("counter: -1");
    })
})