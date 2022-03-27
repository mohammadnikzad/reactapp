import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from './components/Card'
import MyAlert from './components/Alert'
import { Carousel } from 'react-bootstrap'
import ErrorBoundary from './components/errors/ErrorBoundary'

function App1() {
  const [stateArticle, setArticleState] = useState({
    articles: [
      { id: 1, title: 'Article 1', body: 'This is article 1' },
      { id: 2, title: 'Article 2', body: 'This is article 2' },
      { id: 3, title: 'Article 3', body: 'This is article 3' },
    ],
  })
  const [stateTitle, setTitleState] = useState({
    title: 'Hello Matnnama',
  })

  const loadMore = (e) => {
    let articles = [
      { id: 4, title: 'Article 4', body: 'This is article 4' },
      { id: 5, title: 'Article 5', body: 'This is article 5' },
      { id: 6, title: 'Article 6', body: 'This is article 6' },
    ]

    setArticleState((prevState) => {
      return {
        articles: [...prevState.articles, ...articles],
      }
    })
  }

  console.log(stateArticle)
  console.log(stateTitle)

  return (
    <div className='App'>
      {stateArticle.articles.map((article) => (
        <Card key={article.id} title={article.title} body={article.body} />
      ))}

      <button onClick={loadMore}>Load more</button>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('[App.js] run constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] run getDerivedStateFromProps')
    return null
  }

  shouldComponentUpdate(props, state) {
    console.log(props, state)
    console.log('[App.js] run shouldComponentUpdate')
    return true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((state, props) => ({
        articles: [
          ...state.articles,
          { id: 4, title: 'Article 4', body: 'This is article 4', active: 1 },
        ],
      }))
    }, 3000)
  }

  state = {
    articles: [
      { id: 1, title: 'Article 1', body: 'This is article 1', active: 1 },
      { id: 2, title: 'Article 2', body: 'This is article 2', active: 0 },
      { id: 3, title: 'Article 3', body: 'This is article 3', active: 1 },
    ],
    title: 'This is Matnnama',
    loading: false,
    btnHover: false,
    alert: {
      show: true,
    },
  }

  loadMore = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      let articles = [
        { id: 4, title: 'Article 4', body: 'This is article 4', active: 1 },
        { id: 5, title: 'Article 5', body: 'This is article 5', active: 0 },
        { id: 6, title: 'Article 6', body: 'This is article 6', active: 1 },
      ]

      this.setState((prevState) => {
        return {
          articles: [...prevState.articles, ...articles],
          loading: false,
        }
      })
    }, 3000)
  }

  mouseEnter = (e) => {
    this.setState({
      btnHover: true,
    })
  }

  mouseLeave = (e) => {
    this.setState({
      btnHover: false,
    })
  }

  setShow(status) {
    this.setState((prevState) => {
      return {
        alert: {
          show: status,
        },
      }
    })
  }

  render() {
    console.log('[App.js] run render')

    let articleList = this.state.articles.map((article, index) =>
      article.active ? (
        <Card key={index} title={article.title} body={article.body} />
      ) : null
    )

    let btnClasses = ['btn-more']

    if (this.state.btnHover) {
      btnClasses.push('active')
    }

    let { alert } = this.state
    return (
      <div className='App'>
        <MyAlert show={alert.show} setShow={this.setShow.bind(this)} />
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://static.roocket.ir/images/cover/2022/3/16/tsyLuvfe5O1SoOLObu78bhLTMu84rvyA8PqpIryS.jpg'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://static.roocket.ir/images/cover/2022/2/6/3PlQ3mofymYiMeBCoEhFioIYRAlLA8oZxjwrNDrX.png'
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://static.roocket.ir/images/cover/2022/2/6/eAJubdTlHdkyNIMjWauJpw8lE3YhWwuixXdTbBHW.png'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <ErrorBoundary>{articleList}</ErrorBoundary>
        {this.state.loading ? <div>Loading...</div> : null}
        <button
          // className={`btn-more ${this.state.btnHover ? 'active' : ''}`}
          className={btnClasses.join(' ')}
          onClick={this.loadMore}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          Load more
        </button>
      </div>
    )
  }
}

export default App
