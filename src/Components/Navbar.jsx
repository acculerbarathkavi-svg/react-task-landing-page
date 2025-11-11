import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";



const Navbar = () => {
 
  return (
    <>
    
    <header className="shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light  px-4">
        
        {/* Logo */}
        
        <a className="navbar-brand fw-bold fs-3" href="#">
          <img src={"boots.png"} alt="" className='img-fluid logo'/>
        </a>

        {/* Hamburger Button (for mobile) */}
        <button className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
            <li className="nav-item"><a className="nav-link" href="#technology">Technology</a></li>
            <li className="nav-item"><a className="nav-link" href="#vision">vision</a></li>
            <li className="nav-item"><a className="nav-link" href="#social">Social</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>

      </nav>
    </header>
    
    {/* hero section */}
    <section className="position-relative w-100" id='home'>

  <div className="position-relative ">
    <img src={"heroImg.jpg"} alt="" className="hero-img " />
  </div>

  <div className="hero-text text-white">
    <h4>Active</h4>
    <h4>Outdoor</h4>
    <p>Stay dry, warm and comfortable <br /> whatever the weather</p>

    <button className="button ">more</button>
  </div>

  <div className="w-100 d-flex justify-content-center">
    <img src={"arrow-down.png"} alt="" className="hero-arrow" />
  </div>

</section>

{/* Gallery section */}
<section>
  <div className='container' id='gallery'>
    <div className=' text-center p-5'>
      <h4 className='display-5'>Viking Footwear</h4>
      <p>Challenging the Laws of Nature since 1920</p>
    </div>
    
    <div className="row">
      <div className="col kid-img " >

      </div>
      <div className="col">

      <div className="col grp-img">
        
      </div>     
        <div className="col girl-img">
          
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col couple-img " >
        
      </div>
      <div className="col adult-img ">
        
      </div>   
    </div>

  </div>
</section>

{/* Technology section */}
<section id='technology'>
  <div className='container'>
    <div className='text-center'>
      <h4 className='p-4'>
        Did you know that
      </h4>
      <div className='shoe-img'>
        <h6 className='shoe-text'>the Boa <br />closure system</h6>
        <button className="button ">more</button>
      </div>
    </div>
  </div>
</section>

{/* vision section */}
<section id='vision'>
  <div className='container'>
    <div className='text-center p-5'>
      <h4 >
        Our value and vision
      </h4>
      <p >
        We are inspired by the outdoors, where every step is part of the journey.
Our footwear is built to endure weather, terrain, and everyday challenges.
So you can move confidently — wherever the path leads.
      </p>
    </div>

    <div className='background' id='social' style={{backgroundColor: "lightblue"}}>
      
      <h4 className='text-center pt-4 '>Follow #VikingFootwear</h4>
      <div className="row">
        <div className="col-lg-3 post-img">
          <img src={'post-1.jpg'} alt="" className='img-fluid post-img1'/>
        </div>
        <div className="col-lg-3 post-img">
          <img src={'post-2.jpg'} alt="" className='img-fluid post-img1'/>
        </div>
        <div className="col-lg-3 post-img">
          <img src={'post-3.jpg'} alt="" className='img-fluid post-img1'/>
        </div>
        <div className="col-lg-3 post-img">
          <img src={'post-4.jpg'} alt="" className='img-fluid post-img1'/>
        </div>
        
      </div>
      <div className="row">
        <div className="col-lg-3">
          <img src={'post-5.jpg'} alt="" className='img-fluid post-img1'/>
        </div>
        <div className="col-lg-3">
          <img src={'post-6.jpg'} alt="" className='img-fluid post-img1'/>
        </div>
        <div className="col-lg-3">
          <img src={'post-7.jpg'} alt="" className='img-fluid post-img1'/>
        </div>
        <div className="col-lg-3">
          <img src={'post-8.jpg'} alt="" className='img-fluid post-img1'/>
        </div>
        
      </div>
    </div>
  </div>
</section>

{/* Contact section */}
<section id='contact'>
    <div className="container">
      <h4 className='text-center p-3'>
        Mailing List
      </h4>
      <p className='text-center pb-3'>Keep up to date with the latest news, behind the scenes, exlusive offers and more</p>
      <div className="row height-100 d-flex justify-content-center align-items-center pb-5">
        <div className="col-12 col-md-8">

          <div className="input-group signup-group">
            <input 
              type="email" 
              className="form-control" 
              placeholder="Your email address"
            />
            <button className="btn btn-primary">Signup</button>
          </div>

        </div>
      </div>
    </div>
</section>

{/* Footer section */}
<footer className="footer bg-dark text-light py-5">
  <div className="container">
    <div className="row gy-4">

      <div className="col-12 col-md-3">
        <h5 className="mb-3">Viking Footwear</h5>
        <ul className="list-unstyled footer-links">
          <li><a href="">Testlab</a></li>
          <li><a href="">Viking Team</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>

      <div className="col-12 col-md-3">
        <h5 className="mb-3">About Viking</h5>
        <ul className="list-unstyled footer-links">
          <li><a href="">News</a></li>
          <li><a href="#vision">Vision</a></li>
          <li><a href="">History</a></li>
          <li><a href="#social">Social</a></li>
        </ul>
      </div>

      <div className="col-12 col-md-3">
        <h5 className="mb-3">Overview</h5>
        <ul className="list-unstyled footer-links">
          <li><a href="">Products</a></li>
          <li><a href="">Technology</a></li>
          <li><a href="">Testlab</a></li>
        </ul>
      </div>

      <div className="col-12 col-md-3">
  <h5 className="mb-3">On Social</h5>
  <ul className="d-flex gap-3 list-unstyled fs-4">
    <li><a href="#"><i className="bi bi-facebook text-light"></i></a></li>
    <li><a href="#"><i className="bi bi-instagram text-light"></i></a></li>
    <li><a href="#"><i className="bi bi-linkedin text-light"></i></a></li>
  </ul>
</div>


    </div>
  </div>
</footer>
    </>
  )
}
export default Navbar