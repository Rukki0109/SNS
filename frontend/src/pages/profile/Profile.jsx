import React from 'react'
import Topbar from '../../compornents/topbar/Topbar';
import Sidebar from '../../compornents/sidebar/Sidebar';
import Timeline from '../../compornents/timeline/Timeline';
import Rightbar from '../../compornents/rightbar/Rightbar';
import "./Profile.css"

export default function Profile() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={PUBLIC_FOLDER+"/post/3.jpeg"} alt="" className="profileCoverImg" />
                            <img src={PUBLIC_FOLDER+"/person/1.jpeg"} alt="" className="profileUserImg" />
                        </div>
                    </div>
                    <div className="profileInfo">
                        <h4 className='profileInfoName'>Shin Code</h4>
                        <span className="profileInfoDesc">Udemy講師をしています</span>
                    </div>
                    <div className="profileRightBottom">
                        <Timeline />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
