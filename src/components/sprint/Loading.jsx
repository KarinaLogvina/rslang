import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import './Loading.scss';

const Loading = ({ error }) => {
    return (
        <div className="loader">
            <CircularProgress color="primary" />
            {error && (
                <div className="error-message">
                    Sorry for inconvenience, please try again later.
                </div>
            )}
        </div>
    );
};

Loading.propTypes = {
    error: PropTypes.bool,
};

Loading.defaultProps = {
    error: false,
};

export default Loading;
