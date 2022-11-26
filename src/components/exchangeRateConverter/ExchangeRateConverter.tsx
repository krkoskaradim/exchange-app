import React, { useState } from 'react';
import { Paper, Typography } from '@mui/material';
import styled from 'styled-components';
import { ExchangeRate } from '../../hooks/useExchangeRatesData';
import { ExchangeRateConverterForm, ExchangeRateConverterFormSchema } from './form/ExchangeRateConverterForm';
import { StyledTitle } from '../styled/Typography';

export interface ExchangeRateConverterProps {
    exchangeRates: ExchangeRate[]
}

const Wrapper = styled(Paper)`
    padding: 2.5rem;
    text-align: center;
`;

const StyledResult = styled(Typography)`
    padding: 3rem;
`;

export function ExchangeRateConverter({ exchangeRates }: ExchangeRateConverterProps): JSX.Element {
    const [result, setResult] = useState<number | null>(0);

    const onSubmit = ({ amountInCZK, currencyRate }: ExchangeRateConverterFormSchema): void => {
        setResult(((amountInCZK / currencyRate) || 0));
    };

    return (
        <Wrapper>
            <StyledTitle variant="h2">Convert CZK</StyledTitle>
            <ExchangeRateConverterForm onSubmit={onSubmit} exchangeRates={exchangeRates} />
            <StyledResult variant="h4">
                {result?.toFixed(3)}
                {' '}
                CZK
            </StyledResult>
        </Wrapper>
    );
}
