import React from 'react'

class CreateWishComponent extends React.Component{
 render(){
     return(
        <div class="col-sm">
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <form class="text-center border border-light p-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm">
                                        <div class="row">
                                        </div>
                                        <div class="row">
                                            <label for="fromtext">From:</label>
                                        </div>
                                        <div class="row mb-5">
                                        </div>
                                        <div class="row">
                                            <label for="fromtext">Wishing you :</label>
                                        </div>
                                        <div class="row mb-5">
                                        </div>
                                        <div class="row  mb-5">
                                        </div>
                                        <div class="row  mb-5">
                                        </div>
                                        <div class="row  mb-5">
                                        </div>
                                        <div class="row  mb-5">
                                        </div>
                                        <div class="row">
                                            <label for="ImgURL">ImgURL:</label>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div class="row">

                                            <input type="text" id="fromtext" class="form-control mb-4"
                                                style={{width: '17rem'}} placeholder="Please enter your name "/>
                                        </div>
                                        <div class="row">

                                        </div>
                                        <div class="row mb-5">
                                            <textarea class="form-control rounded-0" id="wishingtxt" rows="10"
                                                placeholder=""></textarea>
                                        </div>

                                        <div class="row mb-5">
                                            <input type="text" id="ImgURL" class="form-control mb-4"
                                                placeholder="ImgURL "/>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm">
                                        </div>
                                        <div class="col-sm">
                                        </div>
                                        <div class="col-sm">
                                            <button id="sendWish" class="btn btn-info " style={{width: '18rem'}}
                                                type="submit">Add wish</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </form>
                    
                </div>
            </div>
</div>
    </div>
     );
 }   
}
export default CreateWishComponent