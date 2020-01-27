import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: "",
            inStock: ""
        }
    }

    searchHandleChange(event) {

        if (event.target.type === 'checkbox') {
            this.setState({ [event.target.name]: event.target.checked }, () => {
                const { searchText, inStock } = this.state
                this.props.filterValues({ searchText, inStock })
            })
        } else {
            this.setState({ [event.target.name]: event.target.value }, () => {
                const { searchText, inStock } = this.state;
                this.props.filterValues({ searchText, inStock });
            });
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.searchText} name="searchText" onChange={(e) => this.searchHandleChange(e)} />
                <input type="checkbox" value={this.state.inStock} name="inStock" onChange={(e) => this.searchHandleChange(e)} />
                <label htmlFor="scales">Only show products on stock</label>
            </div>
        )
    }
}

export default SearchBar