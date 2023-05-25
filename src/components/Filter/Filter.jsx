import { Component } from "react"



export class Filter extends Component {
    handleInputSearch = (e) => {
        console.log(e.currentTarget.value)
        this.props.searchContact(e.currentTarget.value)
    };

    render() {
        return (
            <>
                <input
                    type="text"
                    onChange={this.handleInputSearch}
                    placeholder='search'/>
            </>
        );
    }
    
}