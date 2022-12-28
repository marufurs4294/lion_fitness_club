import React from 'react';

const Blog = () => {
    return (
        <div className='container py-3'>
            <div className='text-center pb-3'>
                <h1>About React</h1>
            </div>
            <div className='text-start'>
                <p className='fw-bold fs-4'>How does React Work?</p>
                <div className='d-flex'>
                    <div className='pe-2'><p className='fw-bold'>Answer:</p></div>
                    <div><p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p></div>
                </div>
                
            </div>
            <div className='text-start'>
                <p className='fw-bold fs-4'>What is the diffrence between Props and state?</p>
                <div className='d-flex'>
                    <div className='pe-2'><p className='fw-bold'>Answer:</p></div>
                    <div><p> Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument to React.createElement()</p></div>
                </div>
                
            </div>
        </div>
    );
};

export default Blog;