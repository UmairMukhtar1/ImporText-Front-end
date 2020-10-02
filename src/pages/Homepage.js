import React, { Component } from "react";
import { NavLink, Link, Redirect } from "react-router-dom";
import Xlider from "./Xlider";
import { BoxLoading } from "react-loadingg";

class Homepage extends Component {
  render() {
    return (
      <div>
        <header class='header'>
          <div class='container'>
            <nav class='navbar navbar-inverse' role='navigation'>
              <div class='navbar-header'>
                <button
                  type='button'
                  id='nav-toggle'
                  class='navbar-toggle'
                  data-toggle='collapse'
                  data-target='#main-nav'
                >
                  {" "}
                  <span class='sr-only'>Toggle navigation</span>{" "}
                  <span class='icon-bar'></span> <span class='icon-bar'></span>{" "}
                  <span class='icon-bar'></span>{" "}
                </button>
                <a
                  href='#'
                  class='navbar-brand scroll-top logo  animated bounceInLeft'
                >
                  <b>
                    <i>{/* {Agile} */} IMPORTEXT</i>
                  </b>
                </a>{" "}
              </div>
              {/* <!--/.navbar-header--> */}
              <div id='main-nav' class='collapse navbar-collapse'>
                <ul class='nav navbar-nav' id='mainNav'>
                  <li class='active' id='firstLink'>
                    <a href='#home' class='scroll-link'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='#services' class='scroll-link'>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href='#aboutUs' class='scroll-link'>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href='#work' class='scroll-link'>
                      Events
                    </a>
                  </li>
                  {/* <li>
                    <a href='#plans' class='scroll-link'>
                      Plans
                    </a>
                  </li> */}
                  <li>
                    <a href='#team' class='scroll-link'>
                      Team
                    </a>
                  </li>
                  <li>
                    {/* <Link to='/signup' className='scroll-link'>
                      Contact Us
                    </Link> */}
                    <a href='#contactUs' class='scroll-link'>
                      Contact Us
                    </a>
                    {/* <a href='/signup' class='scroll-link'>
                      Contact Us
                    </a> */}
                  </li>
                  <li>
                    <Link to='/signup' className='scroll-link'>
                      LOGIN / SIGN UP !
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!--/.navbar-collapse-->  */}
            </nav>
            {/* <!--/.navbar-->  */}
          </div>
          {/* <!--/.container-->  */}
        </header>
        {/* <!--/.header--> */}
        <div id='#top'></div>
        <section id='home'>
          <div class='banner-container'>
            {/* <!-- Slider -->  */}
            <Xlider style={{ position: "absolute", height: "238px" }}></Xlider>
            {/* <!-- end slider --> */}
          </div>
          <div class='container hero-text2'>
            <h3>
              Importext will be a system to communicate with the audience in a
              much effective and efficient way ! <BoxLoading />
            </h3>
          </div>
        </section>
        <section id='services' class='page-section colord'>
          <div class='container'>
            <div class='row'>
              {/* <!-- item --> */}
              <div class='col-md-3 text-center'>
                <div class='b1'>
                  {" "}
                  <i class='circle'>
                    <img src='assets/images/stream.png' alt='' />
                  </i>
                  <h3>LIVE STREAMING</h3>
                  <p>
                    You can stream on our platform. Just go live and deliver
                    your message to the audience. A great platform for people
                    with audience.
                  </p>
                </div>
              </div>
              {/* <!-- end: --> 
      
      <!-- item --> */}
              <div class='col-md-3 text-center'>
                <div class='b1'>
                  <i class='circle'>
                    <img src='assets/images/a2.jpg' alt='' />
                  </i>
                  <h3>OTHER PLATFORM </h3>
                  <p>
                    If you streaming on any other platform such as Facebook or
                    youtube. Just share a link with us and we are good to go.{" "}
                  </p>
                </div>
              </div>
              {/* <!-- end: --> 
      
      <!-- item --> */}
              <div class='col-md-3 text-center'>
                <div class='b1'>
                  <i class='circle'>
                    {" "}
                    <img src='assets/images/a3.jpg' alt='' />
                  </i>
                  <h3>PROCESS QUERIES</h3>
                  <p>
                    Have alot of queries ? We will manage all the queries for
                    you and make sure you see only important ones.
                  </p>
                </div>
              </div>
              {/* <!-- end: --> 
      
      <!-- item --> */}
              <div class='col-md-3 text-center'>
                <div class='b1'>
                  <i class='circle'>
                    {" "}
                    <img src='assets/images/Prioritize.png' alt='' />
                  </i>
                  <h3>RANK QUERIES</h3>
                  <p>
                    All your queries will be ranked according to their
                    importance. So you see what you should see !Irrelevent
                    queries will be ignored
                  </p>
                </div>
              </div>
              {/* <!-- end:-->  */}
            </div>
          </div>
          {/* <!--/.container-->  */}
        </section>
        <section id='aboutUs'>
          <div class='container'>
            <div class='heading text-center'>
              {/* <!-- Heading --> */}
              <h2>About Importext</h2>
              <p>
                The purpose of this project is to minimize the communication gap
                between Speakers and Audience. Enhance the experience of using
                live streams.
              </p>
            </div>
            <div class='row feature design'>
              <div class='area1 columns right'>
                <h3>CLEAR AND EFFECTIVE COMMUNICATION !</h3>
                <p>
                  For the Speaker/ Organizer, ImporText will provide the basic
                  facility to start any stream or schedule live streaming for
                  later. The speaker will be able to manage and communicate with
                  his/her audience much better as he/she will only see the
                  queries that are important !
                </p>
                <p>
                  The viewers of the stream will also be facilitated. They will
                  have an option to see already answered questions. The system
                  will maintain the record of Frequently Asked Questions.
                </p>
                <a href='#' class='btn'>
                  Download Mobile App
                </a>
              </div>
              <div class='area2 columns feature-media left'>
                {" "}
                <img src='assets/images/mine.png' alt='' width='70%' />{" "}
              </div>
            </div>
          </div>
        </section>
        <section id='clients'>
          <div id='demo' class='clients'>
            <div class='container'>
              <div class='row'>
                <div class='col-md-12'>
                  <div class='customNavigation'>
                    {" "}
                    <a class='prev'>
                      <i class='fa fa-chevron-circle-left'></i>
                    </a>{" "}
                    <a class='next'>
                      <i class='fa fa-chevron-circle-right'></i>
                    </a>{" "}
                  </div>
                  <div id='owl-demo' class='owl-carousel'>
                    <div class='item'>
                      {" "}
                      <span class='helper'>
                        {" "}
                        <img
                          src='assets/images/clients/client-1.png'
                          alt='client'
                        />
                      </span>{" "}
                    </div>
                    <div class='item'>
                      {" "}
                      <span class='helper'>
                        {" "}
                        <img
                          src='assets/images/clients/client-2.png'
                          alt='client'
                        />
                      </span>{" "}
                    </div>
                    <div class='item'>
                      {" "}
                      <span class='helper'>
                        {" "}
                        <img
                          src='assets/images/clients/client-3.png'
                          alt='client'
                        />
                      </span>{" "}
                    </div>
                    <div class='item'>
                      {" "}
                      <span class='helper'>
                        {" "}
                        <img
                          src='assets/images/clients/client-4.png'
                          alt='client'
                        />
                      </span>{" "}
                    </div>
                    <div class='item'>
                      {" "}
                      <span class='helper'>
                        {" "}
                        <img
                          src='assets/images/clients/client-5.png'
                          alt='client'
                        />
                      </span>{" "}
                    </div>
                    <div class='item'>
                      {" "}
                      <span class='helper'>
                        {" "}
                        <img
                          src='assets/images/clients/client-6.png'
                          alt='client'
                        />
                      </span>{" "}
                    </div>
                    <div class='item'>
                      {" "}
                      <span class='helper'>
                        {" "}
                        <img
                          src='assets/images/clients/client-7.png'
                          alt='client'
                        />
                      </span>{" "}
                    </div>
                    <div class='item'>
                      {" "}
                      <span class='helper'>
                        {" "}
                        <img
                          src='assets/images/clients/client-8.png'
                          alt='client'
                        />
                      </span>{" "}
                    </div>
                    <div class='item'>
                      {" "}
                      <span class='helper'>
                        {" "}
                        <img
                          src='assets/images/clients/client-9.png'
                          alt='client'
                        />
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='work' class='page-section page'>
          <div class='container text-center'>
            <div class='heading'>
              <h2>STREAMS </h2>
              <p>
                Here are the streams currently on our system. You can see anyone
                of these or create your own.{" "}
              </p>
            </div>
            <div class='row'>
              <div class='col-md-12'>
                <div id='portfolio'>
                  <ul class='filters list-inline'>
                    <li>
                      {" "}
                      <a class='active' data-filter='*' href='#'>
                        All
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a data-filter='.photography' href='#'>
                        Ongoing
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a data-filter='.branding' href='#'>
                        Shcheduled
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a data-filter='.web' href='#'>
                        Recorded
                      </a>{" "}
                    </li>
                  </ul>
                  <ul
                    class='items list-unstyled clearfix animated fadeInRight showing'
                    data-animation='fadeInRight'
                    style={{ position: "relative", height: "438px" }}
                  >
                    <li
                      class='item branding'
                      style={{
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                      }}
                    >
                      {" "}
                      <a href='images/work/1.jpg' class='fancybox'>
                        {" "}
                        <img src='assets/images/work/1.jpg' alt='' />
                        <div class='overlay'>
                          {" "}
                          <span>Etiam porta</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      class='item photography'
                      style={{
                        position: "absolute",
                        left: "292px",
                        top: "0px",
                      }}
                    >
                      {" "}
                      <a href='images/work/2.jpg' class='fancybox'>
                        {" "}
                        <img src='assets/images/work/2.jpg' alt='' />
                        <div class='overlay'>
                          {" "}
                          <span>Lorem ipsum</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      class='item branding'
                      style={{
                        position: "absolute",
                        left: "585px",
                        top: "0px",
                      }}
                    >
                      {" "}
                      <a href='images/work/3.jpg' class='fancybox'>
                        {" "}
                        <img src='assets/images/work/3.jpg' alt='' />
                        <div class='overlay'>
                          {" "}
                          <span>Vivamus quis</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      class='item photography'
                      style={{
                        position: "absolute",
                        left: "877px",
                        top: "0px",
                      }}
                    >
                      {" "}
                      <a href='images/work/4.jpg' class='fancybox'>
                        {" "}
                        <img src='assets/images/work/4.jpg' alt='' />
                        <div class='overlay'>
                          {" "}
                          <span>Donec ac tellus</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      class='item photography'
                      style={{
                        position: "absolute",
                        left: "0px",
                        top: "219px",
                      }}
                    >
                      {" "}
                      <a href='images/work/5.jpg' class='fancybox'>
                        {" "}
                        <img src='assets/images/work/5.jpg' alt='' />
                        <div class='overlay'>
                          {" "}
                          <span>Etiam volutpat</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      class='item web'
                      style={{
                        position: "absolute",
                        left: "292px",
                        top: "219px",
                      }}
                    >
                      {" "}
                      <a href='images/work/6.jpg' class='fancybox'>
                        {" "}
                        <img src='assets/images/work/6.jpg' alt='' />
                        <div class='overlay'>
                          {" "}
                          <span>Donec congue </span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      class='item photography'
                      style={{
                        position: "absolute",
                        left: "585px",
                        top: "219px",
                      }}
                    >
                      {" "}
                      <a href='images/work/7.jpg' class='fancybox'>
                        {" "}
                        <img src='assets/images/work/7.jpg' alt='' />
                        <div class='overlay'>
                          {" "}
                          <span>Nullam a ullamcorper diam</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      class='item web'
                      style={{
                        position: "absolute",
                        left: "877px",
                        top: "219px",
                      }}
                    >
                      {" "}
                      <a href='images/work/8.jpg' class='fancybox'>
                        {" "}
                        <img src='assets/images/work/8.jpg' alt='' />
                        <div class='overlay'>
                          {" "}
                          <span>Etiam consequat</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section id='plans' class='page-section'>
          <div class='container'>
            <div class='heading text-center'> */}
        {/* <!-- Heading --> */}
        {/* <h2>Our Plans</h2>
              <p>
                At lorem Ipsum available, but the majority have suffered
                alteration in some form by injected humour.
              </p>
            </div>
            <div class='row flat'>
              <div class='col-lg-3 col-md-3 col-xs-12'>
                <ul class='plan plan1'>
                  <li class='plan-name'>Basic </li>
                  <li class='plan-price'>
                    {" "}
                    <strong>$29</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>5GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>400GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>10</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li class='plan-action'>
                    {" "}
                    <a href='#' class='btn btn-danger btn-lg'>
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div class='col-lg-3 col-md-3 col-xs-12'>
                <ul class='plan plan2 featured'>
                  <li class='plan-name'>Standard </li>
                  <li class='plan-price'>
                    {" "}
                    <strong>$39</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>5GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>400GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>10</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li class='plan-action'>
                    {" "}
                    <a href='#' class='btn btn-danger btn-lg'>
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div class='col-lg-3 col-md-3 col-xs-12'>
                <ul class='plan plan3'>
                  <li class='plan-name'>Advanced </li>
                  <li class='plan-price'>
                    {" "}
                    <strong>$199</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>50GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>8GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1024GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Unlimited</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li class='plan-action'>
                    {" "}
                    <a href='#' class='btn btn-danger btn-lg'>
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div class='col-lg-3 col-md-3 col-xs-12'>
                <ul class='plan plan4'>
                  <li class='plan-name'>Mighty </li>
                  <li class='plan-price'>
                    {" "}
                    <strong>$999</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>50GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>8GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1024GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Unlimited</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li class='plan-action'>
                    {" "}
                    <a href='#' class='btn btn-danger btn-lg'>
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}
        <section id='team' class='page-section'>
          <div class='container'>
            <div class='heading text-center'>
              {/* <!-- Heading --> */}
              <h2>Our Team</h2>
              <p>We ar a team of 4 people working on this project. </p>
            </div>
            {/* <!-- Team Member's Details --> */}
            <div class='team-content'>
              <div class='row'>
                <div class='col-md-3 col-sm-6 col-xs-6'>
                  {/* <!-- Team Member --> */}
                  <div class='team-member pDark'>
                    {/* <!-- Image Hover Block --> */}
                    <div class='member-img'>
                      {/* <!-- Image  -->  */}
                      <img
                        class='img-responsive'
                        src='assets/images/umair.jpg'
                        alt=''
                      />{" "}
                    </div>
                    {/* <!-- Member Details --> */}
                    <h4>Umair Mukhtar</h4>
                    {/* <!-- Designation -->  */}
                    <span class='pos'>SP17-BCS-046</span>
                    <div class='team-socials'>
                      {" "}
                      <a href='#'>
                        <i class='fa fa-facebook'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-google-plus'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-twitter'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-dribbble'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-github'></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div class='col-md-3 col-sm-6 col-xs-6'>
                  {/* <!-- Team Member --> */}
                  <div class='team-member pDark'>
                    {/* <!-- Image Hover Block --> */}
                    <div class='member-img'>
                      {/* <!-- Image  -->  */}
                      <img
                        class='img-responsive'
                        src='assets/images/zeeshan.PNG'
                        alt=''
                      />{" "}
                    </div>
                    {/* <!-- Member Details --> */}
                    <h4>Zeeshan Yasin</h4>
                    {/* <!-- Designation -->  */}
                    <span class='pos'>SP17-BCS-048</span>
                    <div class='team-socials'>
                      {" "}
                      <a href='#'>
                        <i class='fa fa-facebook'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-google-plus'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-twitter'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-dribbble'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-github'></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div class='col-md-3 col-sm-6 col-xs-6'>
                  {/* <!-- Team Member --> */}
                  <div class='team-member pDark'>
                    {/* <!-- Image Hover Block --> */}
                    <div class='member-img'>
                      {/* <!-- Image  -->  */}
                      <img
                        class='img-responsive'
                        src='assets/images/sir1.jpg'
                        alt=''
                      />{" "}
                    </div>
                    {/* <!-- Member Details --> */}
                    <h4>Dr. Inayat-ur-Rehman</h4>
                    {/* <!-- Designation -->  */}
                    <span class='pos'>Supervisor</span>
                    <div class='team-socials'>
                      {" "}
                      <a href='#'>
                        <i class='fa fa-facebook'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-google-plus'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-twitter'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-dribbble'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-github'></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div class='col-md-3 col-sm-6 col-xs-6'>
                  {/* <!-- Team Member --> */}
                  <div class='team-member pDark'>
                    {/* <!-- Image Hover Block --> */}
                    <div class='member-img'>
                      {/* <!-- Image  -->  */}
                      <img
                        class='img-responsive'
                        src='assets/images/sir2.jpg'
                        alt=''
                      />{" "}
                    </div>
                    {/* <!-- Member Details --> */}
                    <h4>Dr. Saif-ur-Rehman Khan</h4>
                    {/* <!-- Designation -->  */}
                    <span class='pos'>co. supervisor</span>
                    <div class='team-socials'>
                      {" "}
                      <a href='#'>
                        <i class='fa fa-facebook'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-google-plus'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-twitter'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-dribbble'></i>
                      </a>{" "}
                      <a href='#'>
                        <i class='fa fa-github'></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.container-->  */}
        </section>
        <section id='contactUs' class='contact-parlex'>
          <div class='parlex-back'>
            <div class='container'>
              <div class='row'>
                <div class='heading text-center'>
                  {/* <!-- Heading --> */}
                  <h2>Contact Us</h2>
                  <p>
                    If you have any queries or questions regarding any aspect of
                    the system, or if you have any suggestions that you think
                    will improve the systems, do let us know ! Your suggestions
                    are apprciated !{" "}
                  </p>
                </div>
              </div>
              <div class='row mrgn30'>
                <form method='post' action='' id='contactfrm' role='form'>
                  <div class='col-sm-12'>
                    <div class='form-group'>
                      <label for='name'>Name</label>
                      <input
                        type='text'
                        class='form-control'
                        name='name'
                        id='name'
                        placeholder='Enter name'
                        title='Please enter your name (at least 2 characters)'
                      />
                    </div>
                    <div class='form-group'>
                      <label for='email'>Email</label>
                      <input
                        type='email'
                        class='form-control'
                        name='email'
                        id='email'
                        placeholder='Enter email'
                        title='Please enter a valid email address'
                      />
                    </div>
                    <div class='form-group'>
                      <label for='comments'>Comments</label>
                      <textarea
                        name='comment'
                        class='form-control'
                        id='comments'
                        cols='3'
                        rows='5'
                        placeholder='Enter your message…'
                        title='Please enter your message (at least 10 characters)'
                      ></textarea>
                      <button
                        name='submit'
                        type='submit'
                        class='btn btn-lg btn-primary'
                        id='submit'
                      >
                        Submit
                      </button>
                    </div>
                    <div class='result'></div>
                  </div>
                </form>
              </div>
            </div>
            {/* <!--/.container-->  */}
          </div>
        </section>
        <footer>
          <div class='container'>
            <div class='row'>
              <div class='col-md-6'>
                <div class='col'>
                  <h4>Contact us</h4>
                  <ul>
                    <li>Comsats Univesty Islmabad </li>
                    <li>Phone: +92 348 5055784 | +92 346 6510798 </li>
                    <li>
                      Email:{" "}
                      <a title='Email Us'>
                        zeeshanyasin340@gmail.com || umairmukhtar332@gmail.com
                      </a>
                    </li>
                    <li>
                      Skype:{" "}
                      <a href='skype:my.test?call' title='Skype us'>
                        importext
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div class='col-md-3'>
                <div class='col'>
                  <h4>Mailing list</h4>
                  <p>
                    Lorem ipsum dolor sit amet, ea eum labitur scsstie
                    percipitoleat.
                  </p>
                  <form class='form-inline'>
                    <div class='input-group'>
                      <input
                        type='text'
                        class='form-control'
                        placeholder='Your email address...'
                      />
                      <span class='input-group-btn'>
                        <button class='btn' type='button'>
                          Go!
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
 */}
              <div class='col-md-6'>
                <div class='col col-social-icons'>
                  <h4>Follow us</h4>
                  <a href='#'>
                    <i class='fa fa-facebook'></i>
                  </a>
                  <a href='#'>
                    <i class='fa fa-google-plus'></i>
                  </a>
                  <a href='#'>
                    <i class='fa fa-youtube-play'></i>
                  </a>
                  <a href='#'>
                    <i class='fa fa-flickr'></i>
                  </a>
                  <a href='#'>
                    <i class='fa fa-linkedin'></i>
                  </a>
                  <a href='#'>
                    <i class='fa fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i class='fa fa-skype'></i>
                  </a>
                  <a href='#'>
                    <i class='fa fa-pinterest'></i>
                  </a>
                </div>
              </div>
              {/* 
              <div class='col-md-3'>
                <div class='col'>
                  <h4>Latest News</h4>
                  <p>
                    Lorem ipsum dolor labitur scsstie per sit amet, ea eum
                    labitur scsstie percipitoleat.
                    <br />
                    <a href='#' class='btn'>
                      Get Mores!
                    </a>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </footer>
        {/* <!--/.page-section--> */}
        <section class='copyright'>
          <div class='container'>
            <div class='row'>
              <div class='col-sm-12 text-center'>
                {" "}
                Copyright 2020 | All Rights Reserved -- Importext{" "}
              </div>
            </div>
            {/* <!-- / .row -->  */}
          </div>
        </section>
        <a href='#top' class='topHome'>
          <i class='fa fa-chevron-up fa-2x'></i>
        </a>
      </div>
    );
  }
}

export default Homepage;
