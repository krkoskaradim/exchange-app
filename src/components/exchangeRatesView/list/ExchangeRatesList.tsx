import React from 'react';
import styled from 'styled-components';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import { ExchangeRate } from '../../../hooks/useExchangeRatesData';
import { ExchangeRateElementRow } from '../item/ExchangeRateElementRow';
import { StyledTitle } from '../../styled/Typography';

export interface ExchangeRatesListProps {
    exchangeRates: ExchangeRate[]
}

const StyledBox = styled.div`
  overflow: auto
`;

export function ExchangeRatesList({ exchangeRates }: ExchangeRatesListProps): JSX.Element {
    return (
        <StyledBox>
            <StyledTitle variant="h2">
                Exchange rates list
            </StyledTitle>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableCell>Country</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Rate</TableCell>
                    </TableHead>
                    <TableBody>
                        {exchangeRates.map((el) => <ExchangeRateElementRow exchangeRate={el} key={el.code} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledBox>
    );
}
