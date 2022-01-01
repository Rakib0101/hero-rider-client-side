import React from "react";
import AppBar from "../../shared/AppBar/AppBar";
import Footer from "../../shared/Footer/Footer";
import LearnerSignUpForm from "../../shared/SignUpForm/LearnerSignUpForm";
import RiderSignUpForm from "../../shared/SignUpForm/RiderSignUpForm";
const SignUp = () => {
    
    
    return (
        <div>
            <AppBar></AppBar>
            <div className=''>
                <div className='container mx-auto flex flex-col md:flex-row'>
                    <RiderSignUpForm></RiderSignUpForm>
                    <LearnerSignUpForm></LearnerSignUpForm>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;
