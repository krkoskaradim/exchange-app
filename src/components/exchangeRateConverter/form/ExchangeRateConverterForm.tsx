import React, { useMemo, useState } from 'react';
import {
    Box,
    Button, Typography,
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
    currencyCode: string
}

export interface ExchangeRateConverterFormProps {
    exchangeRates: ExchangeRate[]
}

const StyledResult = styled(Typography)`
    height: 3rem;
    padding: 3rem;
`;

function ExchangeRateResult({ result }: {result: string | null}): JSX.Element {
    if (!result) {
        return <StyledResult />;
    }

    return (
        <StyledResult variant="h4">
            {result}
        </StyledResult>
    );
}

export function ExchangeRateConverterForm({ exchangeRates }: ExchangeRateConverterFormProps): JSX.Element {
    const [result, setResult] = useState<string | null>(null);

    const exchangeRatesByCodeId = useMemo(
        () => new Map<string, ExchangeRate>(exchangeRates.map((el) => [el.code, el])),
        [exchangeRates],
    );

    const onSubmit = ({ amountInCZK, currencyCode }: ExchangeRateConverterFormSchema): void => {
        const exchangeRate = exchangeRatesByCodeId.get(currencyCode);

        if (exchangeRate) {
            setResult(`${(((amountInCZK / exchangeRate.rate) * exchangeRate.amount) || 0).toFixed(3)} ${currencyCode}`);
        }
    };

    const validationSchema: SchemaOf<ExchangeRateConverterFormSchema> = Yup.object().shape({
        amountInCZK: Yup.number().required().moreThan(0),
        currencyCode: Yup.string().required(),
    });

    const initialValues: ExchangeRateConverterFormSchema = {
        amountInCZK: 0,
        currencyCode: '',
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
                <Box>
                    <ExchangeRateAmountInCZK name="amountInCZK" />
                    <ExchangeRateCurrencySelect name="currencyCode" exchangeRates={exchangeRates} />
                </Box>
                <Button variant="contained" type="submit">Convert</Button>
                <ExchangeRateResult result={result} />
            </form>
        </FormikProvider>
    );
}
