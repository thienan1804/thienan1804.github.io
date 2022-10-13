import DefaultLayout from '../../components/DefaultLayout';
import Header from '../../components/Header';
import Grid from '@mui/material/Grid';
import RegistForm from '../../components/RegistForm'

import classNames from 'classnames/bind';
import styles from './Regist.module.scss';
const cx = classNames.bind(styles);


function Regist() {

    return (
        <div className={cx('wrapper')}>
            <Header title="Đăng nhập" back='/login' backHome='/regist' />
            <Grid container className={cx('wrapper')} columns={12}>
                <DefaultLayout text='Đăng kí' />
                <Grid item className={cx('content-wrapper')}>
                    <h2>Đăng Kí Tài Khoản</h2>
                    <RegistForm />
                </Grid>
            </Grid >
        </div>
    );
}

export default Regist;
