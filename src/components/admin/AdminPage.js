import React, {Component} from "react";

class AdminPage extends Component {
    state = {
        chicken: {
            total: 200
        }
    };

    // componentDidMount() {}

    render() {
       return (
           <div>
               <h2>
                   Admin Page
               </h2>
               <hr/>
               <form>
                   <h3>
                       Current Total: 100
                   </h3>
                   <h3>
                       Initial Total : 200
                   </h3>
                   <div className="form-group mt-5">
                       <label htmlFor="chicken-total">Chicken total :</label>
                       <input type="email" className="form-control" id="chicken-total"
                              placeholder="200" />
                       <small id="emailHelp" className="form-text text-muted">This changes complete total.</small>
                       <button className="btn btn-primary mt-4 float-right">Edit</button>
                   </div>
               </form>
           </div>
       )
   }
}

export default AdminPage;