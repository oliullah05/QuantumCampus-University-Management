import React from 'react';
import { useForm } from 'react-hook-form';

const QuantumCampusForm = ({onSubmit,children}) => {
const {handleSubmit}= useForm()


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
           {children}
        </form>
    );
};

export default QuantumCampusForm;