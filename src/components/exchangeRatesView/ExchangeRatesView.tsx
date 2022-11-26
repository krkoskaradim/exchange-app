import React from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import { useExchangeRatesData } from '../../hooks/useExchangeRatesData';
import { ExchangeRatesList } from './list/ExchangeRatesList';
import { PageLoader } from '../common/PageLoader';
import { ExchangeRateConverter } from '../exchangeRateConverter/ExchangeRateConverter';

const StickyWrapper = styled.div`
    position: sticky;
    top: 50%;
    transform: translate(0, -50%);
`;

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
            spacing={4}
        >
            <Grid item sm={12} md={12} lg={8}>
                <ExchangeRatesList exchangeRates={data || []} />
            </Grid>
            <Grid item sm={12} md={12} lg={4}>
                <StickyWrapper>
                    <ExchangeRateConverter exchangeRates={data || []} />
                </StickyWrapper>
            </Grid>
        </Grid>
    );
}
