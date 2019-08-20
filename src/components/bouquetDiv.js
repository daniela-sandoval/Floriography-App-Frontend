import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import FlowerCircle from './flowerCircle';
import { deleteBouquet } from '../actions/bouquetActions';
import { makeFav, deleteFav, getFavorites } from '../actions/favActions';
import { sendEmail } from '../actions/userActions'
import EmailForm from './emailForm'
import "../Stylesheets/bouquetDiv.scss";

class BouquetDiv extends Component {
  state = {
    delete: false,
    emailModal: false,
    sent: false
  }

  componentDidMount() {
    this.props.getFavorites(this.props.currentId)
    this.setState({sent: false})
  }

  handleDate = () => {
    let dateToFormat = this.props.created_at
    return <Moment className="time-made" format="LLLL">{dateToFormat}</Moment>
  }

  handleClick = () => {
    this.setState({delete: true})
  }

  buttonClick = () => {
    this.setState({delete: false})
  }

  favClick = () => {
    this.props.makeFav(this.props.currentId, this.props.id)
  }

  unfavClick = () => {
    let favId = this.props.userFavs.find(fav => fav.bouquet_id === this.props.id).id
    this.props.deleteFav(favId)
  }

  deleteDiv = () => {
    this.props.deleteBouquet(this.props.id)
  }

  toggleEmailForm = () => {
    this.setState({emailModal: !this.state.emailModal})
  }

  sendEmail = async(email) => {
    await this.props.sendEmail(this.props.currentId, email, this.props.id)
    this.setState({emailModal: !this.state.emailModal})
    this.setState({sent: true})
  }

  render() {
    const makeCircles = () => {
      return this.props.bouquet_flowers.map(flower => <FlowerCircle key={flower.id} {...flower}/>)
    }
    return (
      <div className="bouquet">
        {this.state.delete ?
          <div className="prompt">
            <h3>Are you sure?</h3>
            <button onClick={this.deleteDiv}>Yes</button>
            <button onClick={this.buttonClick}>No</button>
          </div>
          :
          <div className="bouquet-div">
            <span onClick={this.handleClick} className="close-div">&times;</span>
            <div className="header">{this.props.name}
              <p>made by: {this.props.username}</p>
            </div>
            <div className="flower-con">
              {makeCircles()}
            </div>
            <footer>
              {this.props.userFavs.some(fav => fav.bouquet_id === this.props.id) ?
                <button className="footer-btn" onClick={this.unfavClick}>
                  <i className="fa fa-star"></i> Saved!
                </button>
                :
                <button className="footer-btn" onClick={this.favClick}>
                  <i className="fa fa-star-o"></i> Favorite
                </button>
              }
              <button className="footer-btn">
                <i onClick={this.toggleEmailForm} className={this.state.sent ? "fa fa-envelope": "fa fa-envelope-o"}></i> {this.state.sent ? "Sent!" : "Email?"}
              </button>
              {this.handleDate()}
            </footer>
          </div>
        }
        {this.state.emailModal ? <EmailForm onSubmit={this.toggleEmailForm} sendEmail={this.sendEmail}/> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.userReducer.username,
    currentId: state.userReducer.currentId,
    userFavs: state.favReducer.userFavs
  }
}

const mapDispatchToProps = {
  deleteBouquet: deleteBouquet,
  makeFav: makeFav,
  deleteFav: deleteFav,
  getFavorites: getFavorites,
  sendEmail: sendEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(BouquetDiv)
