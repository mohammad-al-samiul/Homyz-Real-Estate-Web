/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import authBgImage from '../../Assets/others/authentication.png';
import authentication2 from '../../Assets/others/authentication2.png';
import { AuthContext } from '../../Providers/AuthProvider';

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const [disable, setDisable] = useState(true);
  const { createUser, profileUpdate } = useContext(AuthContext);

  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisable(false);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    createUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      profileUpdate(name)
        .then(() => {
          console.log('profile updated');
          reset();
          navigate(from, { replace: true });
        })
        .catch((error) => console.log(error.message));
    });
  };

  return (
    <>
      <Helmet>
        <title>Regal Dragon | Sign up</title>
      </Helmet>
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
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="photo"
                  {...register('photo', { required: 'photo is required' })}
                  className="input input-bordered"
                />
              </div>
              {errors.photo && <p className="text-red-600">{errors.name.message}</p>}
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
                    pattern:
                      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
                {errors.password?.type === 'pattern' && (
                  <p className="text-red-600">Password must be strong </p>
                )}
              </div>
              <div className="form-control">
                <label className="input input-bordered  mt-6">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type Here"
                  className="mt-10 input input-bordered"
                />

                {/* <button className="mt-5 btn btn-sm bg-orange-300 hover:bg-orange-300 text-white font-semibold px-4 ">
                  Verify
                </button> */}
              </div>

              <div className="form-control mt-6">
                <input
                  disabled={disable}
                  className="btn text-white bg-orange-300 hover:bg-orange-300"
                  type="submit"
                  value="Sign up"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
