import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import styled from 'styled-components';

const StyledBackdrop = styled(Backdrop)`
    && {
      color: #3f50b5;
    }
`;

export function PageLoader(): JSX.Element {
    return (
        <StyledBackdrop
            open
        >
            <CircularProgress color="inherit" />
        </StyledBackdrop>
    );
}
