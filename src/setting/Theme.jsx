import { useContext } from 'react';
import { Link } from 'react-router-dom'
import Back from '../components/Back';
import authContext from '../helper/AuthContext';
const colorA = {
  C1: {background: "#579BB1", color: '#F8F4EA'},
  C2: {background: "#E1D7C6", color: '#000'},
  C3: {background: "#ECE8DD", color: '#000'},
  C4: {background: "#F8F4EA", color: '#000'},
  C5: {background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}

}
const colorB = {
  C1: {background: "#EEB76B", color: '#310B0B'},
  C2: {background: "#E2703A", color: '#9C3D54'},
  C3: {background: "#9C3D54", color: '#E2703A'},
  C4: {background: "#310B0B", color: '#EEB76B'},
  C5: {background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}
  
  
}
const colorC = {
  C1: {background: "#F2F3F3", color: '#000'},
  C2: {background: "#F3A953", color: '#000'},
  C3: {background: "#366ED8", color: '#000'},
  C4: {background: "#064ACB", color: '#fff'},

}
const colorD = {
  C1: {background: "#F3F3F3", color: '#222'},
  C2: {background: "#303841", color: '#fff'},
  C3: {background: "#3A4750", color: '#333'},
  C4: {background: "#2185D5", color: '#579BB1'}
}

const Theme = () => {
  const {color, setColor, lang} = useContext(authContext);

  // const handlTheme = ()=> {
    // setColor(wthem)
    // return '#'+(
    //   (1 << 24)+
    //   (r << 16)+
    //   (g << 8)+ b
    // ).toString(16).slice(1)
    
  // }
  // console.log(handlTheme(255, 255, 255));

  return (
    <div className='flex flex-col h-full'>
      <header style={color.C1} className='flex justify-end p-4'> 
        <Back />
      </header>
      <div className='flex flex-col justify-center align-middle items-center h-full'>
        <div style={color.C1} className='p-4 rounded-xl'>
        <div className="p-4 text-center text-xl">{lang.theme[0]}</div>
        <div className='flex flex-wrap'>
          <button className=' bg-black h-28 w-16 ' onClick={()=> setColor(colorA)}></button>
          <button className=' bg-white h-28 w-16 ' onClick={()=> setColor(colorB)}></button>         
          <button className=' bg-pink-600 h-28 w-16 ' onClick={()=> setColor(colorC)}></button>
          <button className=' bg-[rgb(2,0,36)] bg-[linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)] h-28 w-16 ' onClick={()=> setColor(colorD)}></button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Theme
