import Products from '@/components/Products/Products/Products'
import React from 'react'

export default function gendersPage({ params }) {
  return (
    <>
        <Products title={params.genderId} />
    </>
  )
}
