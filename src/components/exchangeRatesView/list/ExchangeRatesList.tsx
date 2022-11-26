import React from 'react';
import styled from 'styled-components';
import { ExchangeRate } from '../../../hooks/useExchangeRatesData';
import { ExchangeRateElement } from '../item/ExchangeRateElement';
import { StyledTitle } from '../../styled/Typography';

export interface ExchangeRatesListProps {
    exchangeRates: ExchangeRate[]
}

const StyledBox = styled.div`
  overflow: auto;
`;

export function ExchangeRatesList({ exchangeRates }: ExchangeRatesListProps): JSX.Element {
    return (
        <StyledBox>
            <StyledTitle variant="h2">
                Exchange rates list
            </StyledTitle>
            {exchangeRates.map((el) => <ExchangeRateElement exchangeRate={el} key={el.code} />)}
        </StyledBox>
    );
}
