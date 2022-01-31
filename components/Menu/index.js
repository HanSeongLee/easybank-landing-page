import React, {useCallback, useEffect, useState} from 'react';
import styles from './style.module.scss';
import MenuContainer from "../../containers/MenuContainer";
import Container from "../Container";
import cn from "classnames";
import Button from "../Button";

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const onMenuToggle = useCallback(() => {
        setMenuOpen(!menuOpen);
    }, [menuOpen]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'initial';
    }, [menuOpen]);

    return (
        <nav className={styles.nav}>
            <ul className={cn(styles.menuBackdrop, {
                [styles.open]: menuOpen,
            })}>
                <Container>
                    <div className={styles.menuWrapper}>
                        <MenuContainer/>
                    </div>
                </Container>
            </ul>

            <button className={styles.menuButton}
                    onClick={onMenuToggle}
            >
                {!menuOpen ? (
                    <img src={'/icons/icon-hamburger.svg'}
                         alt={'menu'}
                    />
                ) : (
                    <img src={'/icons/icon-close.svg'}
                         alt={'close'}
                    />
                )}

            </button>
            <div className={styles.requestInviteButtonWrapper}>
                <Button>
                    Request Invite
                </Button>
            </div>
        </nav>
    );
};

export default Menu;
