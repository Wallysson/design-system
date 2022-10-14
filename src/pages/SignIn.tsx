import { Envelope, Lock } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { Button } from '../components/Button'
import { Checkbox } from '../components/Checkbox'
import { Heading } from '../components/Heading'
import { Logo } from '../components/Logo'
import { Text } from '../components/Text'
import { TextInput } from '../components/TextInput'
import axios from 'axios'

export function SignIn() {
  const [isUserSignIn, setIsUserSignIn] = useState(false)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await axios.post('/sessions', {
      email: 'wlc.couto@gmail.com',
      password: '123456'
    })

    setIsUserSignIn(true)
  }

  return (
    <div className="bg-gray-900 w-full h-screen flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="mt-10 flex flex-col items-stretch w-full max-w-sm gap-4"
      >
        {isUserSignIn && <Text>Login realizado</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              placeholder="Digite seu e-mail"
              id="email"
              type="email"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              placeholder="******"
              id="password"
              type="password"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8 mb-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-100 underline hover:text-gray-200">
            Esqueceu a sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-100 underline hover:text-gray-200">
            Não possui uma conta? Crie uma agora
          </a>
        </Text>
      </footer>
    </div>
  )
}
