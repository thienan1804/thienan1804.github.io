
import classNames from 'classnames/bind';
import styles from './HeaderCate.module.scss';
const cx = classNames.bind(styles);


function HeaderCate({ logo, title, closeIcon }) {
    return (
        <div className={cx('wrapper')}>
            <img src={logo} alt='wordLogo' />
            <h2>{title}</h2>
            {closeIcon}
        </div>
    );
}

export default HeaderCate;