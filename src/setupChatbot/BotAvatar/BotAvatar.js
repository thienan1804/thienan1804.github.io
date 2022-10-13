import images from '../../assets/images';

import classNames from 'classnames/bind';
import styles from './BotAvatar.module.scss';
const cx = classNames.bind(styles);

function BotAvatar() {
    return (
        <img src={images.balance} className={cx('bot-avatar')} alt='AvtBot' />
    );
}

export default BotAvatar;