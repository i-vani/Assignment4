import React, { Component } from 'react'

class DemoForm extends Component {

    constructor(props) {
        super(props)

        this.state =
        {
            username: '',
            comment: '',
            DDOption: 'North-Delhi',
            Roption: '',
            CoptionYes: true,
            CoptionNo: false
        }
    }

    handleUserChange = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    handleUserComment = (event) => {
        this.setState(
            {
                comment: event.target.value
            }
        )
    }

    handleMenuOptions = (event) => {

        if(event.target.type==='checkbox')
            this.setState({[event.target.name]: event.target.checked});
        else
            this.setState({[event.target.name]: event.target.value});
    }

   
    render() {

        let message ;

        if(this.state.CoptionYes===false && this.state.CoptionNo===false)
        {
            message=""
        }
        else if(this.state.CoptionYes===true && this.state.CoptionNo===true)
        {
            message="Yes and No"
        }
        else if(this.state.CoptionYes===true)
        {
            message="Yes"
        }
        else
        {
            message="No";
        }
        return (
            <>
                <form>
                    <div>
                        <label htmlFor="username">UserName</label>
                        <input type="text" id="username" value={this.state.username} onChange={this.handleUserChange} />
                    </div>
                    <div>
                        <label htmlFor="comment">Comments</label>
                        <textarea id="comment" value={this.state.comment} onChange={this.handleUserComment}></textarea>
                    </div>
                    <label>
                        Select Your Location In Delhi  :
                        <select name="DDOption" value={this.state.DDOption} onChange={this.handleMenuOptions}>
                            <option value="North-Delhi">North-Delhi</option>
                            <option value="South-Delhi">South-Delhi</option>
                            <option selected value="East-Delhi">East-Delhi</option>
                            <option value="West-Delhi">West-Delhi</option>
                        </select>
                    </label>

                    <br/>
                    <label>
                        Your Current Age:
                    </label>
                    <label>
                        Below 18
                        <input name="Roption" type="radio" value="Below 18" checked={this.state.Roption === 'Below 18'} onChange={this.handleMenuOptions} />
                    </label>
                    <label>
                        18-50
                        <input name="Roption" type="radio" value="18-50" checked={this.state.Roption === '18-50'} onChange={this.handleMenuOptions} />
                    </label>
                    <label>
                        Above 50
                        <input name="Roption" type="radio" value="Above 50" checked={this.state.Roption === 'Above 50'} onChange={this.handleMenuOptions} />
                    </label>

                    <br/>
                    <label>
                        Are you an Indian  Yes
                        <input name="CoptionYes" type="checkbox" checked={this.state.CoptionYes} onChange={this.handleMenuOptions}/>
                        No 
                        <input name="CoptionNo" type="checkbox" checked={this.state.CoptionNo} onChange={this.handleMenuOptions}/>
                    </label>
                </form>
                <div>
                    <p>DropDown Selected value: {this.state.DDOption}</p>
                    <p>Radio Button Selected value: {this.state.Roption}</p>
                    <p>checkbox option selected value: {message}</p>
                </div>
            </>
        )
    }
}


export default DemoForm