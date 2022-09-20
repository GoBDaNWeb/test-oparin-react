// * react
// * styles
import './Title.scss';

const Title = ({ children, variant, style }) => {
    const Tag = `${variant}`;

    return (
        <Tag className="title" style={style}>
            {children}
        </Tag>
    );
};

export default Title;
