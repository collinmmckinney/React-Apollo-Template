import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { ExampleUI } from './ui';

export class Example extends PureComponent {
    static displayName = 'ExampleContainer';

    render() {
        const { ...rest } = this.props;
        return <ExampleUI {...rest} />;
    }
}

export const ExampleContainer = compose()(Example);
