import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import emailjs from '@emailjs/browser';
import { EMAIL_JS } from '../constant/constant.js';
import styled from 'styled-components';
import SendIcon from '../icons/SendIcon.jsx';

const SuccessPage = ({ setSuccess, form }) => (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-dark flex flex-col items-center justify-center text-light">
        <div className="text-blue-400">
            <SendIcon />
        </div>
        <h1>Message received. Thanks!</h1>
        <div className="text-base font-semibold">I'll reach out ASAP.</div>

        <button
            onClick={() => {
                form.resetFields();
                setSuccess(false);
            }}
            className="mt-8 py-4 px-16 bg-transparent hover:bg-darkGray border-solid  border-light rounded-full text-light text-base cursor-pointer"
        >
            Close
        </button>
    </div>
);

const CustomTextArea = styled(Input.TextArea)`
    :where(.css-dev-only-do-not-override-1e3x2xa).ant-input {
        font-size: 20px !important;
    }
    border-radius: 10px;
    background: #495057 !important;
    border: none !important;
    color: #e9ecef;
    &::placeholder {
        color: #999;
    }
`;

const CustomInput = styled(Input)`
    :where(.css-dev-only-do-not-override-1e3x2xa).ant-input {
        height: 50px !important;
        font-size: 20px !important;
    }
    background: #495057 !important;
    border: none !important;
    color: #e9ecef;

    &::placeholder {
        color: #999;
    }

    :where(.css-dev-only-do-not-override-sk7ap8).ant-input-disabled,
    :where(.css-dev-only-do-not-override-sk7ap8).ant-input[disabled] {
        color: #a4a5a7;
    }
`;

function Contact() {
    const [form] = Form.useForm();
    const [success, setSuccess] = useState(false);
    const handleFinish = (value) => {
        emailjs
            .send(
                EMAIL_JS.serviceId,
                EMAIL_JS.templateId,
                value,
                EMAIL_JS.publicKey
            )
            .then(
                () => {
                    setSuccess(true);
                },
                (error) => {
                    console.log({ error });
                }
            );
    };
    return (
        <div id="contact" className="main-content bg-dark">
            <div className="max-w-6xl mx-auto px-4 pt-16">
                <h1 className="text-light mt-0">Contact</h1>
                <div className="max-w-4xl mx-auto">
                    <Form form={form} layout="vertical" onFinish={handleFinish}>
                        <div className="sm:flex sm:gap-x-4 items-center justify-between">
                            <Form.Item
                                required={false}
                                label="First Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'First name is required!',
                                    },
                                ]}
                                className="w-full"
                                name="first_name"
                            >
                                <CustomInput
                                    size="large"
                                    placeholder="First Name"
                                />
                            </Form.Item>
                            <Form.Item
                                required={false}
                                label="Last Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Last name is required!',
                                    },
                                ]}
                                className="w-full"
                                name="last_name"
                            >
                                <CustomInput
                                    size="large"
                                    placeholder="Last Name"
                                />
                            </Form.Item>
                        </div>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Email is required!',
                                },
                                {
                                    type: 'email',
                                    message: 'Invalid email format!',
                                },
                            ]}
                            required={false}
                            label="Email"
                            name="email"
                        >
                            <CustomInput size="large" placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            required={false}
                            label="Phone Number"
                            name="phone"
                        >
                            <CustomInput
                                size="large"
                                placeholder="Phone Number"
                            />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Message is required!',
                                },
                            ]}
                            required={false}
                            label="Your Message"
                            name="message"
                        >
                            <CustomTextArea
                                placeholder="Your Message"
                                rows={8}
                            />
                        </Form.Item>
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="mt-8 py-4 px-16 bg-transparent hover:bg-darkGray border-solid  border-light rounded-full text-light text-base cursor-pointer"
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
            {success && <SuccessPage setSuccess={setSuccess} form={form} />}
        </div>
    );
}

export default Contact;
