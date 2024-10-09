import React from 'react';
import './Card.css';

const Card = () => {
    const details = [{
        id : 1,
        name : 'Zayn',
        age : 25,
        designation : 'Comedian',
        team:'Round to Hell Team',
        imageURL : 'https://i.pinimg.com/564x/8f/67/55/8f675555c348d39ba19529e9af2bd036.jpg',
        summary : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat debitis officiis eligendi laboriosam molestias nam voluptatibus nemo dicta fuga!'
    },
    {
      id : 2,
      name : 'Amir',
      age : 23,
      designation : 'Comedian',
      team:'Top Real Team',
      imageURL : 'https://yt3.googleusercontent.com/ytc/AIdro_lZi07tDx5ikd7WteiSLk1nWWdAoWEO5Z4HD2ACEcq0Ozw=s900-c-k-c0x00ffffff-no-rj',
      summary : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat debitis officiis eligendi laboriosam molestias nam voluptatibus nemo dicta fuga!'
  },
  {
    id : 3,
    name : 'Salman',
    age : 26,
    designation : 'Comedian',
    team:'Round to World Team',
    imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7rMsErWBO4LuvaeXOQdhqtarmfJg6W1ohQ&s',
    summary : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat debitis officiis eligendi laboriosam molestias nam voluptatibus nemo dicta fuga!'
},
{
  id : 4,
  name : 'Danish',
  age : 26,
  designation : 'Comedian',
  team:'Top Real Team',
  imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR12eR4KgTNr8dPuB_P97JSErV9en6bGEkZTXEIJwhBAe1iJ3f8jnBhMoIUkDroMz_mo&usqp=CAU',
  summary : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat debitis officiis eligendi laboriosam molestias nam voluptatibus nemo dicta fuga!'
},
    {
        id : 5,
        name : 'Nazim',
        age : 28,
        designation : 'Comedian',
        team:'Round to Hell Team',
        imageURL : 'https://i.pinimg.com/originals/86/02/a6/8602a6b78d89aca89e598f8549d800cd.jpg',
        summary : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat debitis officiis eligendi laboriosam molestias nam voluptatibus nemo dicta fuga!'
    },
    {
      id : 6,
      name : 'Anas',
      age : 24,
      designation : 'Comedian',
      team:'Round to World Team',
      imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUkevGZD53siZeUF-FMMJkZTCPmKKMoCpLjw&s',
      summary : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat debitis officiis eligendi laboriosam molestias nam voluptatibus nemo dicta fuga!'
  },  
  {
    id : 7,
    name : 'Faizan',
    age : 25,
    designation : 'Comedian',
    team:'Top Real Team',
    imageURL : 'https://yt3.googleusercontent.com/PuVs1XGV-DguX4tDn0h2uJ_qoPsLM7Ys4EbQpdi9K1rQxbgi0BrTQACttdb9stJ8177dtSz2T0Y=s900-c-k-c0x00ffffff-no-rj',
    summary : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat debitis officiis eligendi laboriosam molestias nam voluptatibus nemo dicta fuga!'
},
    {
        id : 8,
        name : 'Wasim',
        age : 25,
        designation : 'Comedian',
        team:'Round to Hell Team',
        imageURL : 'https://media.licdn.com/dms/image/v2/D4D22AQG5NgrGeQ4t3Q/feedshare-shrink_800/feedshare-shrink_800/0/1695205381704?e=2147483647&v=beta&t=FOh9XoQ4-tB-ePaD6vG0ph1IC3RhnMRHbOqry9g-qfk',
        summary : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat debitis officiis eligendi laboriosam molestias nam voluptatibus nemo dicta fuga!'
    },
{
  id : 9,
  name : 'Nadir',
  age : 'NA',
  designation : 'Comedian',
  team:'Top Real Team',
  imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbtJPgLTQSZISbJyJyngT7yP9BGYk1QdNXw&s',
  summary : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat debitis officiis eligendi laboriosam molestias nam voluptatibus nemo dicta fuga!'
} 
]
// check the detils what is showing the in the array API Like Data 
// console.log(details)
// if i check the id using filter method
// console.log(details.filter((check)=>check.id%2===0));
  return (
    <>
    <h1 className='main-heading'>All Comedians</h1>
    <div className='grid grid-cols-3 items-center justify-center gap-5 mt-16 w-full mx-auto'>

      {details.map((detail)=>(
        <div key={detail.id} className="card m-auto w-full shadow-2xl rounded-lg">
        <ul style={{listStyle:'none'}}>
              <img src={detail.imageURL} alt={`${detail.name}'s Profile`} className=' w-full h-52 object-fill rounded-md ' />
              <div className='gap-5 text-left'>
            <li>Name : {detail.name}</li>
            <li>Age : {detail.age}</li>
            <li>Designation : {detail.designation}</li>
            <li>Team : &nbsp; 
              <span className=
              {`team-common ${(detail.team==='Round to Hell Team') ? 'r2h-team' : 
              (detail.team==='Round to World Team') ? 'r2w-team' : 
              (detail.team==='Top Real Team') ? 'trt-team' : ''}`}>
                {detail.team}
                </span></li>
            </div>  
            <p className='mt-5 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat debitis officiis eligendi laboriosam molestias nam voluptatibus nemo dicta fuga!</p>
        </ul>
        </div>
        
      )
      
      )}
    </div>
    </>
  )
}

export default Card