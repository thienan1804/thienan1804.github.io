import Button from "@mui/material/Button";
import BackspaceIcon from '@mui/icons-material/Backspace';
import CloseIcon from '@mui/icons-material/Close';

import classNames from 'classnames/bind';
import styles from './Boxcheck.module.scss';
const cx = classNames.bind(styles);

function Boxcheck({ getName, handleCloseBox, getFile, handleShowCate }) {


    return (
        <div className={cx('wrapper')} onClick={handleCloseBox}>
            <div className={cx('modal-container')} onClick={(e) => e.stopPropagation()}>
                <button className={cx('close-btn')} onClick={handleCloseBox}>
                    <CloseIcon className={cx('close-icon')} />
                </button>
                <header className={cx('header')}>
                    Xác nhận chọn file
                </header>
                <div className={cx('body')}>
                    <h2>Bạn có chắc muốn chọn file  <a href={getFile}>{getName}</a> không?</h2>
                    <div className={cx('body-answer')}>
                        <Button variant="outlined" startIcon={<BackspaceIcon />} onClick={handleCloseBox}>
                            Hủy
                        </Button>
                        <Button variant="contained" onClick={handleShowCate}>
                            Xác nhận
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Boxcheck;