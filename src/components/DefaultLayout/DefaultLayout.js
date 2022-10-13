
import Grid from '@mui/material/Grid';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import images from '../../assets/images';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);


function DefaultLayout({ text }) {
    return (
        <Grid item lg={6} md={6} sm={6} xs={6} className={cx('images-wrapper')}>
            <img src={images.maskGr} alt="maskGr" />
            <div className={cx('circle', 'green')}></div>
            <div className={cx('circle', 'yellow', 'big-yellow')}></div>
            <div className={cx('circle', 'yellow', 'small-yellow')}></div>
            <div className={cx('circle', 'blur-blue', 'big-blue')}></div>
            <div className={cx('circle', 'blur-blue', 'small-blue')}></div>
            <div className={cx('circle', 'skin')}></div>
            <ChatBubbleIcon className={cx('purple')} />
        </Grid>
    );
}

export default DefaultLayout;