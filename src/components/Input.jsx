export const Input = ({type = "text", placeholder, onChange, name, value}) => {
  return (
    <input name={name} type={type} className='w-full p-2 border-1 border-gray-400 rounded-md focus:outline-gray-400 placeholder-gray-400' placeholder={placeholder} onChange={onChange} value={value}/>
  )
}
