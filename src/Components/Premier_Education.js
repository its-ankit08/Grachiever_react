import slidelogo1 from '../images/2/microsoft.png';
import slidelogo2 from '../images/2/futurelearn-logo.png';
import slidelogo3 from '../images/2/google-logo-2.png';
import slidelogo4 from '../images/2/MIT_logo.png';
import slidelogo5 from '../images/2/nvidia-logo-16.png';
import slidelogo6 from '../images/2/oxford.png';
import slidelogo7 from '../images/2/amazon.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Premier_section() {
  const settings = {
    infinite: true,
    autoplay:true,
    // autoplayTimeout:1000,
    autoplaySpeed: 1000,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <section className="p-2 md:p-10 mt-10 bg-[#f6f9ff]">
    
    <h1 className=" text-center md:text-3xl lg:text-3xl font-bold">Premier Education Providers</h1>
    
<Slider {...settings} className="m-5 ">
<div className="m-5 md:m-10 -ml-2 h-24 md:h-24 lg:h-24 ">
<img src={slidelogo1} className=''/>
</div>

    {/* Card 1 */}
    <div className=" w-24 h-5  "><h1 className="mt-2 p-5  md:p-10">
          <img src={slidelogo2} />
            </h1></div>

    {/* Card 2 */}
    <div className=" w-24 h-5 "><h1 className="mt-2 p-5  md:p-10">
          <img src={slidelogo3} className='mt-4'/>
            </h1></div>

    {/* Card 3 */}
    <div className=" w-24 h-5 "><h1 className="mt-8 p-5  md:p-10">
          <img src={slidelogo4} />
            </h1></div>

    {/* Card 4 */}
    <div className=" w-24 h-5 "><h1 className="mt-8 p-5  md:p-10">
          <img src={slidelogo5} />
            </h1></div>

    {/* Card 5 */}

    <div className=" w-24 h-5 "><h1 className="mt-8 p-5  md:p-10">
          <img src={slidelogo6} />
            </h1></div>
            
    {/* Card 6 */}

    <div className=" w-24 h-5 "><h1 className="mt-3 p-5  md:p-10">
          <img src={slidelogo7} />
            </h1></div>


  </Slider>
 
    </section>
  </>
  );
}

export default Premier_section;