import React from 'react';
import { Grid } from '@mui/material';
import { useExchangeRatesData } from '../../hooks/useExchangeRatesData';
import { ExchangeRatesList } from './list/ExchangeRatesList';
import { PageLoader } from '../common/PageLoader';
import { ExchangeRateConverter } from '../exchangeRateConverter/ExchangeRateConverter';

export function ExchangeRatesView(): JSX.Element {
    const { isLoading, data } = useExchangeRatesData();

    if (isLoading) {
        return <PageLoader />;
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            // alignItems="center"
            spacing={4}
        >
            <Grid item md={6}><ExchangeRatesList exchangeRates={data || []} /></Grid>
            <Grid item md={6}><ExchangeRateConverter exchangeRates={data || []} /></Grid>
        </Grid>
    );
}
