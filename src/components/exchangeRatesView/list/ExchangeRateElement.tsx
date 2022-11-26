import React from 'react';
import {
    Box, Card, Stack, ListItem, Tooltip,
} from '@mui/material';
import styled from 'styled-components';
import { ExchangeRate } from '../../../hooks/useExchangeRatesData';

export interface ExchangeRateElementParams {
    exchangeRate: ExchangeRate
}

const StyledCard = styled(Card)`
    padding: 1rem
`;

export function ExchangeRateElement({ exchangeRate }: ExchangeRateElementParams): JSX.Element {
    const {
        amount, code, country, currency, rate,
    } = exchangeRate;

    return (
        <StyledCard>
            <Stack direction="row">
                <ListItem>{country}</ListItem>
                <ListItem>{currency}</ListItem>
                <ListItem>{code}</ListItem>
                <ListItem>{amount}</ListItem>
                <ListItem>{rate}</ListItem>
            </Stack>
        </StyledCard>
    );
}
