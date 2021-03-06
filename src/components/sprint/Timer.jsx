import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

const Timer = ({ onTimeOut }) => {
    const [current, setCurrent] = useState(60);
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (enabled && current > 0) {
                setCurrent(current - 1);
            } else {
                clearInterval(interval);
                setEnabled(false);
                onTimeOut();
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [current, enabled]);

    return (
        <Box>
            <div className="countdown">
                <div className="countdown__visual">
                    {enabled && (
                        <svg>
                            <circle
                                r="24"
                                cx="26"
                                cy="26"
                                style={{
                                    animation: `countdown-animation 60s linear`,
                                }}
                            />
                        </svg>
                    )}
                </div>
                <span className="countdown__text">{current}</span>
            </div>
        </Box>
    );
};

Timer.propTypes = {
    onTimeOut: PropTypes.func.isRequired,
};

export default Timer;
