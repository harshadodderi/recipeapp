import React, { Component } from 'react'
import axios from '../config/axios'
import Card from './Card'
import DetailedPage from './DetailedPage'
import './Homepage.css'
import { Link } from "react-router-dom"
export default class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: [],
      search: '',
    }
  }



  componentDidMount() {
    axios.get('recipe').then((response) => {
      const recipe = (response.data)
      this.setState({ recipe: recipe })
      console.log(response.data)
    }).catch((err) => {
      console.log(err.message)
    })
  }
  handleSearch = (e) => {
    this.setState({ search: e.target.value.substr(0, 20) })
  }

  render() {
    let inputSearched = this.state.recipe.filter(result => {
      return (
        result.name?.toLowerCase().indexOf(this.state.search?.toLowerCase()) !== -1
      );
    });
    return (
      <div className="homepage">
        <div className="search_bar">
          <label className="searchglass" >👓</label>
          <input placeholder="Search Your Favourite Recipe"
            type="search" value={this.state.search} onChange={(e) => this.handleSearch(e)} className='Input_attribute' />
        </div>
        <div className="cardmain">
          {
            inputSearched.map((ele) => {
              return (

                < Card ele={ele} />
              )
            })
          }  {/*  <Link to={`/${ele.id}`}></Link>*/}
        </div>
        <DetailedPage data={this.state.recipe} />
      </div>
    )
  }
}
