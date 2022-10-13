import Grid from '@mui/material/Grid';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import images from '../../../../assets/images';
import DefaultLayout from '../../../../components/DefaultLayout';

import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
const cx = classNames.bind(styles);
function Upload({ handlePreviewFile }) {
    return (
        <Grid container className={cx('wrapper')} columns={12}>
            <DefaultLayout text='Đăng xuất' to='/login' />

            <Grid item lg={6} md={6} sm={6} xs={6} className={cx('content-wrapper')}>
                <div className={cx('content-box')}>
                    <img src={images.wordCircle} alt='wordCircle' />
                    <label variant="contained" htmlFor='fileUpload'>
                        <FileUploadOutlinedIcon className={cx('upload-icon')} />
                        <span> Chọn file</span>
                    </label>
                    <input
                        type='file'
                        hidden
                        id='fileUpload'
                        // * Cho phép chỉ chọn đc file word
                        accept="application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={handlePreviewFile}
                        //* Reset value
                        onClick={(e) => e.target.value = null}
                    />
                    <p>Hoặc kéo tệp để tải lên</p>
                </div>
            </Grid>
        </Grid>
    );
}

export default Upload;