import React, { useState } from 'react';
import {
    Box,
    Button, Paper,
    TextField, Typography,
} from '@mui/material';
import {
    FormikProvider, useFormik,
} from 'formik';
import * as Yup from 'yup';
import { SchemaOf } from 'yup';
import styled from 'styled-components';
import { ExchangeRate } from '../../../hooks/useExchangeRatesData';
import { ExchangeRateCurrencySelect } from './ExchangeRateCurrencySelect';
import { ExchangeRateAmountInCZK } from './ExchangeRateAmountInCZK';

export interface ExchangeRateConverterFormSchema {
    amountInCZK: number
    currencyRate: number
}

export interface ExchangeRateConverterFormProps {
    exchangeRates: ExchangeRate[]
}

const Wrapper = styled(Paper)`
    margin: 2rem;
    text-align: center;
    justify-content: center;
`;

const StyledTypography = styled(Typography)`
    min-height: 1ch;
`;

export function ExchangeRateConverterForm({ exchangeRates }: ExchangeRateConverterFormProps): JSX.Element {
    const [result, setResult] = useState<number | null>(null);

    const validationSchema: SchemaOf<ExchangeRateConverterFormSchema> = Yup.object().shape({
        amountInCZK: Yup.number().required().moreThan(0),
        currencyRate: Yup.number().required().moreThan(0),
    });

    const initialValues: ExchangeRateConverterFormSchema = {
        amountInCZK: 0,
        currencyRate: 0,
    };

    const onSubmit = ({ amountInCZK, currencyRate }: ExchangeRateConverterFormSchema): void => {
        setResult((amountInCZK / currencyRate) || 0);
    };

    const formik = useFormik<ExchangeRateConverterFormSchema>({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <Wrapper>
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
                <StyledTypography>{result}</StyledTypography>
            </FormikProvider>
        </Wrapper>
    );
}
