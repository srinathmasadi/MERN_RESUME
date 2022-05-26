import {useState,useEfffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa';

function Login() {
  const [formData, setFormData] = useState({});

  const onChange = ()=> {

  }

  const onSubmit=(e)=> {
    e.preventDefault();
  }


  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and create your resume</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="email" className="form-control" id='email' 
              name='email' value='' placeholder='Enter your email' onChange={onChange}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id='password' 
              name='password' value='' placeholder='Enter your password' onChange={onChange}/>
          </div>
          <div className="form-group">
            <button type="submit" className='btn btn-block'>
              Log-In
            </button>
          </div>
        </form>
        
      </section>
    </>
  )
}

export default Login