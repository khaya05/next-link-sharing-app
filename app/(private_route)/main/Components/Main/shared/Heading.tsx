'use client'

interface Props {
  title: string;
  legend: string;
}

const Heading:React.FC<Props> = ({title, legend}) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{legend}</p>
    </>
  )
}

export default Heading