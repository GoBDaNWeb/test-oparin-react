// * assets

import phone from '../../../assets/phone.png';
import clock from '../../../assets/clock.png';
import boat2 from '../../../assets/boat2.png';
import sale from '../../../assets/sale.png';

// * styles
import './Main.scss';

// * components
import Title from '../../ui/Title';
import Hero from './components/Hero';
import FeaturesCard from '../../common/FeaturesCard';
import SecondText from '../../ui/SecondText';

const featuresList = [
    {
        title: (
            <Title varinat="h3">
                Быстрый <br /> заказ
            </Title>
        ),
        content: (
            <SecondText>
                Укажите номер телефона, <br /> мы позвоним вам <br /> и оформим
                заказ за вас
            </SecondText>
        ),
        bg: '#DBDBDB',
        img: <img src={phone} className="feature-img" alt="feature img" />,
    },
    {
        title: (
            <Title varinat="h3">
                Соблюдаем <br /> сроки
            </Title>
        ),
        content: <SecondText>Точно и вовремя</SecondText>,
        bg: '#FFCF25',
        img: <img src={clock} className="feature-img" alt="feature img" />,
    },
    {
        title: (
            <Title varinat="h3">
                Мы производители <br /> лодок
            </Title>
        ),
        content: (
            <SecondText>
                Гарантия качества <br /> лодок <br /> от производителя заказ за
                вас
            </SecondText>
        ),
        bg: '#248CFD',
        img: <img src={boat2} className="feature-img" alt="feature img" />,
    },
    {
        title: (
            <Title varinat="h3">
                Наши акции <br /> и специальные <br /> предложения
            </Title>
        ),
        content: null,
        bg: '#7EBD31',
        img: <img src={sale} className="feature-img" alt="feature img" />,
    },
];

const Main = () => {
    return (
        <main className="main">
            <Hero />
            <div className="main-features__list">
                {featuresList.map((item) => (
                    <FeaturesCard
                        key={item.title}
                        title={item.title}
                        content={item.content}
                        img={item.img}
                        styles={{ background: `${item.bg}` }}
                    />
                ))}
            </div>
        </main>
    );
};

export default Main;
