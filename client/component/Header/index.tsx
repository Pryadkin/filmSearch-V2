import Link from 'next/link';

import styles from './Header.module.scss'

const navigation = [
    {id: 1, title: 'Home', path: '/home'},
    {id: 2, title: 'Search', path: '/search'},
];

const Header = () => {
    console.log('hey')
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Movies</div>
            <div className={styles.navbar}>
                {navigation.map(({id, path, title}) => (
                    <Link key={id} href={path}><a className={styles.link}>{title}</a></Link>
                ))}
            </div>
        </div>
    );
};

export default Header;
