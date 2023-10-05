'use client'

import { useParams } from "next/navigation"

export default function Report() {
  const params = useParams();
  console.log(params)
  return (
    <h1>
      ask Page, askSeq: {params.askSeq}
    </h1>
  )
}
