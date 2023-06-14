"use client";

import React, { useState } from 'react';
import Image from "next/image";
import arrow from "../public/icon-arrow.svg";

//Add type definition for the form fields
interface FormValues {
    date: number;
    month: number;
    year: number;
}

export default function AgeForm() {

    const [formValues, setFormValues] = useState<FormValues>({
        date: 0,
        month: 0,
        year: 0,
    });

    const [age, setAge] = useState<{ years: number; months: number; days: number }>({
        years: 0,
        months: 0,
        days: 0,
    });

    const [errors, setErrors] = useState<string[]>([]);
    


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: Number(value), // parse the value as a number
        }));
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // validate the form
        const isValid = validateForm(formValues); 
        if (isValid) {
            // form submit logic 
            const today = new Date();
            const birthdate = new Date(
                formValues.year,
                formValues.month - 1,
                formValues.date
            );

            const diffInMs = today.getTime() - birthdate.getTime();
            const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));
            const diffInMonths = Math.floor(
                (diffInMs % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12))
            );
            const diffInDays = Math.floor(
                (diffInMs % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24)
            );
            console.log(`You are ${diffInYears} years, ${diffInMonths} months, and ${diffInDays} days old`);
            setAge({ years: diffInYears, months: diffInMonths, days: diffInDays });
        }
    };

    const validateForm = (values: FormValues): boolean => {
        // check if any field is empty
        if (!values.date || !values.month || !values.year) {
            console.error('All fields are required');
            return false;
        }
        // check if the day is between 1-31
        const day = Number(values.date);
        if (day < 1 || day > 31) {
            console.error('Day must be between 1-31');
            return false;
        }
        // check if the month is between 1-12
        const month = Number(values.month);
        if (month < 1 || month > 12) {
            console.error('Month must be between 1-12');
            return false;
        }
        // check if the year is in the future
        const year = Number(values.year);
        const currentYear = new Date().getFullYear();
        if (year > currentYear) {
            console.error('Year cannot be in the future');
            return false;
        }
        // check if the date is valid
        const isValidDate = (d: number, m: number, y: number) =>
            m > 0 && m <= 12 && d > 0 && d <= new Date(y, m, 0).getDate();
        if (!isValidDate(day, month, year)) {
            console.error('The date is invalid');
            return false;
        }
        // if all checks passed, the form is valid
        return true;
    };


    return (
        <>
            <form onSubmit={handleSubmit} >
                <section id="input" className='flex justify-between'>

                    <div>
                        <label htmlFor="date" 
                        className='w-[80%] block mx-auto font-semibold text-SmokeyGrey'>DAY</label>
                        <input
                            placeholder='DD'
                            id="date"
                            name="date"
                            onChange={handleChange}
                            className='w-[80%] block mx-auto rounded-md font-bold text-OffBlack p-4'
                        />
                        <span></span>
                    </div>

                    <div >
                        <label htmlFor="month" className='w-[80%] block mx-auto font-semibold text-SmokeyGrey'>MONTH</label>

                        <input
                            placeholder='MM'
                            id="month"
                            name="month"
                            onChange={handleChange}
                            className='w-[80%] block mx-auto rounded-md font-bold text-OffBlack p-4'
                        />
                    </div>
                    
                    <div >
                        <label htmlFor="year" className='w-[80%] block mx-auto font-semibold text-SmokeyGrey'>YEAR</label>
                        <input
                            placeholder='YYYY'
                            id="year"                            
                            name="year"
                            onChange={handleChange}
                            className='w-[80%] block mx-auto rounded-md font-bold text-OffBlack p-4'
                        />
                    </div>
                </section>

                <button className="bg-Purple block rounded-full p-2 mx-auto my-[10%]">
                    <Image src={arrow} alt="arrow" />
                </button >
            </form>

            <section id="output" className=''>
                <p className='text-OffBlack font-extrabold text-3xl italic dark:text-Offwhite'>
                    <span className='text-Purple mr-2'>{age.years}</span>years</p>
                <p className='text-OffBlack font-extrabold text-3xl italic dark:text-Offwhite'>
                   <span className='text-Purple mr-2'>{age.months}</span> months</p>
                <p className='text-OffBlack font-extrabold text-3xl italic dark:text-Offwhite'>
                   <span className='text-Purple mr-2'>{age.days}</span> days</p>
            </section>
        </>
    )
}
