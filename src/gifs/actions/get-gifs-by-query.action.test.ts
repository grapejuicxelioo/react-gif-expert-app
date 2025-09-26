import { describe, test, expect, beforeEach, vi } from 'vitest'
import AxiosMockAdapter from 'axios-mock-adapter'
import { getGifsByQuery } from './get-gifs-by-query.action'
import { giphyApi } from '../api/giphy.api'
import { giphySearchResponseMock } from '../../tests/mock/giphy.response.data'

describe("getGifsByQuery", () => {
    let mock = new AxiosMockAdapter(giphyApi);

    beforeEach(() => {
        mock.reset();
        mock = new AxiosMockAdapter(giphyApi);
    })

    // test("should return a list of gifs", async () => {
    //     const gifs = await getGifsByQuery('test');
    //     const [ gifs1 ] = gifs;

    //     console.log(gifs);

    //     expect(gifs.length).toBe(10);

    //     expect(gifs1).toStrictEqual({
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //         width: expect.any(Number),
    //         height: expect.any(Number),
    //     });
    // })

    test("should return a list of gifs", async () => {
        mock.onGet('/search').reply(200, giphySearchResponseMock);
        const gifs = await getGifsByQuery('test');

        expect(gifs.length).toBe(10);

        gifs.forEach((gif) => {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');
        })
    })
    test("should return an empty list of gifs if query is empty", async () => {
        // mock.onGet('/search').reply(200, giphySearchResponseMock);
        mock.restore();

        const gifs = await getGifsByQuery('');

        expect(gifs.length).toBe(0);
    })
    test("should handle error when API returns   an error", async () => {
        const consoleSpyError = vi.
            spyOn(console, 'error').
            mockImplementation(() => {})

        mock.onGet('/serach').reply(400, {
            data: {
                message: 'bad request',
            },
        });

        const gifs = await getGifsByQuery('txt');

        expect(gifs.length).toBe(0);
        expect(consoleSpyError).toHaveBeenCalled();
        expect(consoleSpyError).toHaveBeenCalledTimes(1);
        expect(consoleSpyError).toHaveBeenCalledWith(expect.anything());
    })
})