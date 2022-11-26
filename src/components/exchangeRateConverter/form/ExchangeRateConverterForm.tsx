import React, { useState } from 'react';
import {
    Button,
    TextField,
} from '@mui/material';
import {
    FormikProvider, useFormik,
} from 'formik';
import * as Yup from 'yup';
import { SchemaOf } from 'yup';
import { ExchangeRate } from '../../../hooks/useExchangeRatesData';
import { StyledFormControl } from '../../styled/FormInputs';
import { ExchangeRateCurrencySelect } from './ExchangeRateCurrencySelect';

export interface ExchangeRateConverterFormSchema {
    amountInCZK: number
    currencyRate: number
}

export interface ExchangeRateConverterFormProps {
    exchangeRates: ExchangeRate[]
}

export function ExchangeRateConverterForm({ exchangeRates }: ExchangeRateConverterFormProps): JSX.Element {
    const [result, setResult] = useState<number | null>(null);

    const validationSchema: SchemaOf<ExchangeRateConverterFormSchema> = Yup.object().shape({
        amountInCZK: Yup.number().required().min(0),
        currencyRate: Yup.number().required().min(0),
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
        <FormikProvider value={formik}>
            <form
                onSubmit={formik.handleSubmit}
            >
                <StyledFormControl>
                    <TextField
                        id="amountInCZK"
                        name="amountInCZK"
                        label="Amount in CZK"
                        type="number"
                        onChange={formik.handleChange}
                    />
                </StyledFormControl>
                <ExchangeRateCurrencySelect exchangeRates={exchangeRates || []} />
                <Button type="submit">Submit</Button>
            </form>
            {result}
        </FormikProvider>
    );
}
