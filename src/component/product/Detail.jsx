import React, { Component } from "react";

import man from "../../assets/svg/man.svg";
import child from "../../assets/svg/child.svg";
import calendar from "../../assets/svg/calendar.svg";
import breakfast from "../../assets/svg/breakfast.svg";
import lunch from "../../assets/svg/lunch.svg";
import snacks from "../../assets/svg/snacks.svg";
import dinner from "../../assets/svg/dinner.svg";
import more from "../../assets/svg/more.svg";
import location from "../../assets/svg/location.svg";
import cal_brown from "../../assets/svg/cal_brown.svg";
import star from "../../assets/svg/star.svg";

import avatar from "../../assets/img/avatar.png";

import "../../assets/css/detail.css";

class Detail extends Component {
  render() {
    return (
      <div className="container-fluid row">
        <div className="col-lg-8 col-md-12 sidebar">
          <nav className="navbar navbar-light">
            <ul className="navbar-nav top-bar">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  travel web
                </a>
              </li>
            </ul>
          </nav>
          <div className="container detail-content">
            <p className="place-name">Husøy, Norway</p>
            <div className="place-detail">Northern lights evening</div>
            <div className="place-content">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className="row">
                    <div className="col-2">
                      <img src={location} alt="" />
                    </div>
                    <div className="col-10">
                      <p className="pl-title">location</p>
                      <p className="pl-detail">Husøy, Norway</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className="row">
                    <div className="col-2">
                      <img src={cal_brown} alt="" />
                    </div>
                    <div className="col-10">
                      <p>Time</p>
                      <p>Jun-August</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className="row">
                    <div className="col-2">
                      <img src={star} alt="" />
                    </div>
                    <div className="col-10">
                      <p>Popularity</p>
                      <p>
                        <b>4.08</b>(3256 reviews)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <nav className="navbar navbar-light">
            <ul className="navbar-nav top-bar">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={more} alt="" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Discover
                </a>
              </li>
              <li className="nav-item mx-20">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <img
                  src={avatar}
                  alt="..."
                  className="avatar-img avatar-online"
                />
              </li>
            </ul>
          </nav>
          <p className="title">Booking Details</p>
          <p className="detail">
            Collections of the most beautiful places, experiences and unsual
            housing worldwide
          </p>
          <div className="card">
            <div className="card-header">Persons</div>
            <div className="card-body row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-lg-4 col-xl-2 col-sm-2 col-4 icon">
                    <img src={man} alt="" />
                  </div>
                  <div className="col-lg-8 col-xl-5 col-sm-5 col-8">
                    <p className="ca_title">Adults</p>
                    <p className="ca_content">18 years</p>
                  </div>
                  <div className="col-lg-12 col-xl-5 col-sm-5 col-12 count show_num">
                    <label className="min">-</label>
                    <label className="num">01</label>
                    <label className="pls">+</label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-lg-4 col-xl-2 col-sm-2 col-4 icon">
                    <img src={child} alt="" />
                  </div>
                  <div className="col-lg-8 col-xl-5 col-sm-5 col-8">
                    <p className="ca_title">Children</p>
                    <p className="ca_content">18 years</p>
                  </div>
                  <div className="col-lg-12 col-xl-5 col-sm-5 col-12 count show_num">
                    <label className="min">-</label>
                    <label className="num">01</label>
                    <label className="pls">+</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Date</div>
            <div className="card-body row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-lg-4 col-xl-3 col-sm-3 col-2 pt-10">
                    <img src={calendar} alt="" />
                  </div>
                  <div className="col-lg-8 col-xl-9 col-sm-9 col-10">
                    <p className="date">6 January 2021</p>
                    <p className="day">Wednesday</p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Meals</div>
            <div className="card-body">
              <div className="row mt-10">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-lg-4 col-xl-2 col-sm-2 col-4 icon">
                      <img src={breakfast} alt="" />
                    </div>
                    <div className="col-lg-8 col-xl-5 col-sm-5 col-8">
                      <p className="ca_title">Breakfast</p>
                      <p className="ca_content">20 AED</p>
                    </div>
                    <div className="col-lg-12 col-xl-5 col-sm-5 col-12 count show_num">
                      <label className="min">-</label>
                      <label className="num">01</label>
                      <label className="pls">+</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-lg-4 col-xl-2 col-sm-2 col-4 icon">
                      <img src={lunch} alt="" />
                    </div>
                    <div className="col-lg-8 col-xl-5 col-sm-5 col-8">
                      <p className="ca_title">Lunch</p>
                      <p className="ca_content">35 AED</p>
                    </div>
                    <div className="col-lg-12 col-xl-5 col-sm-5 col-12 count show_num">
                      <label className="min">-</label>
                      <label className="num">01</label>
                      <label className="pls">+</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-lg-4 col-xl-2 col-sm-2 col-4 icon">
                      <img src={snacks} alt="" />
                    </div>
                    <div className="col-lg-8 col-xl-5 col-sm-5 col-8">
                      <p className="ca_title">Snacks</p>
                      <p className="ca_content">07 AED</p>
                    </div>
                    <div className="col-lg-12 col-xl-5 col-sm-5 col-12 count show_num">
                      <label className="min">-</label>
                      <label className="num">01</label>
                      <label className="pls">+</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-lg-4 col-xl-2 col-sm-2 col-4 icon">
                      <img src={dinner} alt="" />
                    </div>
                    <div className="col-lg-8 col-xl-5 col-sm-5 col-8">
                      <p className="ca_title">Dinner</p>
                      <p className="ca_content">25 AED</p>
                    </div>
                    <div className="col-lg-12 col-xl-5 col-sm-5 col-12 count show_num">
                      <label className="min">-</label>
                      <label className="num">01</label>
                      <label className="pls">+</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="btn-style btn">
            Book Now (256 AED)
          </button>
        </div>
      </div>
    );
  }
}

export default Detail;
