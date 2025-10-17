import ContactForm from '@/app/contact/_components/contactForm'
import ContactInfo from '@/app/contact/_components/contactInfo'
import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-svh py-16 md:py-32'>
        <div className='container mx-auto px-8 lg:px-0 flex flex-col lg:flex-row items-center justify-center gap-16'>
            <ContactInfo />
            <ContactForm />
        </div>
    </div>
  )
}

export default Contact