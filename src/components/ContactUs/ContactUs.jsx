import React from 'react'
import Button from '../button/button'

const ContactUs = () => {
  return (
    <div className="w-11/12 mx-auto my-16">
      <h1 className="text-3xl font-exo font-semibold text-black">Contact Us</h1>
      <p className="mt-5 text-gray text-lg font-normal ">
        Your email address will not be published. Required fields are marked *
      </p>
      <div className="contact-form w-full mt-8">
        <form action="" method="post">
          <div className="flex justify-between w-full gap-5 max-md:flex-col">
            <div className="input w-1/2 max-md:w-full">
              <input
                type="text"
                className="w-full h-12 rounded-lg border border-grey px-4 outline-none"
                placeholder="Name*"
              />
            </div>
            <div className="input w-1/2 max-md:w-full">
              <input
                type="text"
                className="w-full h-12 rounded-lg border border-grey px-4 outline-none"
                placeholder="Email*"
              />
            </div>
          </div>
          <div className="input text-area w-full mt-4">
            <textarea
              name=""
              id=""
              className="w-full h-28 border-grey border rounded-lg resize-none outline-none px-4 py-2"
              placeholder=" Comment"
            ></textarea>
          </div>
          <div className="save flex gap-1 my-5 ">
            <input type="checkbox" name="" id="save" />
            <label for="save">
              Save my name, email in this brower for the next time I comment
            </label>
          </div>
          <Button buttonText={'Posts Comment'} />
        </form>
      </div>
    </div>
  )
}

export default ContactUs
