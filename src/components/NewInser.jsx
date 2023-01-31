import { Link } from 'react-router-dom'

const NewInser = () => {
  return (
    <div>
        <span>
            <Link to="/insertData">
                <span className="fixed bottom-20 right-9 z-10 h-12 w-12 rounded-full bg-inherit flex justify-center items-center text-3xl border border-gray-400">+</span>
            </Link>          
        </span> 
    </div>
  )
}

export default NewInser
