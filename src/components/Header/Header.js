import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import images from '../../assets/images'

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header({ handleShowUpload, title, back, backHome }) {


    return (
        <header className={cx('wrapper')}>
            <NavLink to={`${backHome}`}> <img src={images.logo} alt="Logo tro li ao luat su" onClick={handleShowUpload} /></NavLink>
            <Button color="primary" onClick={() => window.location.href = `${back}`}>
                {title}
            </Button>
        </header>
    );
}

export default Header;