import React from 'react';
import {Card, Layout, Row} from "antd";
import LoginForm from "../../components/LoginForm";
import Navbar from "../../components/Navbar";

const LoginPage = () => {
    return (
        <Layout>
            <Navbar />
            <Row justify="center" align="middle" className="h100">
                <Card>
                    <LoginForm />
                </Card>
            </Row>
        </Layout>
    );
}

export default LoginPage;
