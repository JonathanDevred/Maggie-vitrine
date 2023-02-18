import Header from "../../Header";
import React from "react";
import ContactForm from "../../ContactForm";

const HomePage = () => {

    return (
        <section className="container">
            <Header />

            <h1>Page de présentation</h1>

            <h2>Me contacter </h2>
            <ContactForm />
        </section>

    )

}

export default HomePage;