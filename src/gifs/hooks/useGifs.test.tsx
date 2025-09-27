import { describe, test, expect, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useGifs } from './useGifs';
import * as gifActions from '../actions/get-gifs-by-query.action';

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
    test("should return a list of gifs from cache", async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleTermClicked('txt');
        })

        expect(result.current.gifs.length).toBe(10);

        vi.spyOn(gifActions, 'getGifsByQuery').
            mockRejectedValue(new Error('this is my custom error'));

        await act(async () => {
            await result.current.handleTermClicked('txt');
        })

        expect(result.current.gifs.length).toBe(10);
    })
    test("should return no more than x previous terms", async () => {
        const { result } = renderHook(() => useGifs());

        vi.spyOn(gifActions, 'getGifsByQuery').
            mockResolvedValue([]);

        await act(async () => {
            await result.current.handleSearch('txt1');
        })
        await act(async () => {
            await result.current.handleSearch('txt2');
        })
        await act(async () => {
            await result.current.handleSearch('txt3');
        })
        await act(async () => {
            await result.current.handleSearch('txt4');
        })
        await act(async () => {
            await result.current.handleSearch('txt5');
        })
        await act(async () => {
            await result.current.handleSearch('txt6');
        })
        await act(async () => {
            await result.current.handleSearch('txt7');
        })
        await act(async () => {
            await result.current.handleSearch('txt8');
        })
        await act(async () => {
            await result.current.handleSearch('txt9');
        })

        console.log(result.current.previousTerms);

        expect(result.current.previousTerms.length).toBe(8);
        expect(result.current.previousTerms).toStrictEqual(
            [
                "txt9",
                "txt8",
                "txt7",
                "txt6",
                "txt5",
                "txt4",
                "txt3",
                "txt2",
            ]
        )
    })
})