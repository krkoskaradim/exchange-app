import React from 'react';
import { CircularProgress } from '@mui/material';
import { ExchangeRate } from '../../../hooks/useExchangeRatesData';
import { ExchangeRateElement } from '../item/ExchangeRateElement';

export interface ExchangeRatesListProps {
    exchangeRates: ExchangeRate[]
}

export function ExchangeRatesList({ exchangeRates }: ExchangeRatesListProps): JSX.Element {
    return (
        <>
            <h2>
                Exchange rates list
            </h2>
            {exchangeRates.map((el) => <ExchangeRateElement exchangeRate={el} key={el.code} />)}
        </>
    );
}
