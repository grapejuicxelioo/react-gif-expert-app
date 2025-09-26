import { describe, test, expect } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useCounter } from './useCounter'

describe("useCounter", () => {
    test("should initialize with default value of x", () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(0)
    })
    test("should initialize with value 5", () => {
        const initialValue = 5;
        const { result } = renderHook(() => useCounter(initialValue));

        expect(result.current.counter).toBe(initialValue)
    })
    test("should increment counter when handleAdd is called", () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.handleAdd();
        })

        expect(result.current.counter).toBe(1)
    })
    test("should decrement counter when handleSubtract is called", () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.handleSubtract();
        })

        expect(result.current.counter).toBe(-1)
    })
    test("should reset to initialValue the counter when handleReset is called", () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.handleAdd();
            result.current.handleAdd();
            result.current.handleAdd();
        });
        
        expect(result.current.counter).toBe(3);

        act(() => {
            result.current.handleReset();
        });

        expect(result.current.counter).toBe(0);
    })
})