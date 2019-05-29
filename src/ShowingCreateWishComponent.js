import React from 'react'

class ShowingCreateWish extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <div class="col-md-2"></div>
                        <div class="col-md-5">
                            <div class="card" style={{ width: '18re' }}>
                                <img id="imgURL" class="img img-responsive full-width" src="..asset/imges/addWish.jpg"/> 
                                    <div class="card-body">
                                <h5 id="fromCard" class="card-title">wedding invitation </h5>
                                <p class="card-text">
                                    <p id="wishing"> Thursday</p>
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
 }
}
export default ShowingCreateWish
