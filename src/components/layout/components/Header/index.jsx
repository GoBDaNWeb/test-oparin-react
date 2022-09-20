// * styles
import './Header.scss';

// * components
import SecondText from '../../../ui/SecondText';
import Navigate from '../../../common/Navigate';
import Logo from '../../../ui/icons/Logo';
import Burger from '../../../ui/icons/Burger';
import Cities from '../../../ui/icons/Cities';
import Email from '../../../ui/icons/Email';
import ExpandMore from '../../../ui/icons/ExpandMore';
import Telegram from '../../../ui/icons/Telegram';
import Whatsap from '../../../ui/icons/Whatsap';
import Search from '../../../ui/icons/Search';
import Comparison from '../../../ui/icons/Сomparison';
import Selected from '../../../ui/icons/Selected';
import Cart from '../../../ui/icons/Cart';

const navList = [
    { name: 'О компании', select: false },
    { name: 'Оптовикам', select: false },
    { name: 'Продукция', select: false },
    { name: 'Доставка и оплата', select: false },
    { name: 'Гарантия', select: false },
    { name: 'Сертификаты', select: false },
    { name: 'Произодство', select: false },
    { name: 'Статьи', select: false },
    { name: 'Контакты', select: false },
];

const navStyles = {
    ul: {
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
    },
};

const secondTextStyle = {
    lineHeight: '15px',
    marginRight: '1rem',
    marginLeft: '1rem',
};

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="header-top__info">
                    <span>
                        <Cities />
                        Москва
                    </span>
                    <span>
                        <Email />
                        info@toger-boat.ru
                    </span>
                </div>
                <Navigate navList={navList} styles={navStyles} />
                <div className="header-top__features">
                    <span>
                        +7 (909) 140-69-12
                        <ExpandMore />
                    </span>
                    <div className="features__links">
                        <Telegram />
                        <Whatsap />
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="header-bottom__left">
                    <Burger />
                    <Logo />
                    <SecondText styles={secondTextStyle}>
                        лодки пвх от производителя с бесплатной доставкой по
                        россии
                    </SecondText>
                    <Search />
                </div>
                <div className="header-bottom__right">
                    <button>
                        <span>5</span>
                        <Comparison />
                    </button>
                    <button>
                        <span>5</span>
                        <Selected />
                    </button>
                    <button>
                        <span>5</span>
                        <Cart />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
