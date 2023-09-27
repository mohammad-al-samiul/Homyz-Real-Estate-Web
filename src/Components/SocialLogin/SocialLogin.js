import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      const data = result.user;

      const name = data.displayName;
      const email = data.email;

      const user = { name, email };
      fetch(`http://localhost:5000/users`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
          toast.success('User created successfully');
        });
    });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
          <FaGoogle />
        </button>
        <button className="mx-2 btn btn-circle btn-outline">
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
