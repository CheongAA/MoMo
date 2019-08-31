import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genre: '',
            sortBy: 'title'
        };
        this.sortByOptions = {
            title: 'title',
            year: 'year',
            rating: 'rating'
        }

        this.getSortByClass = this.getSortByClass.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        });
        this.props.search(this.state.genre, this.state.sortBy);
    }

    handleGenreChange(event) {
        this.setState({
            genre: event.target.value
        });
    }

    handleSearch(event) {
        this.props.search(this.state.genre, this.state.sortBy);
        event.preventDefault();
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            return <li className={this.getSortByClass(sortByOption)}
                key={sortByOption} onClick={this.handleSortByChange.bind(this, sortByOption)}>{sortByOption}</li>;
        });
    }



    render() {

        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleGenreChange} placeholder="Search Genre" />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;