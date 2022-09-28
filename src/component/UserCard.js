import React from 'react'

const UserCard = ({ el }) => {
    return (

        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-secondary">
                        <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" alt="" />
                    </button>
                    <span className="name mt-3">{el.name}</span>
                    <span className="idd">EM@IL: {el.email}</span>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                        <span className="idd1">ADDRESS: {el.address.city} - {el.address.street}</span>
                        <span><i className="fa fa-copy"></i></span>
                    </div>

                    <span className="follow">ZIPCODE: {el.address.zipcode}</span>

                    <div className="text mt-3">
                        <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br /><br /> Artist/ Creative Director by Day #NFT minting@ with FND night. </span>

                        <div className="gap-3 mt-3 icons d-flex fle/x-row justify-content-center align-items-center"> <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span> <span><i className="fa fa-instagram"></i></span>
                            <span><i className="fa fa-linkedin"></i></span>
                        </div>
                        <div className=" px-2 rounded mt-4 date ">
                            <span className="join">Joined May,2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard