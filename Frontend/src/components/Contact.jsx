function Contact() {
  return (
    <>
    <div className='min-h-screen-2xl container mx-auto px-4 md:px-20 pt-24 text-xl text-center'>
        <h1 className='text-2xl mt-20 font-bold items-center text-center'>Contact Us</h1>
        <p><span className="text-red-600 text-center font-semibold mt-6 mb-4" > We’d love to hear from you!  </span>
        Have questions about our books, orders, or upcoming events? Reach out to us anytime — our friendly team is here to help.</p>

    
   
      <h2 className="text-2xl font-bold p-5 " >Address:</h2>
      <p className="text-base mt-1 ">Book Haven Store
123 Main Street, San Francisco, CA 94105</p>

      <h2 className="text-2xl p-4 font-bold mt-6">Email:</h2>
      <a href="mailto:support@bookstore.com" className="mt-1 block">support@bookstore.com</a>

      <h2 className="text-2xl p-4 font-bold mt-6 ">Phone:</h2>
      <a href="tel:+15551234567">+1 (555) 123-4567</a>
      <h2 className="text-2xl p-4 font-bold mt-6">Store hours</h2>
      <p className="text-base">Monday – Saturday: 9:00 AM – 7:00 PM
Sunday: 10:00 AM – 5:00 PM</p>

<h2 className="text-2xl p-4 font-bold mt-20">Follow Us</h2>
<p className="text-base">Stay connected with us on social media for the latest updates, book recommendations, and special offers!</p>
<div className="hover:cursor-pointer text-blue-800 text-base">
<a href="https://www.facebook.com/">Facebook: facebook.com/bookstore</a><br></br>
<a href="https://x.com/">Twitter: twitter.com/bookstore</a><br></br>
<a href="https://www.instagram.com/">Instagram: instagram.com/bookstore</a><br></br>
</div>
    </div>
 
    </>

  )
}

export default Contact;