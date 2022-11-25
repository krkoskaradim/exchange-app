import { useQuery, UseQueryResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { CONSTANTS } from '../constants';

export interface ExchangeRate {
    country: string,
    currency: string,
    amount: number,
    code: string,
    rate: number
}

const fetchExchangeRates = (): Promise<AxiosResponse> => axios.get(CONSTANTS.API.EXCHANGE_RATES_LIST);

const transformExchangeRatesRawData = (data: string): ExchangeRate[] => {
    const rows = data.split('\n');
    rows.splice(0, 2);

    return rows.reduce((acc: ExchangeRate[], curr: string) => {
        if (curr) {
            const [country, currency, amount, code, rate] = curr.split('|');

            acc.push({
                country,
                code,
                amount: Number(amount),
                currency,
                rate: Number(rate),
            });
        }

        return acc;
    }, []);
};

export const useExchangeRatesData = (): UseQueryResult<ExchangeRate[]> => useQuery(
    'exchange-rates',
    fetchExchangeRates,
    {
        select: ({ data }) => transformExchangeRatesRawData(data),
    },
);
