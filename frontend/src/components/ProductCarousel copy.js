import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image, Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Loader from "./loader";
import Message from "./message";
import { listTopProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";


const ProductCarousel = () => {
  const dispatch = useDispatch();
  const productTop = useSelector((state) => state.productTop);
  const { loading, error, products } = productTop;
  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    // <Carousel pause="hover" className="bg-dark">
    //   {products.map((product) => (
    //     <Carousel.Item key={product._id}>
    //       <Link to={`/products/${product._id}`}>

    //         <Container >
    //           <Row >
    //             <Col>
    //               <Image src={product.image} alt={product.name} fluid />
    //             </Col>
    //             <Col className="justify-content-md-center">
    //               <h3 style={{ color: "red" }}>
    //                 {product.name} (${product.price})
    //               </h3>
    //             </Col>
    //           </Row>
    //         </Container>

    //         {/* <Img>
    //           <Image src={product.image} alt={product.name} fluid />
    //         </Img>
    //         <ImgText>
    //           <Carousel.Caption className="carousel-caption">
    //             <h2>
    //               {product.name} (${product.price})
    //             </h2>
    //           </Carousel.Caption>
    //         </ImgText> */}
    //       </Link>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className=""
          src="https://i.etsystatic.com/16465191/r/il/7c6ec6/2619896665/il_fullxfull.2619896665_91wr.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.etsystatic.com/16465191/r/il/7c6ec6/2619896665/il_fullxfull.2619896665_91wr.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.etsystatic.com/16465191/r/il/7c6ec6/2619896665/il_fullxfull.2619896665_91wr.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
};

export default ProductCarousel;


// import React from "react";
// import {
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBView,
//   MDBContainer
// } from "mdbreact";

// const CarouselPage = () => {
//   return (
//     <MDBContainer>
//       <MDBCarousel
//         activeItem={1}
//         length={3}
//         showControls={true}
//         showIndicators={true}
//         className="z-depth-1"
//       >
//         <MDBCarouselInner>
//           <MDBCarouselItem itemId="1">
//             <MDBView>
//               <img
//                 className="d-block w-100"
//                 src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).webp"
//                 alt="First slide"
//               />
//               <MDBMask overlay="black-light" />
//             </MDBView>
//             <MDBCarouselCaption>
//               <h3 className="h3-responsive">Light mask</h3>
//               <p>First text</p>
//             </MDBCarouselCaption>
//           </MDBCarouselItem>
//           <MDBCarouselItem itemId="2">
//             <MDBView>
//               <img
//                 className="d-block w-100"
//                 src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).webp"
//                 alt="Second slide"
//               />
//               <MDBMask overlay="black-strong" />
//             </MDBView>
//             <MDBCarouselCaption>
//               <h3 className="h3-responsive">Strong mask</h3>
//               <p>Second text</p>
//             </MDBCarouselCaption>
//           </MDBCarouselItem>
//           <MDBCarouselItem itemId="3">
//             <MDBView>
//               <img
//                 // className="d-block w-100"
//                 src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).webp"
//                 alt="Third slide"
//               />
//               <MDBMask overlay="black-slight" />
//             </MDBView>
//             <MDBCarouselCaption>
//               <h3 className="h3-responsive">Slight Mast</h3>
//               <p>Third text</p>
//             </MDBCarouselCaption>
//           </MDBCarouselItem>
//         </MDBCarouselInner>
//       </MDBCarousel>
//     </MDBContainer>
//   );
// }

// export default CarouselPage;
