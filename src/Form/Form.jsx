import React from 'react';

function Form() {
    
    return (
        <main>
            <h2></h2>

            <form>
                <label for="alias">Name</label>
                <input type="text" name="alias" id="alias"></input>

                <label for="password">Password</label>
                <input type="password" name="password" id="password"></input>
                
                <input type="submit" value="send"></input>
            </form>
        </main>
    )
}

export default Form;