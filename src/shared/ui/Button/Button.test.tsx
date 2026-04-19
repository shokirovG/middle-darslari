
import {Button} from "./Button";
import {render,screen} from "@testing-library/react"

describe('button', () => {
        test('should render correctly', () => {
           render(<Button>TEST</Button>)
            expect(screen.getByText('TEST')).toBeInTheDocument()

        })
})

