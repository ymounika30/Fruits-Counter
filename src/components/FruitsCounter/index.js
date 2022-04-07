import {Component} from 'react'
import './index.css'

class FruitsContainer extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  onMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoesCount}</span> mangoes{' '}
            <span className="count">{bananasCount}</span> bananas
          </h1>
          <div className="image-card-container">
            <div className="image-container">
              <img
                className="mango-img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div className="button-container">
                <button
                  className="mango-button"
                  type="button"
                  onClick={this.onMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="image-container">
              <img
                className="banana-img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div className="button-container">
                <button
                  className="banana-button"
                  type="button"
                  onClick={this.onBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsContainer
