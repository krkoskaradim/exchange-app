import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ExchangeRatesList } from './components/ExchangeRatesList';

const queryClient = new QueryClient();

function App(): JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <ExchangeRatesList />
        </QueryClientProvider>
    );
}

export default App;
