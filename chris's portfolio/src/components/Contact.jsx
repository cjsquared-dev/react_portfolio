// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({name: "", email: "", message: ""});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleBlur = (field) => {
        if (!field) {
            setErrors((prev) => ({...prev, [field]: `${field} is required`}));
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(e.target.value);
        if (value && !validateEmail(value)) {
            setErrors((prev) => ({...prev, email: "Invalid email Address"}));
        }  else {
            setErrors((prev) => ({...prev, email: ""}));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', {name, email, message});
        setName("");
        setEmail("");
        setMessage("");
        setErrors({name: "", email: "", message: ""});
        setIsSubmitted(true);
    };

    return (
        <div className="form">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setIsSubmitted(false);
                        }}
                        onBlur={() => handleBlur("name")}
                        required
                    />
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => {
                            handleEmailChange(e);
                            setIsSubmitted(false);
                        }}
                        onBlur={() => handleBlur("email")}
                        required
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        className="form-control"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                            setIsSubmitted(false);
                        }}
                        onBlur={() => handleBlur("message")}
                        required
                    />
                    {errors.message && <small className="text-danger">{errors.message}</small>}
                </div>
                <button type="submit" className="btn btn-primary mt-2">Send Message</button>
            </form>
            {isSubmitted && <p className="text-success mt-2">Message Sent Successfully!</p>}
        </div>
    );
};

export default Contact;
