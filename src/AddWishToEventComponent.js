import React from 'react'

class AddWishToEventComponent extends React.Component{
    render(){
        return(
        <div class="container">
        <form id="form1">
            <div class="form-group row mt-5">
                <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control" id="inputPassword" placeholder="title"
                        value="wedding invitation"/>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">When</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control" id="inputPassword" placeholder="date"
                        value="Thursday  Apr 18, 2019"/>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Where</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control" id="inputPassword" value="Tel Aviv, Israel"/>
                </div>
            </div>
            <button id="addBestWish" class="btn btn-primary">Add a Best Wish</button>
        </form>
        <div id="students-gallery" class="row mt-5">
            <div class="col-sm-3">
                <div class="card" style={{width: "18rem"}}>
                    <img src="imges\wishW.jpg" class="card-img-top" alt="..." />

                    <div class="card-body">
                        <h5 class="card-title">saeed </h5>
                        <p class="card-text">
                            Congratulations on your wedding day,
                            Each of you is very special in your own way.
                            Together you are even more special,
                            May your love will never be perishable!
                        </p>

                    </div>
                </div>
            </div>
            <div class="col-sm-1"></div>
            <div class="col-sm-3">

                <div class="card" style={{width: "18rem"}}>
                    <img src="imges\wishW.jpg" class="card-img-top" alt="..." />

                    <div class="card-body">
                        <h5 class="card-title">saeed </h5>
                        <p class="card-text">
                            Congratulations on your wedding day,
                            Each of you is very special in your own way.
                            Together you are even more special,
                            May your love will never be perishable!
                        </p>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-1"></div>


    </div>);

    }
}
export default AddWishToEventComponent