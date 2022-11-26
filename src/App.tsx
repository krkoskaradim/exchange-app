import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ExchangeRatesView } from './components/exchangeRatesView/ExchangeRatesView';

const queryClient = new QueryClient();

function App(): JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <ExchangeRatesView />
        </QueryClientProvider>
    );
}

export default App;
