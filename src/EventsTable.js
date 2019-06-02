import React from 'react'
import ReactTable   from 'react-table'
import 'react-table/react-table.css'
// category: 1
// endDate: "11-19-2018 23:00"
// id: "11166333-9016-42a9-a5d2-fa432bda0519"
// location: "Tel Aviv"
// startDate: "11-19-2018 19:00"
// title: "My Birthdate Party"
// userId: "a3c66333-9016-42a9-a5d2-fa432bda0519"

 class EventsTable extends React.Component{
     constructor(){
         super()
      
     }
     render(){
         const data=[{
             id:'5'
         }]
         const columns=[
             {
                 Header:"Event ID",
                 accessor:"id",
                 filterable:true,
                 style:{
                        textAlign:'center',
                      
                 }
             },
             {
                Header:"Title",
                accessor:"title",
                filterable:true,
                style:{
                    textAlign:'left',
                  
             }
            },
            {
                Header:"Category",
                accessor:"category",
                filterable:true
            },
            {
                Header:"Location",
                accessor:"location",
                filterable:true
            },
            {
                Header:"Start Date",
                accessor:"startDate",
                filterable:true
            },
            {
                Header:"End Date",
                accessor:"endDate",
                filterable:true
            },
            {
                Header:"Actions",
                Cell : props=>{
                    return(
                        <button className="">Delete</button>
                    );
                },
                sortable:false,
                filterable:false
                
            }
         ]
         return(
             <ReactTable
             columns={columns}
            data={this.props.events}
            defaultPageSize={5  }
            showPageSizeOptions={false}
            noDataText={"add new Event"}
            resizable={false}
            
            >
             </ReactTable>
         );

     }

 } 
 export default EventsTable