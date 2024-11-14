import React, { useState } from 'react'
import Button from '../components/Button'
import RenderItem from '../components/RenderItem';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function ContactForm() {
    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { name, email, subject, message } = inputValue;

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        if (!name) {
            toast.warning("Please enter a name");
            return;
        }
        if (!email) {
            toast.warning("Please enter an email");
            return;
        }
        if (!subject) {
            toast.warning("Please enter a subject");
            return;
        }
        if (!message) {
            toast.warning("Please enter your message");
            return;
        }

        const data = {
            from_name: name,
            from_email: email,
            from_subject: subject,
            message
        }

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EmailJs_SERVICE_ID,
                process.env.NEXT_PUBLIC_EmailJs_TEMPLATE_ID,
                data,
                process.env.NEXT_PUBLIC_EmailJs_PUBLIC_KEY
            )
            .then(
                () => {
                    toast.success("Email sent successfully! Will contact you soon!");
                    setIsSubmitted(true);
                    setInputValue({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    })
                },
                (error) => {
                    toast.error("Error sending mail, Please try again later");
                    setIsSubmitted(false);
                },
            );
    };

    return (
        <RenderItem>
            <form
                onSubmit={handleSubmit}
                className="space-y-6 shadow-[0_0_30px_0_rgba(0,0,0,0.25)] py-3 md:py-5 px-2 md:px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={onInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                            placeholder="Your Email"
                        />
                    </div>
                </div>

                {/* Subject */}
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={subject}
                        onChange={onInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                        placeholder="Subject"
                    />
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={onInputChange}
                        rows="4"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                        placeholder="Your Message"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className='flex justify-center'>
                    <Button
                        disabled={isSubmitted}
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full md:w-auto px-6 py-2 bg-sky-700 text-white font-bold rounded-md hover:bg-sky-800 transition-all"
                    >
                        Send Message
                    </Button>
                </div>
            </form>
        </RenderItem>
    )
}
