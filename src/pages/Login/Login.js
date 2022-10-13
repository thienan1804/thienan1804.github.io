import DefaultLayout from '../../components/DefaultLayout';
import Header from '../../components/Header';
import Grid from '@mui/material/Grid';
import LoginForm from '../../components/LoginForm'

import classNames from 'classnames/bind';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);


function Login() {
    return (
        <div className={cx('wrapper')}>
            <Header title="Đăng kí" back='/regist' backHome='/login' />
            {/* <HeaderHome text="Đăng kí" toHome='/login' /> */}
            <Grid container className={cx('wrapper')} columns={12}>
                <DefaultLayout text='Đăng kí' />
                <Grid item className={cx('content-wrapper')}>
                    <h2>Đăng Nhập</h2>
                    <LoginForm />
                </Grid>
            </Grid >
        </div>
    );
}

export default Login;
