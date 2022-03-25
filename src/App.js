import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from './components/Card'

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
  state = {
    articles: [
      { id: 1, title: 'Article 1', body: 'This is article 1', active: 1 },
      { id: 2, title: 'Article 2', body: 'This is article 2', active: 0 },
      { id: 3, title: 'Article 3', body: 'This is article 3', active: 1 },
    ],
    title: 'This is Matnnama',
    loading: false,
    btnHover: false,
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

  render() {
    let articleList = this.state.articles.map((article, index) =>
      article.active ? (
        <Card key={index} title={article.title} body={article.body} />
      ) : null
    )

    return (
      <div className='App'>
        {articleList}
        {this.state.loading ? <div>Loading...</div> : null}
        <button
          className='btn-more'
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
