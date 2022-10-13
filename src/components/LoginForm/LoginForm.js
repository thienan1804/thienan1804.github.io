import { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from "@mui/material/Button";
import LoginIcon from '@mui/icons-material/Login';
import { UserContext } from '../../App';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';
const cx = classNames.bind(styles);


function LoginForm() {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const location = useLocation()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        // * Rule of formik.values
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Vui lòng nhập email")
                //* Match: khớp 
                .matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Vui lòng nhập đúng định dạng email 'Local-Part@Domail Name'"),
            password: Yup.string()
                .required("Vui lòng nhập mật khẩu")
        }),

        onSubmit: (values) => {
            if (user.loggedIn) return;
            setUser({ loggedIn: true })

            if (location.state?.from) {
                navigate(location.state.from);
            }
        }
    })

    // * Show Pass
    const [showpass, setShowPass] = useState(true)

    return (
        <div className={cx('wrapper')}>
            <Form className={cx('form-wrapper')} onSubmit={(formik.handleSubmit)}>
                <FormGroup className={cx('form-group')}>
                    <Label for='email'>Email</Label>
                    <div className={cx('input-wrapper')}>
                        <Input
                            id='email'
                            type='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder='Nhập email'
                        />
                    </div>
                    {formik.errors.email && (
                        <p className={cx('errors')}>{formik.errors.email}</p>
                    )}
                    <Label for='password'>Mật khẩu</Label>
                    <div className={cx('input-wrapper')}>
                        <Input
                            id='password'
                            value={formik.values.password}
                            type={showpass ? 'password' : 'text'}
                            onChange={formik.handleChange}
                            placeholder='Nhập mật khẩu'
                        />
                        <RemoveRedEyeIcon className={showpass ? cx('showPass') : cx('hidePass')} onClick={() => setShowPass(false)} />
                        <VisibilityOffIcon className={!showpass ? cx('showPass') : cx('hidePass')} onClick={() => setShowPass(true)} />
                    </div>
                    {formik.errors.password && (
                        <p className={cx('errors')}>{formik.errors.password}</p>
                    )}
                    <FormControlLabel className={cx('remember-password')} control={<Checkbox defaultChecked />} label="Nhớ mật khẩu" />
                </FormGroup>
                <Button type="submit"  >
                    <LoginIcon className={cx('iconLogin')} />
                </Button>
                <p onClick={() => window.location.href = '/regist'} className={cx('textFooter')}>Bạn chưa có tài khoản ? Đăng Kí Ngay</p>
            </Form>
        </div >
    );
}

export default LoginForm;