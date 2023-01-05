import { render, screen } from '@testing-library/react';
import PostPeep from '../Components/PostPeep'

test('should render a input text and button to submit the peep', () => {
    render(<PostPeep />)

})
