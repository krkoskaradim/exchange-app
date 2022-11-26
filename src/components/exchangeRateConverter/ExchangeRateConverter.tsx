import React from 'react';
import { ExchangeRate } from '../../hooks/useExchangeRatesData';
import { ExchangeRateConverterForm } from './form/ExchangeRateConverterForm';

export interface ExchangeRateConverterProps {
    exchangeRates: ExchangeRate[]
}

export function ExchangeRateConverter({ exchangeRates }: ExchangeRateConverterProps): JSX.Element {
    return (
        <div>
            <ExchangeRateConverterForm exchangeRates={exchangeRates} />
        </div>
    );
}
