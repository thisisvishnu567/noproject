import React, { useState } from 'react';
import OtpInput from 'otp-input-react';
import './OT.css';

const OTPComponent = () => {
    const [OT, setOTP] = useState('');

    return (
        <div className='otp-wrapper'>
            <div className='otp-container1'>
                <OtpInput 
                    value={OT}
                    onChange={setOTP}
                    numInputs={6}
                    isInputNum={true}
                    disabled={false}
                    autoFocus
                    className="otp-container"
                />
                <button className='verify-button'>Verify OTP</button>
            </div>
        </div>
    );
}

export default OTPComponent;
