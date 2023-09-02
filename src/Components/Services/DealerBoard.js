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

const DealerBoard = () => {

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

  const fullContent = `It refer to prominent signage displaying the names and contact information of dealers or distributors of various products or services. These boards are strategically placed at specific locations to enhance visibility and attract potential customers. Dealer boards are indispensable tools for brand promotion and marketing, serving as a visual point of reference for consumers seeking specific products or services within a given area. These are crafted using flexible, durable materials like PVC or vinyl, making them suitable for outdoor use. They are typically designed to be eye-catching, featuring vibrant colors, legible fonts, and sometimes, graphic elements that align with the brand's identity. In essence, dealer boards serve as a critical component of advertising and local outreach, aiding businesses in establishing a strong presence in their target markets.`;

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
            Dealer Board
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
                  What are the <span>uses</span> of <span>DealerBoard</span>
                </h2>
              </div>
            </div>
            <div className="usesBody">
              <ul>
                <li>
                  <h3 className='usesListItemTitle'>
                    Brand Awareness
                  </h3>
                  <p>
                    Enhance brand visibility and recognition by displaying the company's logo, brand colors, and taglines, they reinforce brand identity.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Product Promotion
                  </h3>
                  <p>
                    Through attractive graphics and compelling messages, these boards entice customers to explore the offerings, increasing the chances of sales.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Location Identification
                  </h3>
                  <p>
                    Customers can easily spot the dealership or shop from a distance For businesses operating in crowded area, simplifying navigation.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Seasonal Campaigns
                  </h3>
                  <p>
                    Whether it's a festive offer, sale or a special event, these boards can be updated regularly to reflect the latest offerings, keeping the content fresh and relevant.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Community Interaction
                  </h3>
                  <p>
                    Used for announcing community initiatives, sponsorships, or social responsibility activities fosters a positive image and strengthening bond between the brand and its local customers.
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
                  What are the <span>Advantages</span> of using <span>DealerBoard</span>
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <PersonalVideoIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    High Visibility!
                  </div>
                  <div className="whyListItemBody">
                    Strategically placed in high-traffic areas, ensuring maximum exposure to Passersby noticing these vibrant displays, increasing the potential customers for business.
                  </div>
                </div>
                <div className="whyListItem">
                  <PersonalVideoIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Customizability!
                  </div>
                  <div className="whyListItemBody">
                    Businesses can tailor the size, design, color scheme, and content according to their specific branding and promotional requirements.
                  </div>
                </div>
                <div className="whyListItem">
                  <PersonalVideoIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Cost-Effective!
                  </div>
                  <div className="whyListItemBody">
                    Offer potentially high return on investment and have a long lifespan and require minimal maintenance, making it an economical.
                  </div>
                </div>
              </div>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <PersonalVideoIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Impactful Marketing!
                  </div>
                  <div className="whyListItemBody">
                    With its large size and compelling visuals conveying clear message quickly, making it more likely for potential customers to retain.
                  </div>
                </div>
                <div className="whyListItem">
                  <PersonalVideoIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Round-the-Clock Promotion!
                  </div>
                  <div className="whyListItemBody">
                    work 24/7, consistently promoting the business even during non-business hours, hence  maximizes the chances of attracting customers at any time of the day.
                  </div>
                </div>
                <div className="whyListItem">
                  <PersonalVideoIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                  Targeted Marketing!
                  </div>
                  <div className="whyListItemBody">
                  Can choose the location of boards to target specific geographic areas, maximizing the effectiveness of their advertising efforts.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DealerBoard;