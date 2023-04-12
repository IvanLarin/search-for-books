import { css } from "@emotion/react";
import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';

type SearchFieldProps = {
    onFind: (searchText: string) => void
}

const searchFieldCss = css({
    position: 'relative'
})

const inputCss = css({
    fontSize: 20
})

const searchButtonCss = css({
    position: 'absolute',
    top: 3,
    right: 1,
    border: 'none',
    backgroundColor: 'white',
    padding: 0,
    height: 24,
    cursor: 'pointer'
})

export default function ({onFind}: SearchFieldProps) {
    const [searchText, setSearchText] = useState('');

    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter')
            onFind(searchText);
    }
    
    return (
        <div css={searchFieldCss}>
            <input css={inputCss} onChange={(e) => setSearchText(e.target.value)} onKeyDown={keyDownHandler}/>
            <button css={searchButtonCss} onClick={() => onFind(searchText)}><SearchIcon/></button>
        </div>
    )
}