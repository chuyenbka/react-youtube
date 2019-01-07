import React from 'react';

class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			term : ''
		};
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
	}

	handleInputChange(e) {
		this.setState({
			term: e.target.value
		});
	}

	render(){
		return (
			<div className="row" style={{marginTop: '50px'}}>
				<form style={{width: '100%'}} onSubmit={this.onSubmit.bind(this)}>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Tìm kiếm video youtube </label>
						<input type="text" 
								className="form-control" 
								placeholder="Nhập từ khóa cần tìm" 
								value={this.state.term} 
								onChange={(e) => this.handleInputChange(e)} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;