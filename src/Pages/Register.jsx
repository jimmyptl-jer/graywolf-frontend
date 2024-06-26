import { Link } from 'react-router-dom'
import RegisterForm from "../Forms/Login/RegisterForm"
import GrayWolf from '../assets/logo.png';

const Register = () => {

  return (
    <div className="min-h-screen mt-10">
      <div className="flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        <div className="flex-1 items-center flex-col justify-center">
          <img
            src={GrayWolf}
            alt="Logo"
            className="w-50 h-50 object-contain justify-center"
          />
          <p className='text-center mt-2'>
            Welcome to My Community!
            <span className='block font-normal'>
              Let create, inspire, and build a supportive community where ideas thrive. Welcome aboard!
            </span>
          </p>
        </div>

        <div className="flex-1">
          <RegisterForm />
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/login' className='text-blue-500'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;