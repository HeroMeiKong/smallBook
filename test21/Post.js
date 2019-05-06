import React from 'react'

const Post = props => {
	const node ={}
  	return (
    <p ref={ p => { node.p = p } } onClick={() => console.log(node.p.clientHeight)}>{props.content}</p>
  )
}

export default Post