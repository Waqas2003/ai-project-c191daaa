import React from 'react';

function ContactComponent() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with us to discuss your project requirements.</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactComponent;
```
**Backend (Node.js/Express)**