import React from 'react'

export const TextContext = createContext()
export const TextConsumer = TextContext.Consumer

export default class TextProvider extends React.Component {
  render() {
    const { children } = this.props
    if (!children) return null

    return (
      <TextContext.Consumer>
        {texts => (
          <TextContext.Provider value={texts}>
            {React.Children.only(children)}
          </TextContext.Provider>
        )}
      </TextContext.Consumer>
    )
  }
}
