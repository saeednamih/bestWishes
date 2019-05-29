import React from 'react'

class CreateEventComponent extends React.Component{
    render(){
        return(
            
        <div class="container-fluid">

           
        <div class="row mt-5">


   
            <div class="col-md-2">
            </div>

            <div class="col-md-8">
         
                <div>
     
                    <div class="form-group">
                        <label for="slctCategory">Category</label>
                        <select class="form-control" id="slctCategory">
                            <option value="">Select Category</option>
                            <option value="Angular">Birthday</option>
                            <option value="JavaScript">Wedding</option>
                            <option value="React">Baby</option>
                            <option value="Node">Game</option>
                        </select>
                        <span class="error hidden">*</span>
                    </div>



                    <div class="form-group">
                        <label for="txtTitle">Title</label>
                        <input type="text" class="form-control" id="txtTitle"
                            placeholder="Please Enter Your Event Name" />

                    </div>

                    <div class="form-group">
                        <label for="txtTime txtTime">When</label>
                        <input type="date" id="txtDate" />
                        <input type="time" id="txtTime" />
                        <span class="error hidden">*</span>
                    </div>

                    <div class="form-group">
                            <label for="where">Where</label>
                            <input type="text" class="form-control" id="where"
                                placeholder="Please Enter The Location" />

                        </div>


                            
              
          
                    <button id="cerateEvent" class="btn btn-primary btn-block">Cerate Event</button>
                    <button id="back" class="btn btn-primary btn-block">Back To  My Events</button>


                </div>

            </div>


            <div class="col-md-2 event-preview">

            </div>

        </div>

    
        <div class="row mt">
            <div id="eventsGallery" class="container-fluid">
            </div>

        </div>
    </div>
        );
    }
}
export default CreateEventComponent