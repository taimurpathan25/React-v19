import React, { useState } from 'react'

export function StateWithObject() {
    const users = [
        {
            name:'Taimur Khan',
            caste:'Pathan',
            age:24,
            religion:'Islam',
            gender:'Male',
            maritalStatus:'Single',
            Designation:'Software Developer'
        },
        {
            name:'Gayur Khan',
            caste:'Pathan',
            age:26,
            religion:'Islam',
            gender:'Male',
            maritalStatus:'Single',
            Designation:'Pharmacist'
        },
        {
            name:'Kaleem Saqlaini',
            caste:'Qureshi',
            age:26,
            religion:'Islam',
            gender:'Male',
            maritalStatus:'Single',
            Designation:'Software Developer'
        },
        {
            name:'Amaan Khan',
            caste:'Pathan',
            age:26,
            religion:'Islam',
            gender:'Male',
            maritalStatus:'Single',
            Designation:'Lab Technician'
        },
        {
            name:'Mobeen Ansari',
            caste:'Ansari',
            age:25,
            religion:'Islam',
            gender:'Male',
            maritalStatus:'Single',
            Designation:'Pharmacist'
        },
    ]

    const [detail,setDetail] = useState(users)
    const detailCount = detail.length; // detailCount is the derived state
    const averageAge = detail.reduce((accum, anyElement) => accum + anyElement.age, 0) / detailCount; // derived state average age of user
  return (
    <>
    
    <h1>Friend List Details</h1>
    {
        detail.map((user,index)=>{
            return(
            <ul key={index}>
                <li><b>Name</b> : {user.name} - and all details is here, <b>Caste</b>:- '{user.caste}, <b>Age</b>:- {user.age}, <b>Religion</b>:- {user.religion}, <b>Gender</b>:- {user.gender}, <b>MaritalStatus</b>:- {user.maritalStatus}, <b>Designation</b>:-{user.Designation}'</li>
            </ul>
            )
        })
    }
    <li className='list-none text-orange-800 text-3xl'>All Average Age of Detailed Users : <b>{averageAge}</b></li>
    <li className='list-none text-orange-400 text-2xl'>Total User Details : <b>{detailCount}</b></li>
    </>
  )
}
