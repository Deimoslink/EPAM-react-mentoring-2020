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

interface FilterPropsI {
    setGenre: (val: string) => void;
    setSort: (val: string) => void;
    setOption: (val: string) => void;
    toggleDropdown: (val: boolean) => void;
    sortOrder: string;
    selectedOption: string;
    selectedGenre: string;
    showDropdown: boolean;
}


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
        selectedGenre: state.moviesReducer.selectedGenre,
        selectedOption: state.moviesReducer.selectedOption,
        sortOrder: state.moviesReducer.sortOrder,
        showDropdown: state.dropdownStateReducer.showDropdown,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setGenre: (selectedGenre: string) => {
            dispatch(setGenreAction(selectedGenre));
        },
        setOption: (selectedOption: string) => {
            dispatch(setOptionAction(selectedOption));
        },
        setSort: (sortOrder: string) => {
            dispatch(setSortAction(sortOrder));
        },
        toggleDropdown: (showDropdown: boolean) => {
            dispatch(toggleDropdownAction(showDropdown));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);