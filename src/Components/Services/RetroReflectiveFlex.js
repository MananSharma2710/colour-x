import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
import { FaCloudSunRain } from 'react-icons/fa';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const RetroReflectiveFlex = () => {
    const responsiveSettings = [
        {
            breakpoint: 1024, // Large screens and above
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768, // Medium screens
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480, // Small screens and below
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of slides visible at a time
        slidesToScroll: 1, // Number of slides to scroll
        responsive: responsiveSettings,
    };

    const fullContent = `It is a specialized material that possesses unique light-reflecting properties. This material is engineered with tiny glass beads or microprisms embedded in its surface. When light, such as headlights from vehicles, hits retroreflective flex, it bounces back directly towards its source, enhancing visibility at night or in low-light conditions.
  This property makes it an ideal choice for outdoor advertising, road signs, and safety banners. Its ability to reflect light efficiently ensures that messages and graphics remain conspicuous even in adverse lighting situations, thereby promoting safety and visibility. Moreover, retroreflective flex is durable, weather-resistant, and designed for long-lasting applications, making it a valuable asset.`;

    const [isMobileView, setIsMobileView] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    // Check if the screen width is less than a certain breakpoint (e.g., 768px)
    const checkMobileView = () => {
        setIsMobileView(window.innerWidth < 768);
    };

    // Add an event listener to check for screen width changes
    React.useEffect(() => {
        checkMobileView();
        window.addEventListener("resize", checkMobileView);
        return () => window.removeEventListener("resize", checkMobileView);
    }, []);

    return (
        <div className='container'>
            <div className="container advantages-slider mb-5">
                <Slider {...settings}>
                    <div className="slide">

                    </div>
                    <div className="slide">

                    </div>
                    <div className="slide">

                    </div>
                    <div className="slide">

                    </div>
                    <div className="slide">

                    </div>
                </Slider>
            </div>
            <div className="flex-header">
                <div className="head text-center">
                    <h2>
                        Retro- Reflective
                    </h2>
                </div>
                <div className="head-content text-center">
                    <p>
                        {isMobileView && !isExpanded
                            ? `${fullContent.slice(0, 200)}...`
                            : fullContent}
                        {isMobileView && !isExpanded && (
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsExpanded(true);
                                }}
                                className="read-more-link"
                            >
                                Read More
                            </a>
                        )}
                        {isMobileView && isExpanded && (
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsExpanded(false);
                                }}
                                className="read-less-link"
                            >
                                Read Less
                            </a>
                        )}
                    </p>
                </div>
            </div>

            <div className="flex-content">
                <div className="uses">
                    <div className="usesInner container-fluid">
                        <div className='usesHead'>
                            <div className='usesHeadTitle'>
                                <h2 class="usesTitle">
                                    What are the <span>uses</span> of <span>Retro-Reflective</span> Flex
                                </h2>
                            </div>
                        </div>
                        <div className="usesBody">
                            <ul>
                                <li>
                                    <h3 className='usesListItemTitle'>
                                        Traffic Signs and Safety Signage:
                                    </h3>
                                    <p>
                                        It's properties ensure that these signs remain visible even in low-light situations, especially during nighttime or adverse weather conditions  enhancing road safety.
                                    </p>
                                </li>

                                <li>
                                    <h3 className='usesListItemTitle'>
                                        Advertisements and Hoardings:
                                    </h3>
                                    <p>
                                        Can grab attention and stand out, particularly during the night when regular non-reflective advertisements might be less visible, making it an excellent choice for marketing campaigns
                                    </p>
                                </li>

                                <li>
                                    <h3 className='usesListItemTitle'>
                                        Emergency and Warning Signage:
                                    </h3>
                                    <p>
                                        During emergencies or power outages, the reflective properties help people locate exits and important safety information.
                                    </p>
                                </li>

                                <li>
                                    <h3 className='usesListItemTitle'>
                                        Work Zone Safety:
                                    </h3>
                                    <p>
                                        In construction zones and ,  temporary used as traffic signs, cones, and barrier  along roads enhancing visibility and reducing chances of accidents of workers and motorists.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="why">
                    <div className="whyInner container-fluid">
                        <div className='whyHead'>
                            <div className='whyHeadTitle'>
                                <h2 className="whyTitle">
                                    What are the <span>Advantages</span> of using <span>Retro-Reflective</span> Flex
                                </h2>
                            </div>
                        </div>

                        <div className='row'>
                            <div className="whyList col-md-6">
                                <div className="whyListItem">
                                    <PersonalVideoIcon className='brand-icon' />
                                    <div className="whyListItemTitle">High Visibility:</div>
                                    <div className="whyListItemBody">Particularly in low-light conditions or when illuminated by artificial light sources, significantly enhances safety and the effectiveness of advertisements.</div>
                                </div>
                                <div className="whyListItem">
                                    <EngineeringIcon className='brand-icon' />
                                    <div className="whyListItemTitle">Enhanced Safety:</div>
                                    <div className="whyListItemBody">Helps drivers and pedestrians quickly recognize important information, even from a distance, reducing the chance of accidents.</div>
                                </div>
                                <div className="whyListItem">
                                    <EngineeringIcon className='brand-icon' />
                                    <div className="whyListItemTitle">Durable and Weather-Resistant:</div>
                                    <div className="whyListItemBody">Designed to withstand harsh weather conditions, like exposure to sunlight, rain, ensuring a longer lifespan.</div>
                                </div>
                            </div>
                            <div className="whyList col-md-6">
                                <div className="whyListItem">
                                    <EngineeringIcon className='brand-icon' />
                                    <div className="whyListItemTitle">Cost-Effective Solution:</div>
                                    <div className="whyListItemBody">Although having a higher upfront cost compared to regular materials, its long-lasting nature and effectiveness make it a cost-effective solution over time.</div>
                                </div>

                                <div className="whyListItem">
                                    <EngineeringIcon className='brand-icon' />
                                    <div className="whyListItemTitle">Versatile Applications:</div>
                                    <div className="whyListItemBody">Can easily be customized and applied to various surfaces, making it a versatile material for advertising and safety needs.</div>
                                </div>
                                <div className="whyListItem">
                                    <EngineeringIcon className='brand-icon' />
                                    <div className="whyListItemTitle">Versatility:</div>
                                    <div className="whyListItemBody">Retro-Reflective flex allows for high-quality, vibrant, and sharp printing, making graphics and text stand out.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RetroReflectiveFlex;