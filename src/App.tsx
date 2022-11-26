import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ExchangeRatesList } from './components/exchangeRatesView/item/ExchangeRatesList';
import { ExchangeRateConverterForm } from './components/exchangeRateConverter/form/ExchangeRateConverterForm';

const queryClient = new QueryClient();

function App(): JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <ExchangeRatesList />
            <ExchangeRateConverterForm />
        </QueryClientProvider>
    );
}

export default App;
