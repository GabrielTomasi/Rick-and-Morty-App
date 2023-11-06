import styled from "styled-components";
import { Input } from "./LoginForm";
export const StyledSearchBar = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 600px
`

export const SearchBarInput = styled(Input)`
display: flex;
position: relative;
align-self: center;
border: 1px solid;
margin: 5px;
width: 300px;
`