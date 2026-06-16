import React, { useState } from "react";
import "./Useraccount.css"

const Profile = () => {

    return (

        <div className="profile-page">

            <h2>My Profile</h2>

            <div className="profile-card">

                <div className="profile-image">

                    MK

                </div>

                <div className="profile-details">

                    <div className="profile-row">

                        <label>Name</label>

                        <p>Muhesh Kumar</p>

                    </div>  

                    <div className="profile-row">

                        <label>Email</label>

                        <p>muhesh@gmail.com</p>

                    </div>

                    <div className="profile-row">

                        <label>Phone</label>

                        <p>+91 9876543210</p>

                    </div>

                    <div className="profile-row">

                        <label>Gender</label>

                        <p>Male</p>

                    </div>

                    <div className="profile-row">

                        <label>Member Since</label>

                        <p>2025</p>

                    </div>

                </div>

                <button className="edit-profile-btn">

                    Edit Profile

                </button>

            </div>

        </div>

    );

};

export default Profile;