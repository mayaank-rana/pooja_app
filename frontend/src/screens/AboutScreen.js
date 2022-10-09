import React from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import Wrapper from '../components/Wrapper/Wrapper';
import { Container } from "react-bootstrap";

const AboutScreen = () => {


    return (
        // <Container class='mt-5 mb-5'>
        <Container>
            <>
                {/* <section class="">

                    <img class="d-block w-100" src="https://i.postimg.cc/CLYC1jCT/Whats-App-Image-2022-05-09-at-7-34-32-PM-1.jpg" alt="Third slide" style={{ height: "auto" }} />

                </section> */}

                <section class="bg-light" id="about">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-12">
                                <h3 class="text-center mt-4 text-secondary">Know about us</h3>
                            </div>
                        </div>
                        <div  >
                            <Row>
                                {/* <Col>
                                    <Image class="d-block w-100" src='https://i.postimg.cc/2SS4drX0/Whats-App-Image-2022-05-09-at-7-33-04-PM.jpg' alt="Pooja Image" resizeMode="contain"
                                        resizeMethod="resize" />
                                </Col> */}

                                <section class="">

                                    <img class="d-block w-100" src="https://i.postimg.cc/CLYC1jCT/Whats-App-Image-2022-05-09-at-7-34-32-PM-1.jpg" alt="Third slide" style={{ height: "auto" }} />

                                </section>
                                <Col>


                                    <p class="mt-4 mb-15  " style={{ fontFamily: 'Cursive', fontSize: 25, marginBottom: 20 }} className='wrapper' >Hi there!<br />
                                        Thank you for stopping by my website. I'm Pooja Chauhan, the artist behind SensibleInsane Art Studio. I’m based in India but mostly sell my art all around the world.
                                        Ever since I can remember I've been a bit of an artist. Although I always managed to keep art around me, I didn't pursue art full time until 2021.
                                        I started painting in 2021 and by the time I realized that it has become my full time job, I was already accepting a lot of commissions and I decided to continue to do so!
                                        My goal in life is to express all of my emotions through my art and teaching others to do the same.
                                        Thanks again for visiting my shop! Your support means so much to me and is much appreciated. If you have any questions about my work or just want to say hello, please reach out to me in the contact form below.
                                    </p>
                                </Col>
                            </Row>


                        </div>
                    </div>
                </section>

                {/* <section class="" id="destinations">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12">
                            <h3 class="text-center mt-4 text-secondary">Favourite Destinations</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 mb-5">
                            <div class="card mt-4">
                                <img class="card-img-top" src="Images/ig-3.jpg" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title text-secondary">Japan</h4>
                                    <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-5">
                            <div class="card mt-4">
                                <img class="card-img-top" src="Images/t-2.jpg" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title text-secondary">Tokyo</h4>
                                    <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-5">
                            <div class="card mt-4">
                                <img class="card-img-top" src="Images/t-1.jpg" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title text-secondary">India</h4>
                                    <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="" id="places">
                <div class="container">
                    <div class="col-sm-12 col-md-12 mb-4">
                        <h3 class="text-center text-secondary mt-4">Places and Description</h3>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Tourist Places
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Best Destination
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Best Heritages
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

                <Wrapper></Wrapper>

                <section class="bg-light mt-15 mb-5" id="tourist">
                    <div class="container">
                        <div class="row text-center">
                            <div class="col-sm-12 col-md-12 mb-4">
                                <h3 class="text-center mt-4 text-secondary">Reviews</h3>
                            </div>
                            <div class="col-md-4">
                                <div class="testimonial mb-5">
                                    <div class="avatar mx-auto">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle z-depth-1 img-fluid" />
                                    </div>
                                    <h4 class="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
                                    <h6 class="font-weight-bold blue-text my-3">Tourist</h6>
                                    <p class="font-weight-normal dark-grey-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                        eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="testimonial mb-5">
                                    <div class="avatar mx-auto">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" class="rounded-circle z-depth-1 img-fluid" />
                                    </div>
                                    <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
                                    <h6 class="font-weight-bold blue-text my-3">Tourist</h6>
                                    <p class="font-weight-normal dark-grey-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                        corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
                                </div>

                            </div>
                            <div class="col-md-4">
                                <div class="testimonial mb-5">
                                    <div class="avatar mx-auto">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle z-depth-1 img-fluid" />
                                    </div>
                                    <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
                                    <h6 class="font-weight-bold blue-text my-3">Toursit</h6>
                                    <p class="font-weight-normal dark-grey-text">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </Container>





    );
};

export default AboutScreen;
