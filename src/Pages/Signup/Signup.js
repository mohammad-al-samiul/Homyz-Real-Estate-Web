/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import authBgImage from '../../Assets/others/authentication.png';
import authentication2 from '../../Assets/others/authentication2.png';
import { AuthContext } from '../../Providers/AuthProvider';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const [disable, setDisable] = useState(true);
  const captchaRef = useRef();
  const { loading, createUser } = useContext(AuthContext);

  const handleCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisable(false);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div style={{ backgroundImage: `url(${authBgImage})` }} className="p-24 bg-base-200 ">
      <div className="p-8 lg:flex lg:flex-row justify-center items-center border-x-4 border-y-4  shadow-lg">
        <div className="lg:w-1/2">
          <img src={authentication2} alt="" />
        </div>
        <div className="card  lg:w-2/5 ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h3 className="text-2xl font-bold text-center">Sign Up </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="name"
                placeholder="name"
                {...register('name', { required: 'Name is required' })}
                className="input input-bordered"
              />
            </div>
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register('email', { required: 'Email is required' })}
                className="input input-bordered"
              />
              {errors.email && <p className="text-red-600"> {errors.email.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register('password', {
                  required: 'Password is require',
                  minLength: 6,
                  maxLength: 20
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}
            </div>
            <div className="form-control">
              <label className="input input-bordered  mt-6">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="Type Here"
                className="mt-10 input input-bordered"
              />

              <button
                onClick={handleCaptcha}
                className="mt-5 btn btn-sm bg-green-500 hover:bg-green-600 text-white font-semibold px-4 ">
                Verify
              </button>
            </div>

            <div className="form-control mt-6">
              <input
                // disabled={disable}
                className="btn text-white bg-orange-300 hover:bg-orange-300"
                type="submit"
                value="Sign up"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
