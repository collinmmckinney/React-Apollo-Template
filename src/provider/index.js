import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

const apolloClient = new ApolloClient({
    link: new HttpLink({ uri: '' }),
    cache: new InMemoryCache()
});

class Provider extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        const { children } = this.props;
        return (
            <ApolloProvider client={apolloClient}>
                <BrowserRouter>{children}</BrowserRouter>
            </ApolloProvider>
        );
    }
}

export { Provider };
