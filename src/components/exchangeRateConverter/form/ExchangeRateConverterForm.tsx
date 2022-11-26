import React from 'react';
import {
    Box,
    Button,
} from '@mui/material';
import {
    FormikProvider, useFormik,
} from 'formik';
import * as Yup from 'yup';
import { SchemaOf } from 'yup';
import { ExchangeRate } from '../../../hooks/useExchangeRatesData';
import { ExchangeRateCurrencySelect } from './ExchangeRateCurrencySelect';
import { ExchangeRateAmountInCZK } from './ExchangeRateAmountInCZK';

export interface ExchangeRateConverterFormSchema {
    amountInCZK: number
    currencyRate: number
}

export interface ExchangeRateConverterFormProps {
    exchangeRates: ExchangeRate[]
    onSubmit: ({ amountInCZK, currencyRate }: ExchangeRateConverterFormSchema) => void
}

export function ExchangeRateConverterForm({ exchangeRates, onSubmit }: ExchangeRateConverterFormProps): JSX.Element {
    const validationSchema: SchemaOf<ExchangeRateConverterFormSchema> = Yup.object().shape({
        amountInCZK: Yup.number().required().moreThan(0),
        currencyRate: Yup.number().required().moreThan(0),
    });

    const initialValues: ExchangeRateConverterFormSchema = {
        amountInCZK: 0,
        currencyRate: 0,
    };

    const formik = useFormik<ExchangeRateConverterFormSchema>({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <FormikProvider value={formik}>
            <form
                onSubmit={formik.handleSubmit}
            >
                <Box component="form">
                    <ExchangeRateAmountInCZK name="amountInCZK" />
                    <ExchangeRateCurrencySelect name="currencyRate" exchangeRates={exchangeRates} />
                </Box>
                <Button type="submit">Convert</Button>
            </form>
        </FormikProvider>
    );
}
