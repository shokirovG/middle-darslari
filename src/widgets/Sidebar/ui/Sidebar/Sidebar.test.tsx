

import {fireEvent, render, screen} from "@testing-library/react"
import {Sidebar} from "./Sidebar";
import {renderWidthTranslation} from "../../../../shared/lib/tests/renderWidthTranslation/renderWidthTranslation";

describe('sidebar', () => {
    test('id test', () => {
        renderWidthTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()

    })
    test('test toggle', () => {
        renderWidthTranslation(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sideBar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})