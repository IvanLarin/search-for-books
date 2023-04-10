import { css } from "@emotion/react"

const cardCss = {
    self: css({
      backgroundColor: 'white',
      border: '1px solid #eee',
      borderRadius: '0.5rem',
      padding: '1rem'
    }),
  
    title: css({
      fontSize: '1.25rem'
    })
  }

export default function Header(){
    return (
        <div css={cardCss.self}>abc</div>
    )
}