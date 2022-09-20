// * styles
import './Features.scss';

const FeaturesCard = ({ title, content, img, styles }) => {
    return (
        <div className="feature" style={styles}>
            {title}
            {content}
            {img}
        </div>
    );
};

export default FeaturesCard;
