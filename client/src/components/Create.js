import React, { Component } from 'react';
import axios from 'axios';
export default class Create extends Component {



    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeIngredients = this.onChangeIngredients.bind(this);
        this.onChangePreparation = this.onChangePreparation.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.state = {
            name: '',
            ingredients: '',
            preparation: '',
            author: ''

        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeIngredients(e) {
        this.setState({
            ingredients: e.target.value
        });
    }
    onChangePreparation(e) {
        this.setState({
            preparation: e.target.value
        });
    }
    onChangeAuthor(e) {
        this.setState({
            author: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const serverport = {
            name: this.state.name,
            ingredients: this.state.ingredients,
            preparation:this.state.preparation,
            author:this.state.author
        }
        axios.post('/serverport/add', serverport)
        .then(res => console.log(res.data));
        
        this.setState({
            name: '',
            ingredients: '',
            preparation: '',
            author: ''
        });
    }

    render() {
        return (
            /*<div style={{marginTop: 50}}>
                <h3>Add New Server</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Host Name:  </label>
                        <input type="text" className="form-control" value={this.state.name}  onChange={this.onChangeHostName}/>
                    </div>
                    <div className="form-group">
                        <label>Add Server Port: </label>
                        <input type="text" className="form-control" value={this.state.port}  onChange={this.onChangePort}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Node server" className="btn btn-primary"/>
                    </div>
                </form>
            </div>*/
            <div className="form-group">
                <form onSubmit={this.onSubmit}>
                    <label>Hot Dog name</label>
                    <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName}/>
                    <label>Ingredients</label>
                    <textarea className="form-control" rows="6" value={this.state.ingredients} onChange={this.onChangeIngredients}></textarea>
                    <label>Preparation</label>
                    <textarea className="form-control" rows="6" value={this.state.preparation} onChange={this.onChangePreparation}></textarea>
                    <label>Author</label><input
                    type="text" className="form-control" value={this.state.author} onChange={this.onChangeAuthor}/>
        
                    <input type="submit" value="Add" className="btn btn-secondary m-2"/>
                </form>
            </div>






        )
    }
}
