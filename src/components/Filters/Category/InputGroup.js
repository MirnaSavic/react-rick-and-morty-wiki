import React from 'react'

const InputGroup = ({total, name, setID}) => {
    console.log([...Array(total).keys()])
    return (
        <div class="input-group mb-3">
           
            <select
            onChange={e => setID(e.target.value)}
            class="form-select" 
            id={name}
            >
                <option selected value="1">Choose...</option>

                {[...Array(total + 1).keys()].map((x) => {
                    return(
                        <option value={x+1}>{name}-{x+1}</option>
                    )
                })}
                
            </select>
        </div>
    )
}

export default InputGroup
