import React, {useState} from 'react';
// ant
import {Button, Form, Input, Row} from 'antd';
import {rules} from "../utils/rules";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";

const LoginForm = () => {
    const {error, isLoading} = useSelector(state => state.auth);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useActions();

    const submit = () => {
        login(username, password);
    }
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    return (
        <Form
            {...layout}
            onFinish={submit}
        >
            {
                error &&
                <div style={{color: 'red', marginBottom: '10px'}}>
                    {error}
                </div>
            }
            <Form.Item
                label="User name"
                name="username"
                rules={[rules.required('Enter user name')]}
            >
                <Input value={username} onChange={e => setUserName(e.target.value)} />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Enter password')]}
            >
                <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Log in
                    </Button>
                </Form.Item>
            </Row>

        </Form>
    );
};

export default LoginForm;
