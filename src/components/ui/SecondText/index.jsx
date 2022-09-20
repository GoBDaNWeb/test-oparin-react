// * styles
import './SecondText.scss';

const SecondText = ({ children, styles }) => {
    return (
        <span className="second-text" style={styles}>
            {children}
        </span>
    );
};

export default SecondText;
