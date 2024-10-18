import { BodyRoot } from './Body'
import { Generator } from '@/components/generator'
import { PasswordHolder } from '@/components/passwordHolder'
import { useState } from 'react';
import { Conditions } from '@/components/conditions'
import { NavBar } from '@/components/navBar';

export function HomeRoot() {
  const [value, setValue] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState('generate new password')

  const data = { password, setPassword, value, numbers, symbols, setNumbers, setSymbols, setValue }
  return (
    <div
      initial={{ opcaity: 1 }}
      className="flex flex-col justify-start items-center sm:justify-start w-full h-screen p-3 m-0 bg-radial-blue-neutral">
      <NavBar />
      <BodyRoot />
      <Conditions setNumbers={setNumbers} setSymbols={setSymbols} numbers={numbers} symbols={symbols} />
      <Generator {...data} />
      <PasswordHolder {...data} />
    </div>
  )
}
