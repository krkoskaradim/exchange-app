import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import styled from 'styled-components';

const StyledBackdrop = styled(Backdrop)`
    && {
      color: #FF4500FF;
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
