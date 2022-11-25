import React from 'react';
import { ExchangeRate } from '../hooks/useExchangeRatesData';

export interface ExchangeRateElementParams {
    exchangeRate: ExchangeRate
}

export function ExchangeRateElement({ exchangeRate }: ExchangeRateElementParams): JSX.Element {
    const {
        amount, code, country, currency, rate,
    } = exchangeRate;

    return (
        <h3>
            {country}
            {' '}
            -
            {' '}
            {currency}
            {' '}
            -
            {' '}
            {code}
            {' '}
            -
            {' '}
            {amount}
            {' '}
            -
            {' '}
            {rate}
        </h3>
    );
}
