import React from 'react';
import { Paper } from '@mui/material';
import styled from 'styled-components';
import { ExchangeRate } from '../../hooks/useExchangeRatesData';
import { ExchangeRateConverterForm } from './form/ExchangeRateConverterForm';
import { StyledTitle } from '../styled/Typography';

export interface ExchangeRateConverterProps {
    exchangeRates: ExchangeRate[]
}

const Wrapper = styled(Paper)`
    padding: 2.5rem;
    text-align: center;
`;

export function ExchangeRateConverter({ exchangeRates }: ExchangeRateConverterProps): JSX.Element {
    return (
        <Wrapper>
            <StyledTitle variant="h2">Convert CZK</StyledTitle>
            <ExchangeRateConverterForm exchangeRates={exchangeRates} />
        </Wrapper>
    );
}
