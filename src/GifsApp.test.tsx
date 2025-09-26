import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { GifsApp } from './GifsApp'

describe("GifsApp", () => {
    test("should render ...", () => {
        const { container } = render(<GifsApp />);
        expect(container).toMatchSnapshot();
    })
})