import React, { Component } from 'react';
import axios from 'axios'


class TableRow extends Component {
constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: this.props.obj.name,
            ingredients: this.props.obj.ingredients,
            preparation: this.props.obj.preparation,
            author: this.props.obj.author
          }
        }   
        onSubmit(e) {
        e.preventDefault();
        const serverport = {
            name: this.state.name
        }
        axios.delete('/serverport/delete/' +this.props.obj._id)
        .then(res => console.log("sucsses"));
        
        
      
        
    
    }

  render() {
    return (
        



          <div className="card">
          <div className="card-body">
            <h4 className="card-title">{this.props.obj.name}</h4>
            <h6 className="text-muted card-subtitle mb-2">{this.props.obj.ingredients}</h6>
            <p>{this.props.obj.preparation}</p>
            <p className="card-text">{this.props.obj.author}</p>


            <form onSubmit={this.onSubmit}>
              <input type="submit" value="Delete" className="btn btn-secondary m-2"/>
            </form>
            <form onSubmit={console.log(this.props.obj.author)}>
              <input type="submit" value="Update" className="btn btn-secondary m-2"/>
            </form>

            </div>
        </div>
    );
  }
}

export default TableRow;
