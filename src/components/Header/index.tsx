import { css } from "@emotion/react"
import SearchField from "../SearchField"

const headerCss = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#4d4d4d',
  paddingTop: 20,
  paddingBottom: 20
})

const titleCss = css({
  color: 'white',
  fontSize: 30,
  marginBottom: 10
})

export default function Header(){
  
  const find = (text: string) => {

  }
  
  return (
        <div css={headerCss}>
          <div css={titleCss}>Search for books</div>
          <SearchField onFind={find}/>
        </div>
    )
}