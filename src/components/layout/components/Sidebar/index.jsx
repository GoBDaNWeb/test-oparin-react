// * styles
import './Sidebar.scss';

// * components
import Navigate from '../../../common/Navigate';
import SecondText from '../../../ui/SecondText';

const navList = [
    { name: 'Каталог', select: false },
    { name: 'Пнд', select: false },
    { name: 'Аэро', select: false },
    { name: 'Под заказ', select: false },
    { name: 'Распродажа', select: true },
];

const navStyles = {
    ul: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    btn: {
        textTransform: 'uppercase',
    },
};

const Sidebar = () => {
    return (
        <sidebar className="sidebar">
            <Navigate navList={navList} styles={navStyles} />
            <SecondText>
                610033, Россия, Киров, Романа Ердякова, 42а, кор. 3
            </SecondText>
            <SecondText>
                Пн-Пт. с 10:00 до 17:00
                <br />
                (буз перерыва на обед)
            </SecondText>
        </sidebar>
    );
};

export default Sidebar;
