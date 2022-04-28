import React, { ReactNode, createElement } from 'react';
import lodashGet from 'lodash/get';
import clsx from 'clsx';
import { useResourceDefinitions, useGetResourceLabel, useCreatePath,} from 'ra-core';
import { DRAWER_WIDTH, CLOSED_DRAWER_WIDTH, useSidebarState, DashboardMenuItem, MenuItemLink } from 'react-admin';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import AddIcon from '@mui/icons-material/Add'
import DefaultIcon from '@mui/icons-material/ViewList';

const Menu = (props: MenuProps) => {

    const resources = useResourceDefinitions();
    const getResourceLabel = useGetResourceLabel();
    const createPath = useCreatePath();

    const {
        hasDashboard,
        dense,
        children = (
            <>
                {hasDashboard && <DashboardMenuItem dense={dense} />}
                {Object.keys(resources)
                    .filter(name => resources[name].hasList)
                    .map(name => (
                        <MenuItemLink
                            key={name}
                            to={createPath({
                                resource: name,
                                type: 'list',
                            })}
                            state={{ _scrollToTop: true }}
                            primaryText={getResourceLabel(name, 2)}
                            leftIcon={
                                resources[name].icon ? (
                                    createElement(resources[name].icon)
                                ) : (
                                    <DefaultIcon />
                                )
                            }
                            dense={dense}
                        />
                    ))}
                <MenuItemLink
                    key="/PossessionSettings/create"
                    to="/PossessionSettings/create"
                    state={{ _scrollToTop: true }}
                    primaryText="Přidat"
                    leftIcon={<AddIcon />}
                    dense={dense}
                />
            </>
        ),
        className,
        ...rest
    } = props;

    const [open] = useSidebarState();

    return (
        <Root
            className={clsx(
                {
                    [MenuClasses.open]: open,
                    [MenuClasses.closed]: !open,
                },
                className
            )}
            {...rest}
        >
            {children}
        </Root>
    );
};

export interface MenuProps {
    children?: ReactNode;
    className?: string;
    dense?: boolean;
    hasDashboard?: boolean;
}

Menu.propTypes = {
    className: PropTypes.string,
    dense: PropTypes.bool,
    hasDashboard: PropTypes.bool,
};

const PREFIX = 'RaMenu';

export const MenuClasses = {
    open: `${PREFIX}-open`,
    closed: `${PREFIX}-closed`,
};

const Root = styled('div', {
    name: PREFIX,
    overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: '0.5em',
    marginBottom: '1em',
    [theme.breakpoints.only('xs')]: {
        marginTop: 0,
    },
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),

    [`&.${MenuClasses.open}`]: {
        width: lodashGet(theme, 'sidebar.width', DRAWER_WIDTH),
    },

    [`&.${MenuClasses.closed}`]: {
        width: lodashGet(theme, 'sidebar.closedWidth', CLOSED_DRAWER_WIDTH),
    },
}));

export default Menu
/*import React from 'react'
import { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { useMediaQuery, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import DefaultIcon from '@material-ui/icons/ViewList'
import AddIcon from '@mui/icons-material/Add'
import { DashboardMenuItem, MenuItemLink, useGetResourceLabel, getResources } from 'react-admin'
import classnames from 'classnames'
import { get as lodashGet } from 'lodash'

export const MENU_WIDTH = 240;
export const CLOSED_MENU_WIDTH = 55;

const useStyles = makeStyles(
    theme => ({
        main: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginTop: '0.5em',
            [theme.breakpoints.only('xs')]: {
                marginTop: 0,
            },
            [theme.breakpoints.up('md')]: {
                marginTop: '1.5em',
            },
        },
        open: {
            width: lodashGet(theme, 'menu.width', MENU_WIDTH),
        },
        closed: {
            width: lodashGet(theme, 'menu.closedWidth', CLOSED_MENU_WIDTH),
        },
    }),
    { name: 'RaMenu' }
);

const Menu: FC<MenuProps> = props => {
    const {
        classes: classesOverride,
        className,
        dense,
        hasDashboard,
        onMenuClick,
        logout,
        ...rest
    } = props

    const classes = useStyles(props);
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('xs')
    )
    const open = useSelector((state: ReduxState) => state.admin.ui.sidebarOpen)
    const resources = useSelector(getResources, shallowEqual) as Array<any>
    const getResourceLabel = useGetResourceLabel()

    return (
        <div
            className={classnames(
                classes.main,
                {
                    [classes.open]: open,
                    [classes.closed]: !open,
                },
                className
            )}
            {...rest}
        >
            {hasDashboard && (
                <DashboardMenuItem
                    onClick={onMenuClick}
                    dense={dense}
                    sidebarIsOpen={open}
                />
            )}
            {resources
                .filter(r => r.hasList)
                .map(resource => (
                    //@ts-ignore
                    <MenuItemLink
                        key={resource.name}
                        to={{
                            pathname: `/${resource.name}`,
                            state: { _scrollToTop: true },
                        }}
                        primaryText={getResourceLabel(resource.name, 2)}
                        leftIcon={
                            resource.icon ? <resource.icon /> : <DefaultIcon />
                        }
                        onClick={onMenuClick}
                        dense={dense}
                        sidebarIsOpen={open}
                    />
                ))}
            {//@ts-ignore
                <MenuItemLink
                    to="/ArticleSettings/create"
                    primaryText="Přidat"
                    leftIcon={<AddIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}

                />
            }
            {isXSmall && logout}
        </div>
    );
};

export interface MenuProps {
    classes?: object;
    className?: string;
    dense?: boolean;
    hasDashboard?: boolean;
    logout?: ReactNode;
    onMenuClick?: () => void;
}

Menu.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    dense: PropTypes.bool,
    hasDashboard: PropTypes.bool,
    logout: PropTypes.element,
    onMenuClick: PropTypes.func,
};

Menu.defaultProps = {
    onMenuClick: () => null,
};

export default Menu*/