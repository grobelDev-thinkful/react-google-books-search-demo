import React, { Component } from 'react';

import ResultItem from '../ResultItem/ResultItem';


class ResultsList extends Component {
  render() {
    //   const bookmarks = this
    //         .props
    //         .bookmarks
    //         .map((bookmark, i) => <Bookmark { ...bookmark } key={i}/>);
    const results = this
      .props
      .results
      .map((result, i) => <ResultItem {...result} key={i}></ResultItem>);
    return (
      <div>{results}</div>
      // <div className="bookmarkList">
      // {bookmarks}
      // </div>
    );
  }
}

ResultsList.defaultProps = {
  results: []
};

export default ResultsList;