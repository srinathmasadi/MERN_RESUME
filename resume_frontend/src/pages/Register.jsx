import {useState,useEfffect} from 'react'
import {FaUser} from 'react-icons/fa';

function Register() {
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
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
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
            <input type="password" className="form-control" id='confirmPassword' 
              name='confirmPassword' value='' placeholder='Re-enter password' onChange={onChange}/>
          </div>
          <div className="form-group">
            <button type="submit" className='btn btn-block'>
              Register
            </button>
          </div>
        </form>
        
      </section>
    </>
  )
}

export default Register