// * styles
import './Layout.scss';

// * components
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className="layout-content">
                <Sidebar />
                {children}
            </div>
        </div>
    );
};

export default Layout;
