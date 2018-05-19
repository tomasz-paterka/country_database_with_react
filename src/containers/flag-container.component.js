import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component.js';
import { getCountries } from '../actions/actions-countries.js';

class CountryFlagContainer extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		this.props.dispatch(getCountries());
	}
	
	render() {
		return (
			<div>
				<CountryFlagList countries={this.props.countries}/>
			</div>
		)
	}
}

const mapStateToProps = function(store) {
	return {
		countries: store.countriesReducer.countries		
	};
};

export default connect(mapStateToProps)(CountryFlagContainer);