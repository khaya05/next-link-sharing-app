import {useState} from 'react'
import Image from 'next/image'

type FormAction = 'LOGIN' | 'REGISTER'

export default function LoginPage() {
  const [formType, setFormType] = useState<FormAction>('LOGIN')
  
  const heading = formType === 'LOGIN'? 'Login': 'Si'

  return <div>

    <Image src='' width={ } height={ } alt='loggo' />
    <form>
      <h2>{heading}</h2>
      <legend>{legend}</legend>
      {/* <input type='text' */}
    </form>
  </div>;
}
