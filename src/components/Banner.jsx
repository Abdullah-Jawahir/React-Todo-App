import bgDesktopDarkImg from '../assets/bg-desktop-dark.jpg';
import bgDesktopLightImg from '../assets/bg-desktop-light.jpg';
import bgMobileDarkImg from '../assets/bg-mobile-dark.jpg';
import bgMobileLightImg from '../assets/bg-mobile-light.jpg';
import PropTypes from 'prop-types';

export const Banner = ({ isLightTheme }) => {

    const curWinWidth = window.outerWidth;
    let bannerStyles = {

        backgroundImage: '',
    }


    if (curWinWidth <= 430) {
        bannerStyles.backgroundImage = `url(${isLightTheme ? bgMobileLightImg : bgMobileDarkImg})`

    } else {
        bannerStyles.backgroundImage = `url(${isLightTheme ? bgDesktopLightImg : bgDesktopDarkImg})`
    }



    return (
        <div className="banner" style={bannerStyles} ></div>
    )
}

Banner.propTypes = {

    isLightTheme: PropTypes.bool.isRequired,
}
