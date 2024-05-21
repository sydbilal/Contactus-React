import styles from "./ContactForm.module.css"
import Button from "../button/Button"
import {MdMessage} from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

export default function ContactForm() {

  const onCallSubmit = ()=>{
    console.log("call is clicked")
  }
  const onChatSubmit = ()=>{
    console.log("chat is clicked")
  }
  const onEmailSubmit = ()=>{
    console.log("email is clicked")
  }
  const [name, setName] = useState("Your Name")
  const [email, setEmail] = useState("Example@mail.com")
  const [comment, setComment] = useState("Your comment example...")

  const onSubmit = (event)=>{
    event.preventDefault()
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setComment(event.target[2].value)
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>

        <div className={styles.top_btn}>
        <Button onClick={onCallSubmit} text="VIA CHAT SUPPORT" icon={<MdMessage fontSize="24px"/>}/> 
        <Button onClick={onChatSubmit} text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/> 
        </div>
        <Button onClick={onEmailSubmit} isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px"/>}/> 

        <form onSubmit={onSubmit}>
          <div className={styles.form_controller}>
            <label htmlFor="name"/>Name<label/>
            <input type="text" name="name"/>
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="email"/>Email<label/>
            <input type="email" name="email"/>
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="text"/>Text<label/>
            <textarea rows="8" name="text"/>
          </div>
          <div style={{display:"flex", justifyContent:"end", marginTop:"10px"
          }}>
          <Button text="SUBMIT" />
          </div>
          <div>{name + " ~~ " + email + " ~~ " + comment}</div>
        </form>

      </div>
      <div className={styles.contact_image}>
        <img src="/images/service.png" alt="contact image"/>
      </div>
    </section>
  )
}
