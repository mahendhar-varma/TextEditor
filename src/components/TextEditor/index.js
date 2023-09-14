import {Component} from 'react'

import {
  MainContainer,
  Container,
  Heading,
  Image,
  Section,
  Button,
  StyledBoldIcon,
  StyledItalicIcon,
  StyledUnderlineIcon,
  StyledInput,
} from './styledComponent'

class TextEditor extends Component {
  state = {input: '', isBold: false, isItalic: false, isUnderline: false}

  addInput = event => {
    this.setState({input: event.target.value})
  }

  changeToBold = () => {
    this.setState(prevState => ({
      isBold: !prevState.isBold,
    }))
  }

  changeToItalic = () => {
    this.setState(prevState => ({
      isItalic: !prevState.isItalic,
    }))
  }

  changeToUnderline = () => {
    this.setState(prevState => ({
      isUnderline: !prevState.isUnderline,
    }))
  }

  render() {
    const {input, isBold, isItalic, isUnderline} = this.state

    const bold = isBold ? 'true' : undefined
    const italic = isItalic ? 'true' : undefined
    const underline = isUnderline ? 'true' : undefined

    return (
      <MainContainer>
        <Container card="true">
          <Container>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </Container>
          <Section outside="true" as="ul">
            <Section>
              <li>
                <Button data-testid="bold" onClick={this.changeToBold}>
                  <StyledBoldIcon size={20} bold={bold} />
                </Button>
              </li>
              <li>
                <Button data-testid="italic" onClick={this.changeToItalic}>
                  <StyledItalicIcon size={20} italic={italic} />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="underline"
                  onClick={this.changeToUnderline}
                >
                  <StyledUnderlineIcon size={20} underline={underline} />
                </Button>
              </li>
            </Section>
            <StyledInput
              value={input}
              onChange={this.addInput}
              bold={bold}
              italic={italic}
              underline={underline}
            />
          </Section>
        </Container>
      </MainContainer>
    )
  }
}

export default TextEditor
