import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeAdjBouquet, turnOffLoading } from '../actions/bouquetActions'
import { fetchAdjs, clearList } from '../actions/adjActions'
import Adjective from './adjective'
import { pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import "../Stylesheets/adjForm.scss"

const styles = {
  pulse: {
    animation: 'x 1s',
    animationName: Radium.keyframes(pulse, 'pulse')
  }
}

class AdjForm extends Component {
  state = {
    adjList: [],
    title: ""
  }

  componentDidMount() {
    this.props.turnOffLoading()
    this.props.fetchAdjs()
  }

  handleClick = (event) => {
    event.persist()
    if((this.props.adjList.length === 5) && !(this.state.title === "")) {
      this.props.makeAdjBouquet(this.props.adjList, this.props.userId, this.state.title)
      debugger
      this.props.submitClick(event)
    } else {
      alert("pls add more adjectives or a title!")
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClose = (event) => {
    this.props.submitClick(event)
    this.props.clearList()
  }

  render() {
    if(this.props.adjs[0]) {
      const makeAdjs = () => {
        return this.props.adjs.map(adj => <Adjective key={adj.id} {...adj}/>)
      }

      return (
        <StyleRoot>
        <div className="modal" style={styles.pulse}>
              <div className="modal-content">
                <span id="close" className="adjective" onClick={this.handleClose}>&times;</span>
                <h4>pls choose 5 adjectives</h4>
                <div className="adj-form-box">
                  <div className="title-bouquet">
                    <label htmlFor="title">Title Your Bouquet: </label><br/>
                    <input name="title" id="title" type="text" onChange={this.handleChange}/>
                  </div>
                  <div className="adj-con">
                    {makeAdjs()}
                  </div>
                  <button id="submit-btn" className="adjective" onClick={this.handleClick}>SUBMIT</button>
                </div>
              </div>
        </div>
      </StyleRoot>
      )
    } else {
      return null
    }
  }
}


const mapStateToProps = state => {
  return {
  adjs: state.adjReducer.adjs,
  adjList: state.adjReducer.adjList,
  userId: state.userReducer.currentUser.id,
  loading: state.bouquetReducer.loading
  }
}


const mapDispatchToProps = {
  makeAdjBouquet: makeAdjBouquet,
  fetchAdjs: fetchAdjs,
  clearList: clearList,
  turnOffLoading: turnOffLoading
}


export default connect(mapStateToProps, mapDispatchToProps)(AdjForm)
