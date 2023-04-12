import { css } from "@emotion/react";
import { useState } from "react"

type SearchFieldProps = {
    onFind: (searchText: string) => void
}

const inputCss = css({
    fontSize: 20
})

export default function ({onFind}: SearchFieldProps) {
    const [searchText, setSearchText] = useState('');
    
    return (
        <div>
            <input css={inputCss} onChange={(e) => setSearchText(e.target.value)} />
            <span>{searchText}</span>
        </div>
    )
}