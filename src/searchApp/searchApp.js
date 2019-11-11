import React, { Component } from 'react';
import styled from 'styled-components'

const Form = styled.form`
  padding: 3px;
`;

const Label = styled.label`
  padding: 3px;
`;

const Input = styled.input`
  padding: 3px;
`;

class SearchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  searchChanged(search) {
    this.setState({
      search: search
    });
  }

  processResults(data) {
    return data;
  }

  async handleSubmit(e) {
    e.preventDefault();

    let searchValue = this.state.search;
    // console.log(searchValue);

    let formData = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`;
    try {
      const data = await fetch(formData);
      const json = await data.json()
      // console.log(json);

      // let results = [];
      // Get test first item.
      let results = json.items.map(item => {
        return {
          volumeInfo: item.volumeInfo,
          saleInfo: item.saleInfo
        }
      });

      // console.log(results);
      this.props.handleSearch(results);
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

  render() {
    return (
      <Form className="addbookmark__form" onSubmit={e => this.handleSubmit(e)}>
        <Label htmlFor="search">Search:</Label>
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onChange={e => this.searchChanged(e.target.value)}
        />
      </Form>
    );
  }
}

export default SearchApp;

