import React from 'react';

export default class Search extends React.Component {
  state = {
    searchContent: '',
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onUserSearch(this.state.searchContent);

    this.setState({
      searchContent: '',
    });
  };

  render() {
    const labelStyle = {
      fontSize: 'larger',
      marginBottom: '10px',
      letterSpacing: '1px',
    };
    return (
      <div className='ui container'>
        <div className='ui segment' style={{ margin: '20px' }}>
          <form onSubmit={this.onFormSubmit} className='ui form'>
            <div className='field'>
              <label style={labelStyle}>Search a Video</label>
              <div className='ui icon input'>
                <input
                  type='text'
                  value={this.state.searchContent}
                  onChange={(e) =>
                    this.setState({ searchContent: e.target.value })
                  }
                />
                <i className='search icon'></i>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
