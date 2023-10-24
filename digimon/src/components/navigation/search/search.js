import {useState} from 'react'


export default function Form( props) {
    const [formData, setFormData] = useState({searchterm: ""})
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value })
    }
  
    const handleSubmit = (event) => {
      event.preventDefault()
     
    }
  
    return (
      <div className="">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchterm"
            onChange={handleChange}
          />
          <button
            type="submit"
            value="Submit">
            SEARCH  
            </button>
            
          
        </form>
      </div>
    )
  };