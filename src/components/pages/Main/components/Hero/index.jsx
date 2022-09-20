// * assets
import boat from '../../../../../assets/boat.png';
import person from '../../../../../assets/person.png';

// * styles
import './Hero.scss';

// * components
import Title from '../../../../ui/Title';
import SliderBtn from '../../../../ui/SliderBtn';
import Next from '../../../../ui/icons/Next';
import Last from '../../../../ui/icons/Last';

const nameTitleStyle = {
    fontSize: '1.6rem',
    textAlign: 'left',
    fontWeight: 'normal',
    color: '#fff',
};

const Hero = () => {
    return (
        <div className="main-hero">
            <div className="slider">
                <div className="slider-content">
                    <Title variant="h1" style={nameTitleStyle}>
                        Моторная лодка <br /> ПВХ Zefir 3100 LT (малокилеваня)
                    </Title>
                    <div className="price">
                        <span className="old-price">43 700 ₽</span>
                        <Title variant="h3">43 700 ₽</Title>
                    </div>
                    <SliderBtn>Оформить заказ</SliderBtn>
                    <div className="slider-arrows">
                        <Last />
                        <Next />
                    </div>
                </div>
                <img src={boat} className="boat" alt="boat" />
                <img src={person} className="person" alt="person" />
            </div>
        </div>
    );
};

export default Hero;
