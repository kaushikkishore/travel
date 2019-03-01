import React, { Component } from "react";

const HeaderAndLabelRows = props => {
    
    return (
        <div className={"col " + props.passClass}>
            <h6 className="row">{props.header}</h6>
            <RowsOfLabels content={props.content} />
        </div>
    )
}

// Might want to enter default props to avoid failure

const RowsOfLabels = props => {
    return (
        <>
        {props.content.map(item => {
            return (
                <label className='row'>{item}</label>
            );
        })}
        </>
    )
}

const ListOfSpans = props => {
    return (
        <>
        {props.content.map(item => {
            return (
                <div className='text-center'>
                    <span>{item}</span>
                </div>
            );
        })}
        </>
    )
}

const RowsOfLinks = props => {
    return (
        <>
        {props.content.map(item => {
            return (
                <div className='row'>
                    <Link name={item} />
                </div>
            );
        })}
        </>
    )
}


const Link = props => <button type="button" className="btn btn-link btn-sm">{props.name}</button>

const ImageAndLabelRows = props => 
    <div className="container">
        <img src={props.imgSrc} className="row mx-auto" ></img>
        <ListOfSpans content={props.content} />
    </div>

export {
    HeaderAndLabelRows,
    ImageAndLabelRows,
    RowsOfLinks,
    Link
} 