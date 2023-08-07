'use client'

interface Props {
  title: string;
  legend: string;
}

const Heading:React.FC<Props> = ({title, legend}) => {
  return (
    <>
      <h2 className='md:text-[2rem] font-bold text-dark-gray leading-[3rem]'>{title}</h2>
      <p className='text-gray text-base'>{legend}</p>
    </>
  )
}

export default Heading