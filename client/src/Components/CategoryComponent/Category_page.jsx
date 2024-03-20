import React from 'react'
import { useParams } from 'react-router-dom'

const Category_page = () => {
    const {category_name} = useParams()
  return (
    <div>
        <h1>{category_name}</h1>
    </div>
  )
}

export default Category_page