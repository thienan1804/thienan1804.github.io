import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import classNames from 'classnames/bind';
import styles from './RegistForm.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);


function RegistForm() {

    const [noPointer, setNoPointer] = useState(true)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },

        // * Rule of formik.values
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Vui lòng nhập email")
                //* Match: khớp 
                .matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Vui lòng nhập đúng định dạng email 'Local-Part@Domail Name'"),
            password: Yup.string()
                .required("Vui lòng nhập mật khẩu")
                .matches(/^.{8,16}$/, "Mật khẩu phải có ít nhất 8 kí tự và không vượt quá 16 kí tự"),
            confirmPassword: Yup.string()
                .required("Vui lòng xác nhận mật khẩu")
                // * oneOf: check matches
                .oneOf([Yup.ref("password"), null], "Mật khẩu phải khớp")
        }),

        onSubmit: (values) => {
            const resolveAfterSend = new Promise((resolve, reject) => {
                // * Post API
                axios.post('https://62ee32a7c1ef25f3da8476d1.mockapi.io/userdata', {
                    email: values.email,
                    password: values.password,
                })
                    .then(function (response) {
                        setTimeout(resolve, 3000);
                        setNoPointer(false)

                    })
                    .catch(function (error) {
                        setTimeout(reject, 3000);
                        console.log(error);
                    });
            })
            toast.promise(resolveAfterSend, {
                pending: "Dữ liệu đang được gửi đi",
                success: "Bạn đã đăng kí thành công",
                error: "Không thể gửi dữ liệu",
            })
        }
    })


    return (
        <div className={cx('wrapper')}>
            <Form className={cx('form-wrapper')} onSubmit={formik.handleSubmit}>
                <FormGroup className={cx('form-group')}>
                    <Label for='email'>Email</Label>
                    <Input
                        id='email'
                        type='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder='Nhập email'
                    />
                    {formik.errors.email && (
                        <p className={cx('errors')}>{formik.errors.email}</p>
                    )}
                    <Label for='password'>Mật khẩu</Label>
                    <Input
                        id='password'
                        type='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder='Nhập mật khẩu'
                    />
                    {formik.errors.password && (
                        <p className={cx('errors')}>{formik.errors.password}</p>
                    )}
                    <Label for='confirmPassword'>Xác nhận lại mật khẩu</Label>
                    <Input
                        id='confirmPassword'
                        type='password'
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        placeholder='Nhập lại mật khẩu'
                    />
                    {formik.errors.confirmPassword && (
                        <p className={cx('errors')}>{formik.errors.confirmPassword}</p>
                    )}
                </FormGroup>
                <Button type='submit' onMouseDown={formik.handleSubmit} className={noPointer ? cx('btn-log') : cx('btn-log', 'no-pointer')}>
                    <SendIcon className={cx('registIcon')} />
                </Button>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    // draggable
                    pauseOnHover
                />
                {/* <ToastContainer /> */}
            </Form>
        </div >
    );
}

export default RegistForm;