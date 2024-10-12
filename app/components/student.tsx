import React from 'react'
export default function Student(props: {name: string, age: number, salary: number}){

    return(
        <>
        <h1>Name: {props.name}</h1>
        <h1>Age: {props.age}</h1>
        <h1>Salary: {props.salary} </h1>
        </>

    )

}