import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ChoosePlan.scss'

const ChoosePlan = ({ type, price }) => {
    const [features, setFeatures] = useState()

    const freePlan = [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices"
    ]
    const standartPlan = [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware"
    ]
    const premiumPlan = [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Get New Features"
    ]

    useEffect(() => {
        setFeatures(freePlan)
        featurePlan()
    }, [])

    const featurePlan = () => {
        if (type === 'free') {
            setFeatures(freePlan)
        }
        if (type === 'standart') {
            setFeatures(standartPlan)
        }
        if (type === 'premium') {
            setFeatures(premiumPlan)
        }
    }

    const pricePlan = () => {
        if (type === 'free') {
            return <span className="utils fw-500">{price}</span>
        }
        if (type === 'standart') {
            return (
                <>
                    <span className="utils fw-500">${price}</span> / mo
                </>
            )
        }
        if (type === 'premium') {
            return (
                <>
                    <span className="utils fw-500">${price}</span> / mo
                </>
            )
        }
    }

    return (
        <div className="card-plan w-full my-5 md:my-0 mx-auto md:mx-5">
            <div>
                <img src="/assets/imgs/free.webp" alt="free" className="mx-auto" />
                <h3 className="text-center utils fz-18 line-height-30 fw-500 color-black-800 my-7">Free Plan</h3>
                {features && features?.map((feature, i) => (
                    <p className="flex utils fz=14 line-height-30 color-gray-700 mb-2.5" key={i}>
                        <img src="/assets/icons/checklist-green.svg" alt="checklist" className="mr-6" /> {feature}
                    </p>
                ))}

                <p className="flex utils fz=14 line-height-30 color-gray-700 mb-2.5">
                    <img src="/assets/icons/checklist-green.svg" alt="checklist" className="mr-6" /> Encrypted Connection
                </p>
            </div>
            <div>
                <p className="utils fz-25 line-height-30 color-black-800 mb-5 text-center">{pricePlan()}</p>
                <Link to="#" className="utils btn-2">Select</Link>
            </div>
        </div>
    )
}

export default ChoosePlan