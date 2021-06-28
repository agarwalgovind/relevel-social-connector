import React from "react";
import "../styles/edit.css"
import { Form, Field } from "@leveluptuts/fresh";

const EditPage = () => {

    const onSubmit = (data) => console.log(data);

    const securityQuestions = [
        "What is your mother's maiden name?",
        "What was the name of your first pet?",
        "What was the name of your first school?"
    ];

    return (
        <div className="splitScreen">
            <div className="topPane">
                        <div className="ui card">
                            <div className="image"><img src="icons/m1.jpg"/></div>
                            <div className="content">
                                <div className="header">James</div>
                                <div className="meta">"Joined in 2017"</div>
                                <div className="description">"James is a comedian living in Nashville."</div>
                            </div>
                            <div className="extra content"><a><i aria-hidden="true" className="user icon"></i>10</a></div>
                        </div>
            </div>
        <div className="bottomPane">
            <Form formId="user-profile" onSubmit={onSubmit} cancelButton={false}>
                <Field required>First Name</Field>
                <Field required>Last Name</Field>
                <Field required type="email">
                    Email
                </Field>

                <Field required type="select" options={securityQuestions}>
                    Security Question
                </Field>
                <Field required>Security Answer</Field>

                <Field type="textarea">Description</Field>
            </Form>
        </div>
        </div>
    );
}

export default EditPage;