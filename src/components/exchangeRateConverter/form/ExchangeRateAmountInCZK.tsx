import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';
import styled from 'styled-components';
import { StyledFormControl } from '../../styled/FormInputs';

export interface ExchangeRateAmountInCZKProps {
    name: string
}

const StyledTextField = styled(TextField)`
  && {
    width: 20ch;
    margin: 1rem;
  }
`;
export function ExchangeRateAmountInCZK({ name }: ExchangeRateAmountInCZKProps): JSX.Element {
    const [field, { error, touched }] = useField(name);

    const isError = !!(error && touched);

    return (
        <StyledFormControl>
            <StyledTextField
                id={name}
                name={name}
                label="Amount in CZK"
                type="number"
                onChange={field.onChange}
                error={isError}
                helperText={isError && error}
            />
        </StyledFormControl>
    );
}
