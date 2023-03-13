import React, { useEffect, useState } from 'react'
//on every character change serach provided by this HOC
const NormalFilterHOC = ({Comp,placeholder}) => {
    const [query, setQuery] =useState("");
    const [state,setState]=useState({
        data:[],
        loading:true,
        error:''
    })
    useEffect(() => {
          fetch(`https://dummyjson.com/products/search?q=${query}`)
          .then(res=>res.json())
          .then((response) => {
            console.log('res=>',response)
            state.data=[...response.products]
            state.loading=false
            setState({...state})
          });
        setState({...Comp,loading:true})
      }, [query])
  return (
   <>
<div className="col-12 d-flex justify-content-center">
<div class="input-group  m-3">
    <input
      type="text"
      class="form-control"
      placeholder={placeholder}
       aria-label="Normal Search"
      aria-describedby="basic-addon2"
      onChange={(event) => setQuery(event.target.value)}
    />
    <span class="input-group-text" id="basic-addon2">
    <i className="bi bi-search"></i>
    </span>
  </div>
</div>
   <Comp {...state}  />
   </>
  )
}

export default NormalFilterHOC