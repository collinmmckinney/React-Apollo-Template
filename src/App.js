import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'provider';
import { Example } from 'pages';
import { PATHS } from 'constants/nav';

class App extends Component {
    render() {
        return (
            <Provider>
                <Switch>
                    <Route path={PATHS.root()} exact component={Example} />
                </Switch>
            </Provider>
        );
    }
}

export { App };
