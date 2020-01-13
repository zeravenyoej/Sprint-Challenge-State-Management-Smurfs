import React from 'react';


const Form = (props) => {

    const newSmurf = {
        name: '',
        age: '',
        height: ''
    }

    const handleChange = (e) => {
        e.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // props.postData(newSmurf);
    };

    return (
        <div>
            Add a new Smurf!
            <form onSubmit={handleSubmit}>
                <label>
                Name: 
                    <input
                    type='text'
                    name='name'
                    value=''
                    placeholder='name'
                    required
                    onChange={handleChange}
                    />
                </label>
                <label>
                Age: 
                    <input
                    type='text'
                    name='age'
                    value=''
                    placeholder='write in 123'
                    required
                    onChange={handleChange}
                    />
                </label>
                <label>
                height: 
                    <input
                    type='text'
                    name='height'
                    value=''
                    placeholder='write in cm'
                    required
                    onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;