import { useEffect, useState } from "react";

const Payment = () => {
    const initalPayment = {
        zaad: false,
        evc: false,
        dahab: false,
    }

    const [payment, setPayment] = useState(initalPayment);
    const [updated, setUpdated] = useState(false);
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const paymentProcess = async () =>  {
        try {
            const body = {
                
            }
        } catch (e) {
            console.log(e);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        paymentProcess();
    }

    useEffect(() => { }, [updated]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-3">
                <h1 className="text-xl font-semibold">Pay With</h1>
                <div className="space-y-4">
                    <div onClick={() => setPayment({ zaad: true, evc: false, dahab: false })} className={`font-semibold border border-gray-300 rounded-lg text-center py-2 px-1 hover:cursor-pointer hover:bg-sky-300/25 ${payment.zaad && 'bg-sky-300/25 border-sky-900 border-2'}`}>
                        <h1>Zaad</h1>
                    </div>
                    <div onClick={() => setPayment({ zaad: false, evc: true, dahab: false })} className={`font-semibold border border-gray-300 rounded-lg text-center py-2 px-1 hover:cursor-pointer hover:bg-sky-300/25 ${payment.evc && 'bg-sky-300/25 border-sky-900 border-2'}`}>
                        <h1>EVC Plus</h1>
                    </div>
                    <div onClick={() => setPayment({ zaad: false, evc: false, dahab: true })} className={`font-semibold border border-gray-300 rounded-lg text-center py-2 px-1 hover:cursor-pointer hover:bg-sky-300/25 ${payment.dahab && 'bg-sky-300/25 border-sky-900 border-2'}`}>
                        <h1>E-Dahab</h1>
                    </div>
                </div>
                <input
                    className="font-medium border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-700 focus:outline-sky-900"
                    type="text"
                    placeholder="25261..."
                    onChange={(event) => setPhone(event.target.value)}
                />
                <button type="submit" className="border-2 rounded-lg py-2 px-4 w-full bg-sky-900 text-white hover:bg-white border-sky-900 hover:border-2 hover:text-sky-900 duration-150">Process</button>
            </div>
        </form>

    )
}

export default Payment