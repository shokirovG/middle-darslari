import {fireEvent, screen} from "@testing-library/react"
import {Sidebar} from "./Sidebar";
import renderWidthTranslation from "../../../../shared/lib/renderWidthTranslation/renderWidthTranslation";
import * as cls from './Sidebar.module.scss';
describe('button', () => {
    test('should render correctly', () => {
        renderWidthTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()

    })

    test('click toggle', ()=> {
        renderWidthTranslation(<Sidebar/>)
        const toggleButton = screen.getByTestId('toggle-btn')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        console.log('cls', cls)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })


})
