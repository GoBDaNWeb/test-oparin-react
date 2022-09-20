// * react
// * styles
import './Title.scss';

const Title = ({ children, variant, style }) => {
    const Tag = `${variant || 'h3'}`;

    return (
        <Tag className="title" style={style}>
            {children}
        </Tag>
    );
};

export default Title;
