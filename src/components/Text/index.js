import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const GlamorousP = glamorous.p();

export class Text extends PureComponent {
    static propTypes = {
        span: PropTypes.bool,
        legend: PropTypes.bool,
        children: PropTypes.node.isRequired
    };

    static defaultProps = {
        span: false,
        legend: false
    };

    render() {
        const { children, rest } = this.props;
        return <GlamorousP {...rest}>{children}</GlamorousP>;
    }
}
