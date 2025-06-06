import { type CardProps } from "@/interfaces/index"

export default function Card(props:CardProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}