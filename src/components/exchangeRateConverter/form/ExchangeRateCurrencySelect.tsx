import { useField } from 'formik';
import {
    MenuItem, TextField,
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { ExchangeRate } from '../../../hooks/useExchangeRatesData';
import { StyledFormControl } from '../../styled/FormInputs';

export interface ExchangeRateCurrencySelectParams {
    exchangeRates: ExchangeRate[],
    name: string
}

const StyledTextField = styled(TextField)`
  && {
    width: 15ch;
    margin: 1rem;
  }
`;

export function ExchangeRateCurrencySelect({ exchangeRates, name }: ExchangeRateCurrencySelectParams): JSX.Element {
    const [field, { error, touched }] = useField(name);

    const options = exchangeRates
        ?.map(({ amount, rate, code }) => <MenuItem key={code} value={rate / amount}>{code}</MenuItem>);

    const isError = !!(error && touched);

    return (
        <StyledFormControl>
            <StyledTextField
                select
                name={name}
                value={field.value}
                onChange={field.onChange}
                id={name}
                label="Select Currency"
                error={isError}
                helperText={isError && error}
            >
                {options}
            </StyledTextField>
        </StyledFormControl>
    );
}
