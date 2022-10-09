import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import { categories } from '../data'
const Categories = () => {


    return (
        // <Container class='mt-5 mb-5'>

        <Row >
            {categories.map((item) => (
                <Col >

                    <Image width="408" height="500" src={item.img} alt="img" />

                    <h3 style={{ align: 'center' }} >{item.title}</h3>
                    <Button style={{ margin: '10px' }}>SHOP NOW</Button>
                    <br></br>


                    {/* <h1 style={textStyle}>Text over image</h1> */}
                </Col>
            ))}
        </Row>


        // </Container >

    );
};

export default Categories;