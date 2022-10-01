import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Message from "../components/message";
import Loader from "../components/loader";
import Paginate from "../components/Paginate";

import Meta from "../components/Meta";

import Categories from "../components/Categories";

import TopCate from "../components/Slider/TopCate";
//home is for homepage slider
import Home from "../components/Slider2/Home";
import Slider from "../components/Slider";
import CarouselContainer from "../components/CarouselContainer";
import DemoCarousel from "../components/DemoCarousel";





const HomeScreen = () => {
  const match = useParams();
  const keyword = match.keyword;
  const pageNumber = match.pageNumber || 1;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);


  return (
    <>
      <Meta />
      {console.log(keyword)}
      {!keyword ? (
        <>
          {/* <DemoCarousel></DemoCarousel> */}
          <Slider></Slider>
          <Categories></Categories>
        </>


      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )
      }




      <h1>Latest Products</h1>
      {
        loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row>
              {products &&
                products.length &&
                products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
            </Row>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
            {/* <TopCate></TopCate> */}
            {/* <Wrapper></Wrapper> */}

          </>
        )
      }

    </>
  );
};

export default HomeScreen;
