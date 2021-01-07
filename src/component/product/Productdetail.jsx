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
import "../../assets/css/product.css";

class Productdetail extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-8 background">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <ul className="navbar-nav">
                <li className="nav-item logo">
                  <a className="nav-link" href="#" style={{ color: "#FFFFFF" }}>
                    travel web
                  </a>
                </li>
              </ul>
            </nav>
            <div className="container detail_content">
              <div className="place">Husøy, Norway</div>
              <label className="place_title">Northern lights evening</label>
              <div className="content_detail">
                <div className="row">
                  <div className="col-4">
                    <img
                      style={{
                        marginTop: 5 + "px",
                        marginLeft: 5 + "px",
                        marginRight: 5 + "px",
                        float: "left",
                        width: 40 + "px",
                        height: 32 + "px",
                      }}
                      src={location}
                      alt=""
                    />
                    <div
                      style={{
                        float: "left",
                      }}
                    >
                      <p
                        style={{
                          margin: 0 + "px",
                          fontSize: 16 + "px",
                        }}
                      >
                        location
                      </p>
                      <p
                        style={{
                          fontSize: 18 + "px",
                          fontWeight: "bold",
                          margin: 0 + "px",
                        }}
                      >
                        Husøy, Norway
                      </p>
                    </div>
                  </div>
                  <div className="col-4">
                    <img
                      style={{
                        marginTop: 5 + "px",
                        marginLeft: 5 + "px",
                        marginRight: 5 + "px",
                        float: "left",
                        width: 40 + "px",
                        height: 32 + "px",
                      }}
                      src={cal_brown}
                      alt=""
                    />
                    <div
                      style={{
                        float: "left",
                        height: 32 + "px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0 + "px",
                          fontSize: 16 + "px",
                        }}
                      >
                        Time
                      </p>
                      <p
                        style={{
                          fontSize: 18 + "px",
                          fontWeight: "bold",
                          margin: 0 + "px",
                        }}
                      >
                        Jun-August
                      </p>
                    </div>
                  </div>
                  <div className="col-4">
                    <img
                      style={{
                        marginTop: 5 + "px",
                        marginLeft: 5 + "px",
                        marginRight: 5 + "px",
                        float: "left",
                        width: 40 + "px",
                        height: 32 + "px",
                      }}
                      src={star}
                      alt=""
                    />
                    <div
                      style={{
                        float: "left",
                        height: 32 + "px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0 + "px",
                          fontSize: 16 + "px",
                        }}
                      >
                        Popularity
                      </p>
                      <p
                        style={{
                          fontSize: 18 + "px",
                          margin: 0 + "px",
                        }}
                      >
                        <b>4.08</b>(3256 reviews)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <nav
            className="navbar navbar-light"
            style={{
              height: 120 + "px",
              marginBottom: 35 + "px",
            }}
          >
            <div className="nav-item">
              <img src={more} alt="" />
            </div>
            <ul
              className="navbar-nav"
              style={{
                fontSize: 18 + "px",
                float: "right",
                display: "flex",
                flexDirection: "row"
              }}
            >
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Discover
                </a>
              </li>
              <li className="nav-item px-20">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <img
                  style={{
                    width: 56 + "px",
                    borderRadius: 8 + "px",
                  }}
                  src={avatar}
                  alt="..."
                  className="avatar-img"
                />
              </li>
            </ul>
          </nav>
          <label
            style={{
              fontSize: 38 + "px",
              fontWeight: "bold",
            }}
          >
            Booking Details
          </label>
          <p style={{ fontSize: 18 + "px", fontFamily: "Poppins" }}>
            Collections of the most beautiful places, experiences and unsual
            housing worldwide
          </p>
          <div
            className="card"
            style={{
              height: 131 + "px",
              marginBottom: 30 + "px",
              borderRadius: 10 + "px",
              fontFamily: "Poppins",
            }}
          >
            <div
              className="card-header"
              style={{
                fontWeight: "bold",
                fontSize: 18 + "px",
                fontFamily: "Poppins",
              }}
            >
              Persons
            </div>
            <div className="card-body row">
              <div
                className="col-6"
                style={{
                  width: 228 + "px",
                  height: 40 + "px",
                }}
              >
                <img
                  style={{
                    marginTop: 5 + "px",
                    marginLeft: 5 + "px",
                    float: "left",
                  }}
                  src={man}
                  alt=""
                />
                <div
                  style={{
                    float: "left",
                    width: 59 + "px",
                    height: 33 + "px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      margin: 0 + "px",
                      fontSize: 18 + "px",
                    }}
                  >
                    Adults
                  </p>
                  <p style={{ fontSize: 13 + "px", margin: 0 + "px" }}>
                    18 years
                  </p>
                </div>
                <div
                  style={{
                    marginLeft: 20 + "px",
                    width: 40 + "%",
                    height: 40 + "px",
                    float: "left",
                    borderRadius: 50 + "px",
                    backgroundColor: "#F2F2F2",
                    textAlign: "center",
                    fontFamily: "Poppins",
                  }}
                >
                  <label
                    style={{
                      color: "#4F4F4F",
                      fontSize: 24 + "px",
                    }}
                  >
                    +
                  </label>
                  <label
                    style={{
                      color: "#E5641c",
                      fontSize: 18 + "px",
                      fontWeight: "bold",
                      marginRight: 11 + "px",
                      marginLeft: 11 + "px",
                    }}
                  >
                    01
                  </label>
                  <label
                    style={{
                      color: "#4F4F4F",
                      fontSize: 24 + "px",
                    }}
                  >
                    -
                  </label>
                </div>
              </div>
              <div
                className="col-6"
                style={{
                  width: 251 + "px",
                  height: 40 + "px",
                }}
              >
                <img
                  style={{
                    marginTop: 5 + "px",
                    float: "left",
                  }}
                  src={child}
                  alt=""
                />
                <div
                  style={{
                    float: "left",
                    width: 33 + "%",
                    height: 33 + "px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      margin: 0 + "px",
                      fontSize: 18 + "px",
                    }}
                  >
                    Children
                  </p>
                  <p style={{ fontSize: 13 + "px", margin: 0 + "px" }}>
                    18 years
                  </p>
                </div>
                <div
                  style={{
                    marginLeft: 20 + "px",
                    width: 40 + "%",
                    height: 40 + "px",
                    float: "left",
                    borderRadius: 50 + "px",
                    backgroundColor: "#F2F2F2",
                    textAlign: "center",
                  }}
                >
                  <label
                    style={{
                      color: "#4F4F4F",
                      fontSize: 24 + "px",
                    }}
                  >
                    +
                  </label>
                  <label
                    style={{
                      color: "#E5641c",
                      fontSize: 18 + "px",
                      fontWeight: "bold",
                      marginRight: 11 + "px",
                      marginLeft: 11 + "px",
                    }}
                  >
                    01
                  </label>
                  <label
                    style={{
                      color: "#4F4F4F",
                      fontSize: 24 + "px",
                    }}
                  >
                    -
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{
              height: 131 + "px",
              marginBottom: 30 + "px",
              borderRadius: 10 + "px",
              fontFamily: "Poppins",
            }}
          >
            <div
              className="card-header"
              style={{ fontWeight: "bold", fontSize: 18 + "px" }}
            >
              Date
            </div>
            <div className="card-body row">
              <div
                className="col-6"
                style={{
                  width: 251 + "px",
                  height: 40 + "px",
                }}
              >
                <img
                  style={{
                    marginTop: 5 + "px",
                    marginLeft: 5 + "px",
                    marginRight: 5 + "px",
                    float: "left",
                    width: 40 + "px",
                    height: 32 + "px",
                  }}
                  src={calendar}
                  alt=""
                />
                <div
                  style={{
                    float: "left",
                    width: 173 + "px",
                    height: 32 + "px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      margin: 0 + "px",
                      fontSize: 18 + "px",
                      color: "#E5641c",
                    }}
                  >
                    6 January 2021
                  </p>
                  <p style={{ fontSize: 14 + "px", margin: 0 + "px" }}>
                    Wednesday
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{
              height: 212 + "px",
              marginBottom: 30 + "px",
              borderRadius: 10 + "px",
            }}
          >
            <div
              className="card-header"
              style={{ fontWeight: "bold", fontSize: 18 + "px" }}
            >
              Meals
            </div>
            <div className="card-body">
              <div className="row">
                <div
                  className="col-6"
                  style={{
                    width: 228 + "px",
                    height: 40 + "px",
                  }}
                >
                  <img
                    style={{
                      marginTop: 5 + "px",
                      marginLeft: 5 + "px",
                      marginRight: 5 + "px",
                      float: "left",
                      width: 32 + "px",
                      height: 32 + "px",
                    }}
                    src={breakfast}
                    alt=""
                  />
                  <div
                    style={{
                      float: "left",
                      width: 37 + "%",
                      height: 33 + "px",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                        margin: 0 + "px",
                        fontSize: 18 + "px",
                      }}
                    >
                      Breakfast
                    </p>
                    <p style={{ fontSize: 13 + "px", margin: 0 + "px" }}>
                      20 AED
                    </p>
                  </div>
                  <div
                    style={{
                      marginLeft: 20 + "px",
                      width: 37 + "%",
                      height: 40 + "px",
                      float: "left",
                      borderRadius: 50 + "px",
                      backgroundColor: "#F2F2F2",
                      textAlign: "center",
                    }}
                  >
                    <label
                      style={{
                        color: "#4F4F4F",
                        fontSize: 24 + "px",
                      }}
                    >
                      +
                    </label>
                    <label
                      style={{
                        color: "#E5641c",
                        fontSize: 18 + "px",
                        fontWeight: "bold",
                        marginRight: 11 + "px",
                        marginLeft: 11 + "px",
                      }}
                    >
                      01
                    </label>
                    <label
                      style={{
                        color: "#4F4F4F",
                        fontSize: 24 + "px",
                      }}
                    >
                      -
                    </label>
                  </div>
                </div>
                <div
                  className="col-6"
                  style={{
                    width: 228 + "px",
                    height: 40 + "px",
                  }}
                >
                  <img
                    style={{
                      marginTop: 5 + "px",
                      marginLeft: 5 + "px",
                      marginRight: 5 + "px",
                      float: "left",
                      width: 32 + "px",
                      height: 32 + "px",
                    }}
                    src={lunch}
                    alt=""
                  />
                  <div
                    style={{
                      float: "left",
                      width: 37 + "%",
                      height: 33 + "px",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                        margin: 0 + "px",
                        fontSize: 18 + "px",
                      }}
                    >
                      Lunch
                    </p>
                    <p style={{ fontSize: 13 + "px", margin: 0 + "px" }}>
                      35 AED
                    </p>
                  </div>
                  <div
                    style={{
                      marginLeft: 20 + "px",
                      width: 37 + "%",
                      height: 40 + "px",
                      float: "left",
                      borderRadius: 50 + "px",
                      backgroundColor: "#F2F2F2",
                      textAlign: "center",
                    }}
                  >
                    <label
                      style={{
                        color: "#4F4F4F",
                        fontSize: 24 + "px",
                      }}
                    >
                      +
                    </label>
                    <label
                      style={{
                        color: "#E5641c",
                        fontSize: 18 + "px",
                        fontWeight: "bold",
                        marginRight: 11 + "px",
                        marginLeft: 11 + "px",
                      }}
                    >
                      01
                    </label>
                    <label
                      style={{
                        color: "#4F4F4F",
                        fontSize: 24 + "px",
                      }}
                    >
                      -
                    </label>
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginTop: 38 + "px" }}>
                <div
                  className="col-6"
                  style={{
                    width: 228 + "px",
                    height: 40 + "px",
                  }}
                >
                  <img
                    style={{
                      marginTop: 5 + "px",
                      marginLeft: 5 + "px",
                      marginRight: 5 + "px",
                      float: "left",
                      width: 32 + "px",
                      height: 32 + "px",
                    }}
                    src={snacks}
                    alt=""
                  />
                  <div
                    style={{
                      float: "left",
                      width: 37 + "%",
                      height: 33 + "px",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                        margin: 0 + "px",
                        fontSize: 18 + "px",
                      }}
                    >
                      Snacks
                    </p>
                    <p style={{ fontSize: 13 + "px", margin: 0 + "px" }}>
                      07 AED
                    </p>
                  </div>
                  <div
                    style={{
                      marginLeft: 20 + "px",
                      width: 37 + "%",
                      height: 40 + "px",
                      float: "left",
                      borderRadius: 50 + "px",
                      backgroundColor: "#F2F2F2",
                      textAlign: "center",
                    }}
                  >
                    <label
                      style={{
                        color: "#4F4F4F",
                        fontSize: 24 + "px",
                      }}
                    >
                      +
                    </label>
                    <label
                      style={{
                        color: "#E5641c",
                        fontSize: 18 + "px",
                        fontWeight: "bold",
                        marginRight: 11 + "px",
                        marginLeft: 11 + "px",
                      }}
                    >
                      01
                    </label>
                    <label
                      style={{
                        color: "#4F4F4F",
                        fontSize: 24 + "px",
                      }}
                    >
                      -
                    </label>
                  </div>
                </div>
                <div
                  className="col-6"
                  style={{
                    width: 228 + "px",
                    height: 40 + "px",
                  }}
                >
                  <img
                    style={{
                      marginTop: 5 + "px",
                      marginLeft: 5 + "px",
                      marginRight: 5 + "px",
                      float: "left",
                      width: 32 + "px",
                      height: 32 + "px",
                    }}
                    src={dinner}
                    alt=""
                  />
                  <div
                    style={{
                      float: "left",
                      width: 37 + "%",
                      height: 33 + "px",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                        margin: 0 + "px",
                        fontSize: 18 + "px",
                      }}
                    >
                      Dinner
                    </p>
                    <p style={{ fontSize: 13 + "px", margin: 0 + "px" }}>
                      25 AED
                    </p>
                  </div>
                  <div
                    style={{
                      marginLeft: 20 + "px",
                      width: 37 + "%",
                      height: 40 + "px",
                      float: "left",
                      borderRadius: 50 + "px",
                      backgroundColor: "#F2F2F2",
                      textAlign: "center",
                    }}
                  >
                    <label
                      style={{
                        color: "#4F4F4F",
                        fontSize: 24 + "px",
                      }}
                    >
                      +
                    </label>
                    <label
                      style={{
                        color: "#E5641c",
                        fontSize: 18 + "px",
                        fontWeight: "bold",
                        marginRight: 11 + "px",
                        marginLeft: 11 + "px",
                      }}
                    >
                      01
                    </label>
                    <label
                      style={{
                        color: "#4F4F4F",
                        fontSize: 24 + "px",
                      }}
                    >
                      -
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            style={{
              width: 100 + "%",
              height: 70 + "px",
              color: "#FFFFFF",
              fontSize: 24 + "px",
              fontWeight: "bold",
              borderRadius: 50 + "px",
              borderColor: "#E5641C",
              backgroundColor: "#E5641C",
            }}
          >
            Book Now(256 AED)
          </button>
        </div>
      </div>
    );
  }
}

export default Productdetail;
