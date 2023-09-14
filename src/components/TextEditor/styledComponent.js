import styled from 'styled-components'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

export const MainContainer = styled.div`
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Container = styled.div`
  background-color: #1b1c22;
  display: flex;
  flex-direction: ${props => (props.card ? 'row' : 'column')};
  padding: 20px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 23px;
`

export const Image = styled.img`
  width: 200px;
  height: 300px;
`

export const Section = styled.div`
  border-width: ${props => props.outside && 1}px;
  border-color: ${props => props.outside && '#eeeeee'};
  border-style: ${props => props.outside && 'solid'};
  height: ${props => props.outside && 330}px;
  padding: ${props => !props.outside && 5}px;
  list-style-type: none;
  display: flex;
  flex-direction: ${props => (props.outside ? 'column' : 'row')};
  padding: ${props => props.outside && 0}px;
`

export const Button = styled.button`
  background: transparent;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
`

export const StyledBoldIcon = styled(VscBold)`
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
`

export const StyledItalicIcon = styled(GoItalic)`
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
`

export const StyledUnderlineIcon = styled(AiOutlineUnderline)`
  color: ${props => (props.underline ? '#faff00' : '#f1f5f9')};
`

export const StyledInput = styled.textarea`
  background-color: #25262c;
  border: none;
  outline: none;
  width: inherit;
  height: 296px;
  color: #f1f5f9;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
