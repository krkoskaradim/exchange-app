import { useField } from 'formik';
import { InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { ExchangeRate } from '../../../hooks/useExchangeRatesData';
import { StyledFormControl } from '../../styled/FormInputs';

export interface ExchangeRateCurrencySelectParams {
    exchangeRates: ExchangeRate[],
}

export function ExchangeRateCurrencySelect({ exchangeRates }: ExchangeRateCurrencySelectParams): JSX.Element {
    const [field] = useField('currencyRate');
    return (
        <StyledFormControl>
            <InputLabel id="currencyRate">Select a currency</InputLabel>
            <Select
                name="currencyRate"
                value={field.value}
                onChange={field.onChange}
                id="currencyRate"
                label="Select Currency"
            >
                {exchangeRates?.map(({ amount, rate, code }) => <MenuItem key={code} value={rate / amount}>{code}</MenuItem>)}
            </Select>
        </StyledFormControl>
    );
}
