import React from 'react';
import { renderWithProviders } from 'utils/tests';
import { ExampleUI } from './ui';

describe('Example', () => {
    it('renders correctly', () => {
        expect(renderWithProviders(<ExampleUI />)).toMatchSnapshot();
    });
});
