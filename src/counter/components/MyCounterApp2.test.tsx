import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { MyCounterApp } from './MyCounterApp'

const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 5, 
        handleAdd: handleAddMock,
        handleSubtract: handleSubtractMock,
        handleReset: handleResetMock,
    })
}))

describe("MyCounterApp", () => {
    test("should render the component", () => {
        render(<MyCounterApp />);

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).contain('counter: 5');
        
        expect(screen.getByRole('button', { name: "+1" })).toBeDefined();
        expect(screen.getByRole('button', { name: "-1" })).toBeDefined();
        expect(screen.getByRole('button', { name: "reset" })).toBeDefined();
    })
    test("should call handleAdd if button is clicked", () => {
        render(<MyCounterApp />);

        const button = screen.getByRole('button', {name: "+1"});

        fireEvent.click(button)

        expect(handleAddMock).toHaveBeenCalled();
        // expect(handleAddMock).toHaveBeenCalledTimes(1);
        expect(handleSubtractMock).not.toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
    })
})