// import "./Home.css"
// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import { FaChevronCircleRight, FaChevronCircleLeft, FaCircle } from "react-icons/fa";

// // ............ for images ...........
// import image01 from "../images/z_index_images/image01.png"
// import image02 from "../images/z_index_images/image02.png"
// import image03 from "../images/z_index_images/image03.png"
// import image04 from "../images/z_index_images/image04.png"
// import image05 from "../images/z_index_images/image05.png"


// const Carousel = ({ items, active }) => {
//   const [state, setState] = useState({
//     items: items,
//     active: active,
//     direction: ''
//   });

//   const rightClick = () => moveRight();
//   const leftClick = () => moveLeft();

//   const generateItems = () => {
//     const generatedItems = [];
//     let level;
//     console.log(state.active);
//     for (let i = state.active - 2; i < state.active + 3; i++) {
//       let index = i;
//       if (i < 0) {
//         index = state.items.length + i;
//       } else if (i >= state.items.length) {
//         index = i % state.items.length;
//       }
//       level = state.active - i;
//       const item = state.items[index];
//       generatedItems.push(
//         <Item key={item.id} id={item.id}  image={item.image} level={level} />
//       );
//     }
//     return generatedItems;
//   };

//   const moveLeft = () => {
//     const newActive = state.active - 1;
//     setState({
//       ...state,
//       active: newActive < 0 ? state.items.length - 1 : newActive,
//       direction: 'left'
//     });
//   };

//   const moveRight = () => {
//     const newActive = (state.active + 1) % state.items.length;
//     setState({
//       ...state,
//       active: newActive,
//       direction: 'right'
//     });
//   };

//   // ......... Pagination code ........
//   const generatePagination = () => {
//     return state.items.map((item, index) => (
//       <FaCircle
//         key={item.id}
//         className={`pagination-circle ${state.active === index ? 'active' : ''}`}
//         onClick={() => setActive(index)}
//       />
//     ));
//   };
//   // .........................

//   const setActive = (index) => {
//     setState({ ...state, active: index });
//   };

//   return (
//   <>
//       <div id="carousel" className="noselect">
//         <div className="arrow arrow-left" onClick={leftClick}>
//           <FaChevronCircleLeft className="text-4xl" />
//         </div>
//         <div transitionname={state.direction}>
//           {generateItems()} 
//         </div>
//         <div className="arrow arrow-right" onClick={rightClick}>
//           <FaChevronCircleRight className="text-4xl"/>
//         </div>
//       </div>
//       <div className="pagination">{generatePagination()}</div>
//   </>
//   );
// };


// const Item = ({ level,image}) => {
//   const className = `item level${level}`;
//   return (
//     // <div
//     //   className={className}
//     //   style={{
//     //     backgroundImage: `url(${image})`,
//     //     backgroundSize: "cover",
//     //     backgroundRepeat: "no-repeat",
//     //     backgroundPosition: "center center",
//     //   }}
//     // ></div>
//     <div className={className}>
//       <img src={image} alt="Item Image" className="h-72 w-full h-full" /> 
//     </div>
//   );
// };

// const Z_index_card1 = () => {
//   // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
//   const items = [
//     { id: 1, image: image01 },
//     { id: 2, image: image02 },
//     { id: 3, image: image03 },
//     { id: 4, image: image04 },
//     { id: 5, image: image05 },
//     // { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUaOAxJ0Uk3fXVcyxhxnm7npX9JWj-VeXZ4ObZD6IeCs7OII5cQBNXd0JLSfjBvEBSj8&usqp=CAU' },
//     // Add more items with their respective images
//   ];
//   return <Carousel items={items} active={0} />;
// };

// export default Z_index_card1;


// ==========================================================================================================

// import React, { useState } from 'react';
// import { FaChevronCircleRight, FaChevronCircleLeft, FaCircle } from "react-icons/fa";

// // Import images
// import image01 from "../images/z_index_images/image01.png";
// import image02 from "../images/z_index_images/image02.png";
// import image03 from "../images/z_index_images/image03.png";
// import image04 from "../images/z_index_images/image04.png";
// import image05 from "../images/z_index_images/image05.png";

// import "./Home.css";

// const Carousel = ({ items, active }) => {
//   const [state, setState] = useState({
//     items: items,
//     active: active,
//     direction: ''
//   });

//   const rightClick = () => moveRight();
//   const leftClick = () => moveLeft();

//   const generateItems = () => {
//     const generatedItems = [];
//     let level;
//     console.log(state.active);
//     for (let i = state.active - 2; i < state.active + 3; i++) {
//       let index = i;
//       if (i < 0) {
//         index = state.items.length + i;
//       } else if (i >= state.items.length) {
//         index = i % state.items.length;
//       }
//       level = state.active - i;
//       const item = state.items[index];
//       generatedItems.push(
//         <Item key={item.id} id={item.id} image={item.image} level={level} />
//       );
//     }
//     return generatedItems;
//   };

//   const moveLeft = () => {
//     const newActive = state.active - 1;
//     setState({
//       ...state,
//       active: newActive < 0 ? state.items.length - 1 : newActive,
//       direction: 'left'
//     });
//   };

//   const moveRight = () => {
//     const newActive = (state.active + 1) % state.items.length;
//     setState({
//       ...state,
//       active: newActive,
//       direction: 'right'
//     });
//   };

//   const generatePagination = () => {
//     return state.items.map((item, index) => (
//       <FaCircle
//         key={item.id}
//         className={`pagination-circle ${state.active === index ? 'active' : ''}`}
//         onClick={() => setActive(index)}
//       />
//     ));
//   };

//   const setActive = (index) => {
//     setState({ ...state, active: index });
//   };

//   return (
//     <>
//       <div id="carousel" className="noselect">
//         <div className="arrow arrow-left" onClick={leftClick}>
//           <FaChevronCircleLeft className="text-4xl" />
//         </div>
//         <div transitionname={state.direction}>
//           {generateItems()} 
//         </div>
//         <div className="arrow arrow-right" onClick={rightClick}>
//           <FaChevronCircleRight className="text-4xl"/>
//         </div>
//       </div>
//       <div className="pagination">{generatePagination()}</div>
//     </>
//   );
// };

// const Item = ({ level, image }) => {
//   const className = `item level${level}`;
//   return (
//     <div className={className}>
//       <img src={image} alt="Item Image" className="w-full h-full" />
//       <div className="caption">PROMPT CREATOR</div>
//     </div>
//   );
// };

// const Home = () => {
//   const items = [
//     { id: 1, image: image01 },
//     { id: 2, image: image02 },
//     { id: 3, image: image03 },
//     { id: 4, image: image04 },
//     { id: 5, image: image05 },
//   ];

//   return <Carousel items={items} active={0} />;
// };

// export default Home;

// ============================================================================================


import React, { useState } from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft, FaCircle } from "react-icons/fa";

// Import images
import image01 from "../images/z_index_images/image01.png";
import image02 from "../images/z_index_images/image02.png";
import image03 from "../images/z_index_images/image03.png";
import image04 from "../images/z_index_images/image04.png";
import image05 from "../images/z_index_images/image05.png";

import "./Home.css";

const Carousel = ({ items, active }) => {
  const [state, setState] = useState({
    items: items,
    active: active,
    direction: ''
  });

  const rightClick = () => moveRight();
  const leftClick = () => moveLeft();

  const generateItems = () => {
    const generatedItems = [];
    let level;
    console.log(state.active);
    for (let i = state.active - 2; i < state.active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = state.items.length + i;
      } else if (i >= state.items.length) {
        index = i % state.items.length;
      }
      level = state.active - i;
      const item = state.items[index];
      generatedItems.push(
        <Item key={item.id} id={item.id} image={item.image} caption={item.caption} level={level} />
      );
    }
    return generatedItems;
  };

  const moveLeft = () => {
    const newActive = state.active - 1;
    setState({
      ...state,
      active: newActive < 0 ? state.items.length - 1 : newActive,
      direction: 'left'
    });
  };

  const moveRight = () => {
    const newActive = (state.active + 1) % state.items.length;
    setState({
      ...state,
      active: newActive,
      direction: 'right'
    });
  };

  const generatePagination = () => {
    return state.items.map((item, index) => (
      <FaCircle
        key={item.id}
        className={`pagination-circle ${state.active === index ? 'active' : ''}`}
        onClick={() => setActive(index)}
      />
    ));
  };

  const setActive = (index) => {
    setState({ ...state, active: index });
  };

  return (
    <>
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={leftClick}>
          <FaChevronCircleLeft className="text-4xl" />
        </div>
        <div transitionname={state.direction}>
          {generateItems()} 
        </div>
        <div className="arrow arrow-right" onClick={rightClick}>
          <FaChevronCircleRight className="text-4xl"/>
        </div>
      </div>
      <div className="pagination">{generatePagination()}</div>
    </>
  );
};

const Item = ({ level, image, caption }) => {
  const className = `item level${level}`;
  return (
    <div className={className}>
      <img src={image} alt="Item Image" className="w-full h-full" />
      <div className="caption font-bold text-sm md:text-3xl md:w-full">{caption}</div>
    </div>
  );
};

const Home = () => {
  const items = [
    { id: 1, image: image01, caption: "PROMPT CREATION" },
    { id: 2, image: image02, caption: "AI ARTISTS" },
    { id: 3, image: image03, caption: "SOCIAL MEDIA" },
    { id: 4, image: image04, caption: "Caption 4" },
    { id: 5, image: image05, caption: "AI ARTISTS" },
  ];

  return <Carousel items={items} active={0} />;
};

export default Home;
