import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from 'hoc/styles';
import { Div, Text } from 'components';
import { styles } from './styles';

class Example extends PureComponent {
    static propTypes = {
        styles: PropTypes.objectOf(PropTypes.object).isRequired
    };

    render() {
        const { styles } = this.props;
        return (
            <Div styles={styles.container}>
                <Text>Example</Text>
            </Div>
        );
    }
}

export const ExampleUI = compose(withStyles(styles))(Example);
