import React, { useId } from 'react'

const UseId = () => {
    document.title='Prop Drilling'

    // 1st way to write 
    // const nameId = useId();
    // const usernameId = useId();
    // const passwordId = useId();

    // second way to write
     const id = useId();


     const handleForm = (e) => {
        console.log(e.target.value)
     }
    return (
        <>
    <form onChange={handleForm}>
        <div className="nameInput mb-2">
            <label htmlFor={id + "nameId"}>Full Name &nbsp;: </label>
            <input type="text" name="name" id={id + "nameId"} className='border-black border-2' />
        </div>
        <div className="usernameInput mb-2">
            <label htmlFor={id + "usernameId"}>User Name : </label>
            <input type="text" name="name" id={id + "usernameId"} className='border-black border-2' />
        </div>
        <div className="passwordInput mb-2">
            <label htmlFor={id + "passwordId"}>C Password : </label>
            <input type="text" name="name" id={id + "passwordId"} className='border-black border-2' />
        </div>
    </form>
    </>
  )
}

export default UseId
// 1st way to write 