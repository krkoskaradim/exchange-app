import React from 'react';
import { useExchangeRatesData } from '../hooks/useExchangeRatesData';
import { ExchangeRateElement } from './ExchangeRateElement';

export function ExchangeRatesList(): JSX.Element {
    const { isLoading, data } = useExchangeRatesData();

    if (isLoading) {
        return (
            <h2>
                Loading ...
            </h2>
        );
    }
    return (
        <>
            <h2>
                Exchange rates list
            </h2>
            {data?.map((el) => <ExchangeRateElement exchangeRate={el} key={el.code} />)}
        </>
    );
}
