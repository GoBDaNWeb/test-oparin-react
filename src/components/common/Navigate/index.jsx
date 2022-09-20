// * styles
import './Navigate.scss';

const Navigate = ({ navList, styles }) => {
    console.log(styles.nav);
    return (
        <nav className="navigate" style={styles.nav}>
            <ul className="navigate-list" style={styles.ul}>
                {navList.map((item) => (
                    <li
                        key={item.name}
                        className={`navigate-list__item ${
                            item.select && 'selected'
                        }`}
                        style={styles.li}
                    >
                        <button style={styles.btn}>{item.name}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigate;
