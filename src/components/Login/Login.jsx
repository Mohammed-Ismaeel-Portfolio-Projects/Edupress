import React from 'react'
import Button from '../button/button'
import PasswordInput from '../PasswordInput/PasswordInput'

const Login = () => {
  return (
    <div className="Login w-1/2 p-7 max-md:w-full">
      <h1 className="text-3xl font-semibold font-exo text-black mb-7">Login</h1>
      <form action="" method="post">
        <div className="w-full flex-col flex gap-5">
          <div className="input">
            <input
              type="text"
              className="w-full h-12 rounded-lg border border-grey px-4 outline-none"
              placeholder="Email or username*"
              required
            />
          </div>
          <PasswordInput placeholder={'Password*'} />
        </div>
        <div className="remember flex gap-1 my-5 ">
          <input type="checkbox" name="rememberMe" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <Button buttonText={'Login'} className={'w-full mb-5'} />
        <a href="" className="text-lg text-black ">
          Lost your password?
        </a>
      </form>
    </div>
  )
}

export default Login
