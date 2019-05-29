import React from 'react'

class SearchComponent extends React.Component {
    render() {
        return (
            <>
                <form>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label class="col-form-label mr-2">Search By :</label>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md">
                            <input type="radio" id="searchById" name="search" aria-label="Radio button for following text input" checked />
                            <label for="eventId" class="col-form-label mr-2">Event ID :</label>
                            <input type="text" id="eventId" placeholder="Event ID" />
                        </div>
                    </div>
                    <div class="form-group row">

                        <div class="col-md">
                            <input type="radio" id="searchByCat" name="search" aria-label="Radio button for following text input" />
                            <label for="category" class="col-form-label mr-1">Category:</label>
                            <select id="category" style={{width: "150px" ,width: "120px"}} disabled  >

                                <option>Birthday</option>
                                <option>baby</option>
                                <option>new car</option>
                                <option>new job</option>
                                <option>wedding</option>
                            </select>
                        </div>
                        <div class="col-md">
                            <label for="from" class="col-form-label mr-1">From:</label>
                            <input type="Date" id="from" style={{width: "150px"}}placeholder="from" disabled />
                        </div>
                        <div class="col-md">
                            <label for="to" class="col-form-label mr-1">To:</label>
                            <input type="Date" style={{width: "150px"}} id="to" placeholder="to" disabled />
                        </div>
                        <div class="col-md">
                            <label for="location1" class="col-form-label mr-1">where:</label>
                            <input type="text" id="location1" style={{width: '150px'}} id="where" placeholder="Location" disabled />
                        </div>
                    </div>
                    <div class="form-group row">
                        <button class="btn btn-primary btn-lg ">Filter</button>
                    </div>
                </form>
            </>
        );
    }
}
export default SearchComponent