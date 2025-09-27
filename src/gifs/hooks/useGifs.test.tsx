import { describe, test, expect } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useGifs } from './useGifs';

describe("useGifs", () => {

    test("should return default values and methods", () => {
        const { result } = renderHook(() => useGifs())

        expect(result.current.gifs.length).toBe(0);
        expect(result.current.previousTerms.length).toBe(0);
        expect(result.current.handleTermClicked).toBeDefined();
        expect(result.current.handleSearch).toBeDefined();
    })
    test("should return a list of gifs", async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleSearch('txt');
        });

        expect(result.current.gifs.length).toBe(10);
    })
    test("should return a list of gifs when handleTermClicked is called", async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleTermClicked('txt');
        })

        expect(result.current.gifs.length).toBe(10);
    })
})