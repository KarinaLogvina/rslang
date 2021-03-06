import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
    ClickAwayListener,
    Drawer,
    Divider,
    IconButton,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { pagePropType } from '../router/pages';

const sidebarWidth = 240;

const styles = makeStyles(() => ({
    sidebar: {
        width: sidebarWidth,
        flexShrink: 0,
    },
    sidebarPaper: {
        width: sidebarWidth,
    },
}));

const Sidebar = ({ pages, isOpen, setIsOpen, auth }) => {
    const location = useLocation();
    const classes = styles();
    return (
        <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={() => {
                if (isOpen) {
                    setIsOpen(false);
                }
            }}
        >
            <Drawer
                variant="persistent"
                anchor="left"
                className={classes.sidebar}
                classes={{
                    paper: classes.sidebarPaper,
                }}
                open={isOpen}
            >
                <div>
                    <IconButton
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {pages
                        .filter((e) => !e.userMenuPage && (!e.auth || auth === e.auth))
                        .map((link) => {
                            const current = link.url === location.pathname;
                            return (
                                <Link
                                    style={{
                                        color: current ? '#828282' : '#202020',
                                        textDecoration: 'none',
                                    }}
                                    to={link.url}
                                    key={link.title}
                                    onClick={() => {
                                        setIsOpen(false);
                                    }}
                                >
                                    <ListItem button>
                                        <ListItemText primary={link.title} />
                                    </ListItem>
                                </Link>
                            );
                        })}
                </List>
            </Drawer>
        </ClickAwayListener>
    );
};

Sidebar.propTypes = {
    pages: PropTypes.arrayOf(pagePropType).isRequired,
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    auth: PropTypes.bool.isRequired,
};

export default Sidebar;
