import React, { Component } from 'react';

// const fetchData = async () => {
//   return fetch('https://www.googleapis.com/books/v1/volumes?q=henry')
// }

class SearchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  searchChanged(search) {
    this.setState({
      search
    });
  }

  processResults(data) {
    return data;
  }

  async handleSubmit(e) {
    e.preventDefault();

    let formData = 'https://www.googleapis.com/books/v1/volumes?q=henry';
    try {
      const data = await fetch(formData);
      const json = await data.json()
      console.log(json);

      // let results = [];
      // Get test first item.
      let results = json.items.map(item => {
        return {
          volumeInfo: item.volumeInfo,
          saleInfo: item.saleInfo
        }
      });

      console.log(results);

      // let testItem = json.items[0];
      // console.log(testItem);
      // let testItemParse = {
      //   volumeInfo: testItem.volumeInfo,
      //   saleInfo: testItem.saleInfo
      // }
      // console.log(testItemParse);

    } catch (error) {
      // do something with error
      console.error(error);

    }

  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   // alert('hi');
  //   // const bookmark = (({title, url, description, rating}) => ({title, url, description, rating}))(this.state);
  //   const url = 'https://www.googleapis.com/books/v1/volumes?q=henry';
  //   const options = {
  //     method: 'GET',
  //     // body: JSON.stringify(bookmark),
  //     // headers: {
  //     //   "Content-Type": "application/json",
  //     //   "Authorization": "Bearer $2a$10$ZhdeJefcb.5sx/DCmO/n8u5sJLcARAdbHw9tfm1mevGRq3s1.5DpW"
  //     // }
  //   };

  //   fetch(url, options)
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error('Something went wrong, please try again later');
  //       }
  //       return res.json();
  //     })
  //     .then(data => {
  //       // this.setState({
  //       //   title: "",
  //       //   url: "",
  //       //   description: "",
  //       //   rating: 1
  //       // });
  //       console.log(data);
  //       // this.props.handleAdd(bookmark);
  //       // let volumeInfo = data.items[0].volumeInfo;
  //       // let saleInfo = data.items[0].saleInfo;
  //       let results = this.processResults(data);
  //       this.props.handleSearch(results);
  //     })
  //     .catch(err => {
  //       this.setState({
  //         error: err.message
  //       });
  //     });
  // }


  render() {
    return (
      <form className="addbookmark__form" onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onChange={e => this.searchChanged(e.target.value)}
        />
      </form>
    );
  }
}

export default SearchApp;