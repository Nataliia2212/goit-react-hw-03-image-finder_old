import { Component } from 'react'
import PropTypes from 'prop-types';
import css from './Searchbar.module.css'
import { GoSearch } from "react-icons/go";

export class Searchbar extends Component {
    state = {
        search: '',
    };

    handleSearchChange = event => {
        this.setState({ search: event.currentTarget.value.toLowerCase() })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.search);
        this.setState({ search: '' });
    }

    render() {
        return (
            <header className={css.searchbar}>
                <form onSubmit={this.handleSubmit} className={css.searchForm}>
                    <button type="submit" className={css.searchFormButton}>
                        <GoSearch />
                        <span className={css.searchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={css.searchFormInput}
                        type="text"
                        name='search'
                        value={this.state.search}
                        onChange={this.handleSearchChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
}


Searchbar.propTypes = {
   onSubmit: PropTypes.func.isRequired,
}