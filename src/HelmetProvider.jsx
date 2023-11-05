import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelmetProvider = ({ pagename }) => {

    return <Helmet>
        <title>Littlestarscare || {pagename}</title>
    </Helmet>
};

export default HelmetProvider;