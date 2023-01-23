import React, {useState, useEffect} from 'react'

const Contact = () => {

  const [userData, setUser]=useState({
    name:"",
    phone:"" ,
    email:"",
    message:""
  });

  const userContact = async () => {
    try {
      const res =await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        
      });

      let data = await res.json();
      console.log(data);
      setUser({...userData, name:data.name, email:data.email, phone:data.phone});

      if (!res.status === 200) {
        const error=new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    userContact();
  }, []);

  //we store data into the state
  const handleInput=(e)=>
  {
    let name=e.target.name;
    let value=e.target.value;

    setUser({...userData, [name]:value});
  }

  const contactForm=async(e)=>
  {
    e.preventDefault();

    let {name, email, phone, message}=userData;

    let res=await fetch("/contact", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name, email, phone, message
      })
    })

    let data=await res.json();
    console.log(data);

    if(!data)
    {
      console.log("msg not found !");
    }else
    {
      alert("msg send...");
      setUser({...userData, message:""})
    }
  }

  return (
    <>
      <div className="contactDetails">
        <div className="personalDetails container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="bio">
                <i class="fa-solid fa-mobile-screen-button c-icon"></i>

                <div className="biodetails">
                  <div className="title">
                    Phone
                  </div>
                  <div className="text">
                    91+ {!userData.phone ? " (000) 0000-000" :userData.phone}
                  </div>
                </div>
              </div>

            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="bio">
                <i class="fa-solid fa-envelope c-icon"></i>
                <div className="biodetails">
                  <div className="title">
                    Email
                  </div>
                  <div className="text">
                    {!userData.email ? "user@gmail.com" : userData.email}
                  </div>
                </div>
              </div>

            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="bio">
                <i class="fa-solid fa-location-dot c-icon"></i>

                <div className="biodetails">
                  <div className="title">
                    Address
                  </div>
                  <div className="text">
                    Andheri East, Mumbai India
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CONTACT FORM */}

        <div className="contact container">
          <form method='POST' className='form'>
            <h2 className='form-head'>GET IN TOUCH</h2>
            <div className="personalBio">
              <div className="form-group">
                <input type="text" className="form-control" id="name" name="name" onChange={handleInput} value={userData.name} placeholder="Your Name" />
              </div>

              <div className="form-group">
                <input type="email" className="form-control" id="email" name="email" onChange={handleInput} value={userData.email} placeholder="Your Email" />
              </div>

              <div className="form-group">
                <input type="number" className="form-control" id="phone" name="phone" onChange={handleInput} value={userData.phone} placeholder="Your PhoneNumber" />
              </div>

            </div>

            <textarea class="form-control" id="exampleFormControlTextarea1" name="message" onChange={handleInput} value={userData.message} rows="5" placeholder='Message'></textarea>

            <button className='btn signup btnR' type="submit" onClick={contactForm}> SUBMIT </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
