import bgDesktopDarkImg from '../assets/bg-desktop-dark.jpg';
import bgDesktopLightImg from '../assets/bg-desktop-light.jpg';
import PropTypes from 'prop-types';

export const Banner = ({ isLightTheme }) => {

    const bannerStyles = {

        backgroundImage: `url(${isLightTheme ? bgDesktopLightImg : bgDesktopDarkImg})`
    }


    return (
        <div className="banner" style={bannerStyles} ></div>
    )
}

Banner.propTypes = {

    isLightTheme: PropTypes.bool.isRequired,
}
