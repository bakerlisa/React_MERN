import React from 'react';

const Apply = (props) => {
    return(
        <div>
            <h1>Apply</h1>
            <form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName"/>
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName"/>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email"/>
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone"/>
                </div>

                <input type="submit" class="submit" />
            </form>
        </div>
    );
}

export default Apply;