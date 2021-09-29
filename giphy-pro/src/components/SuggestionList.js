import React from 'react'

export default function SuggestionList({ list, handleSelection }) {


    return (
        <div>
            <ul className="suggestionList">
                {list.map((ele, i) => (
                    <>
                        {i < 4 ?
                            <li key={i} onClick={(ele) => handleSelection(ele)}>{ele}</li>
                            : ''}
                    </>
                ))}
            </ul>
        </div>
    )
}
