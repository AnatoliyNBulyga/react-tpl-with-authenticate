// core
import React from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";
// ant
import {Layout, Menu, Row} from "antd";

const Navbar = () => {
    const {isAuth, user} = useSelector(state => state.auth);
    const {logout} = useActions();

    return (
        <Layout.Header>
            <Row justify="end">
                {

                    isAuth
                    &&
                        <>
                            <div style={{ color: 'white', marginRight: '15px'}}>
                                {user.username}
                            </div>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item
                                    key={1}
                                    onClick={logout}
                                >
                                    Logout
                                </Menu.Item>
                            </Menu>
                        </>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;