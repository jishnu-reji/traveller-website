import React from "react";
import image1 from '../assets/munnar.jpg'
import image2 from '../assets/wayanad.jpg'
import image3 from '../assets/kovalam.jpg'
import image4 from '../assets/tvm.jpg'
import image5 from '../assets/alappuzha.jpg'
import image6 from '../assets/illikkal.jpg'
import image7 from '../assets/VARKALA.jpg'
import image8 from '../assets/kochi.jpg'
import image9 from '../assets/athirappalli.jpg'
import image10 from '../assets/person.jpg'
import image11 from '../assets/topoftruck.jpg'

function BodyWeb() {
  return (
    <div>
      <div className="w-100 bg-success">
        <div className="w-75 container py-5 text-white">
          <div className="row">
            <div className="col-lg-4 text-center">
              <h3>Hand Picked Guides</h3>
              <i className="fa-regular fa-thumbs-up ic"></i>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-lg-4 text-center">
              <h3>24/7 Support</h3>
              <i class="fa-solid fa-headphones-simple ic"></i>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-lg-4 text-center">
              <h3>Private tours</h3>
              <i class="fa-regular fa-user ic"></i>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-75 container b1">
        <h1 className="text-center pt-5">See the world like a local</h1>
        <p className="text-center">
          Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
          tempor incididunt.
        </p>
      </div>

      <div className="w-75 container py-5 cc">
        <div className="row">
          <div className="col-lg-4 pb-2">
            <img src={image1} alt="" />
            <h3 className="pt-3">Munnar</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-lg-4 pb-2">
            <img src={image2} alt="" />
            <h3 className="pt-3">Wayanad</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-lg-4 pb-2">
            <img src={image3} alt="" />
            <h3 className="pt-3">kovalam</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-lg-4 pb-2">
            <img src={image4} alt="" />
            <h3 className="pt-3">Thiruvananthapuram</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-lg-4 pb-2">
            <img src={image5} alt="" />
            <h3 className="pt-3">alappuzha</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-lg-4 pb-2">
            <img src={image6} alt="" />
            <h3 className="pt-3">Illikkalkallu</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-lg-4 pb-2">
            <img src={image7} alt="" />
            <h3 className="pt-3">Varkala</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-lg-4 pb-2">
            <img src={image8} alt="" />
            <h3 className="pt-3">Kochi</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-lg-4 pb-2">
            <img src={image9} alt="" />
            <h3 className="pt-3">athirappalli</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      <div style={{backgroundColor:'#F8F0E9'}}>
        <div className="w-75 container py-5 dd">
          <p>Customer testimonial</p>
          <h3>“We've used Traveler to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</h3>
          <div className="d-flex align-items-center mt-5">
            <img src={image10} alt="" />
            <h5 className="ps-3">Anna Maria</h5>
          </div>
        </div>
      </div>

      <div className="w-75 container py-5 ee">
        <div className="row">
          <div className="col-lg-6">
            <img src={image11} alt="" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2 className="mb-4">Excepteur sint occaecat cupidatat non proident</h2>
            <p>Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <button className="bb1">Find a local guide</button>
          </div>
        </div>
      </div>

      <div style={{backgroundColor:'#F8F0E9'}}>
        <div className="w-75 container py-5 d-flex flex-column justify-content-center align-items-center">
          <h2 className="hh1">Frequently asked questions</h2>
          <p className="py-4" style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <div className="line"></div>
          <div className="pt-4">
            <h5>Lorem ipsum dolor sit ametetur elit?</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="line pt-4"></div>
          </div>
          <div className="pb-4">
            <h5>Excepteur sint occaecat cupidatat non sunt in culpa qui officia deserunt mollit anim id est laborum?</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="line "></div>
          </div>
          <div>
            <h5>Tempor incididunt ut labore et dolore magna aliquat enim ad minim?</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="line pb-4"></div>
          </div>
          <div>
            <h5>Lorem ipsum dolor sit ametetur elit?</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="line pt-4"></div>
          </div>
          <div>
            <h5>Incididunt ut labore et dolore?</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="line pb-4"></div>
          </div>
        </div>
      </div>

      <div className="bg-success">
        <div className="w-75 container py-5 ff d-flex flex-column justify-content-center align-items-center">
          <h2>Find a local guide now</h2>
          <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <button className="bb1">Find a local guide</button>
        </div>
      </div>

    </div>
  );
}

export default BodyWeb;
