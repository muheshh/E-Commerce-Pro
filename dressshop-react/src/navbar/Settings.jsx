import React from "react";

const Settings = () => {

    return (

        <div className="settings-page">

            <h2>⚙️ Settings</h2>

            <div className="settings-card">

                <h3>Notifications</h3>

                <div className="setting-item">

                    <label>
                        Email Notifications
                    </label>

                    <input
                        type="checkbox"
                        defaultChecked
                    />

                </div>

                <div className="setting-item">

                    <label>
                        SMS Notifications
                    </label>

                    <input
                        type="checkbox"
                        defaultChecked
                    />

                </div>

                <div className="setting-item">

                    <label>
                        Order Updates
                    </label>

                    <input
                        type="checkbox"
                        defaultChecked
                    />

                </div>

                <div className="setting-item">

                    <label>
                        Promotional Emails
                    </label>

                    <input
                        type="checkbox"
                    />

                </div>

            </div>

            <div className="settings-card">

                <h3>Security</h3>

                <p>Password: ********</p>

                <button className="settings-btn">
                    Change Password
                </button>

            </div>

            <div className="settings-card">

                <h3>Account</h3>

                <button className="logout-btn">
                    Logout
                </button>

            </div>

        </div>

    );

};

export default Settings;