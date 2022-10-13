import { useContext } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import images from '../../assets/images'

import classNames from 'classnames/bind';
import styles from './HeaderHome.module.scss';

const cx = classNames.bind(styles);

function HeaderHome({ handleShowUpload, text, to, toHome }) {

    const { user, setUser } = useContext(UserContext)


    const handleMovePage = () => {
        if (!user.loggedIn) return; setUser({ loggedIn: false })


    }
    return (
        <header className={cx('wrapper')}>
            <NavLink to={`${toHome}`}> <img src={images.logo} alt="Logo tro li ao luat su" onClick={handleShowUpload} /></NavLink>
            <Button color="primary" onClick={handleMovePage}>
                {text}
            </Button>
        </header>
    );
}

export default HeaderHome;