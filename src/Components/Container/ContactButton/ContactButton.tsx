import { useRef } from "react";
import Contact from "../Contact/Contact";

const ContactButton = () => {
  const contactRef = useRef(<Contact />);

  const goToContact = () => {};
  return <button onClick={goToContact}>ContactButton</button>;
};

export default ContactButton;
