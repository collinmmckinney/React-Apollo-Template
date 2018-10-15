import React, { Component } from 'react';

export function withStyles() {
    const styles = {};

    return BaseComponent =>
        class StyledComponent extends Component {
            render() {
                return <BaseComponent {...this.props} styles={styles} />;
            }
        };
}
