import * as React from 'react';
import {Genres} from '../../components/genres/Genres';
import {Options} from '../../components/options/Options';
import {connect} from 'react-redux';
import {
    setOptionAction,
    setGenreAction,
    setSortAction, toggleDropdownAction
} from '../../core/actions/actions';
import {ApplicationStateI} from '../../core/interface';
import './Filter.scss';
import {FilterPropsI} from './Filter.interface';


class Filter extends React.Component<FilterPropsI, {}> {
    render() {
        return (
            <div className="filter">
                <Genres setGenre={(item) => this.props.setGenre(item)} selectedGenre={this.props.selectedGenre}/>
                <Options
                    setOption={(item) => this.props.setOption(item)}
                    sortOrder={this.props.sortOrder}
                    setSort={(sortOrder) => this.props.setSort(sortOrder)}
                    selectedOption={this.props.selectedOption}
                    showDropdown={this.props.showDropdown}
                    toggleDropdown={(showDropdown) => this.props.toggleDropdown(showDropdown)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: ApplicationStateI) => {
    return {
        selectedGenre: state.movies.selectedGenre,
        selectedOption: state.movies.selectedOption,
        sortOrder: state.movies.sortOrder,
        showDropdown: state.dropdownState.showDropdown,
    };
};

const mapDispatchToProps = {
    setGenre: setGenreAction,
    setOption: setOptionAction,
    setSort: setSortAction,
    toggleDropdown: toggleDropdownAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
