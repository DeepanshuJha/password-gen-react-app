import React, { useState } from 'react';
import { motion } from 'framer-motion';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';

const PasswordGen = () => {

    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(10);

    const genPassword = () => {
        let text = '';
        for (let i = 0; i < passwordLength; i++) {
            text += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setPassword(text);
    }

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            className="container"
        >
            <h1 className="header">Generate Password</h1>
            <div className="form-control">
                <button className="btn" onClick={genPassword}>Generate</button>
                <label>Length : </label>
                <input type="text" value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} />                
                <br />
                <input type="text" value={password} placeholder="password"/>
                <button className="btn" onClick={() => setPassword('')}>Clear</button>
            </div>
        </motion.div>
    )
}

export default PasswordGen
