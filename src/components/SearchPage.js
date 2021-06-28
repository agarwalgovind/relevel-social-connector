import React from 'react';
import "../styles/SearchPage.css";
import {SearchOutline, CloseOutline} from 'react-ionicons'

const userList = [
    {
        "imgSrc" : "icons/m1.jpg",
        "name" : "Daniel",
        "doj" : "Joined in 2017",
        "description" : "Daniel is a comedian living in Nashville.",
        "friends" : "10"
    },
    {
        "imgSrc" : "icons/m2.png",
        "name" : "Damien",
        "doj" : "Joined in 2016",
        "description" : "Damien is an actor.",
        "friends" : "10"
    },
    {
        "imgSrc" : "icons/m3.png",
        "name" : "Richard",
        "doj" : "Joined in 2017",
        "description" : "Richard is a sales guy.",
        "friends" : "10"
    },
    {
        "imgSrc" : "icons/f1.png",
        "name" : "Natasha",
        "doj" : "Joined in 2020",
        "description" : "Natasha is a fashion designer.",
        "friends" : "10"
    },
    {
        "imgSrc" : "icons/f2.png",
        "name" : "Rimi",
        "doj" : "Joined in 2020",
        "description" : "Jimi is a professional lawyer.",
        "friends" : "10"
    },
    {
        "imgSrc" : "icons/m2.png",
        "name" : "Richard",
        "doj" : "Joined in 2017",
        "description" : "Richard is a sales guy.",
        "friends" : "10"
    },
    {
        "imgSrc" : "icons/m1.jpg",
        "name" : "Natasha",
        "doj" : "Joined in 2020",
        "description" : "Natasha is a fashion designer.",
        "friends" : "10"
    },
    {
        "imgSrc" : "icons/f1.png",
        "name" : "Rimi",
        "doj" : "Joined in 2020",
        "description" : "Jimi is a professional lawyer.",
        "friends" : "10"
    }

]

class SearchBar extends React.Component {
    state = { searchValue: '' };

    onInputChange = e => {
        e.preventDefault();
        console.log(e.target.value.toLowerCase())
        let searchValue = e.target.value.toLowerCase();
        this.setState({
            searchValue: searchValue
        });
    };

    clearSearchHandler = event => {
        this.setState({
            searchValue: ''
        });
    };

    onFormSubmit = e => {
        e.preventDefault();
        console.log(e.target.value.toLowerCase())
    };

    render() {
        let style;
        if(this.state.searchValue.length > 0){
            style = {
                marginRight: '5px',
                opacity: '1'
            }
        }
        else{
            style = {
                marginRight: '5px',
                opacity: '0'
            }
        }

        return (
            <div className="Search">
                {/*<div className=" ui segment">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <label>Video Search</label>
                            <input
                                type="text"
                                value={this.state.term}
                                onChange={this.onInputChange}
                            />
                        </div>
                    </form>
                </div>*/}
                <div >
                    <div >
                        <form onSubmit={this.onFormSubmit} className="searchBar-container">
                        <SearchOutline
                            name="search-outline"
                            height="25px"
                            width="25px"
                        />
                        <input type="text"
                               name="search"
                               placeholder="Search for friends"
                               value={this.state.searchValue}
                               onChange={this.onInputChange}
                        />
                        <CloseOutline
                            name="close-outline"
                            style={style}
                            onClick={this.clearSearchHandler}></CloseOutline>
                        </form>
                    </div>
                </div>
                <div className="ss1">
                {userList.map(user => {
                    return (
                        <div className="ss">
                        <div className="ui card">
                            <div className="image"><img src={user.imgSrc}/></div>
                            <div className="content">
                                <div className="header">{user.name}</div>
                                <div className="meta">{user.doj}</div>
                                <div className="description">{user.description}</div>
                            </div>
                            <div className="extra content"><a><i aria-hidden="true" className="user icon"></i>{user.friends}</a></div>
                            {/*<div className="extra content">
                        <div className="ui two buttons">
                            <button className="ui green basic button">Approve</button>
                            <button className="ui red basic button">Decline</button>
                        </div>
                    </div>*/}
                            <div className="extra content">
                            <button className="ui green button">Add Friend</button>
                    </div>
                            {/*<div className="extra content">
                                <button className="ui red button">Remove Friend</button>
                            </div>*/}
                        </div>
                        </div>
                    )
                })}
                </div>
            </div>
        );
    }
}

export default SearchBar;