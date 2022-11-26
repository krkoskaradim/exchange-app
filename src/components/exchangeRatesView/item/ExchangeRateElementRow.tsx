import React from 'react';
import {
    TableCell, TableRow, Tooltip,
} from '@mui/material';
import { ExchangeRate } from '../../../hooks/useExchangeRatesData';

export interface ExchangeRateElementParams {
    exchangeRate: ExchangeRate
}

export function ExchangeRateElementRow({ exchangeRate }: ExchangeRateElementParams): JSX.Element {
    const {
        amount, code, country, currency, rate,
    } = exchangeRate;

    return (
        <TableRow>
            <TableCell>{country}</TableCell>
            <TableCell>
                <Tooltip title={currency}>
                    <div>
                        {code}
                    </div>
                </Tooltip>
            </TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{rate}</TableCell>
        </TableRow>
    );
}
