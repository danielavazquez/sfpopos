import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json'

function POPOSList() {
  const data = props.data;
  const spaces = data.map((obj) => {
    return (
      <POPOSSpace
        name={obj.title}
        address={obj.address}
        image={obj.images[0]}
      />
    )
  })

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}

export default POPOSList

// data = Array.from(props.data);