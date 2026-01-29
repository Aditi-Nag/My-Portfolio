import React,{useState} from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const[Name , setName] = useState('');
    const[Email , setEmail] = useState('');
    const[Mobile , setMobile] = useState('');
    const [Subject ,setSubject] =useState('');
    const[Message , setMessage] =useState('');


const handleNameChange =(e) =>{
   setName(e.target.value)
}
const handleEmailChange =(e) =>{
   setEmail(e.target.value)
}
const handlMobileChange =(e) =>{
   setMobile(e.target.value)
}
const handleSubjectChange =(e) =>{
      setSubject(e.target.value)
}
const handleMessageChange =(e) =>{
        setMessage(e.target.value)
}
   
    const handleOnSubmit=(e) =>{
         console.log("form is submitted");
         console.log(Name ,Email, Mobile);
         e.preventDefault();

      

    const serviceId = 'service_gehyuxe';
    const templateId = 'template_eds30ro';
    const publicKey = 'G8KAv4BaM0qfT-B1i6pde';

    const templateParams = {
        from_name: Name,
        from_email: Email,
        mobile_number: Mobile,
        subject: Subject,
        message: Message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message Sent Succesfully")

            setName('');
                setEmail('');
                setMobile('');
                setSubject('');
                setMessage('');
        })
        .catch((err) => {
            console.error('FAILED...', err);
            alert("Submission failed. Check console for details")
        });
};
         

       
  return (
    
   
       <motion.div
             initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, ease: "easeOut" }}
           >
             <div className='contact-me'>Contact me</div>
             
              <section className="contact" id="contact">
                <form action=''  onSubmit={handleOnSubmit}>
                 <div className="input-box">
            <input type="text" value={Name} onChange={handleNameChange}placeholder="Enter Your Name" />
            <input type="email" value={Email} onChange={handleEmailChange} placeholder="Enter your Email" />
        </div>

        <div className="input-box">
            <input type="text" value={Mobile} onChange= {handlMobileChange}placeholder=" Enter Your Mobile" />
            <input type="email"  value={Subject} onChange={handleSubjectChange}placeholder="Enter Your Subject" />
        </div>

         <textarea name="" id="" cols="30" rows="10"  value={Message} onChange={handleMessageChange} placeholder=" Enter Your Message"></textarea>

        <input type="submit" value="Submit" className="btn" />
             </form>
            </section>
            
           </motion.div>
  )
};

export default Contact;
   
    

        
   