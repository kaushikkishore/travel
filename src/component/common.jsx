import React, { Component } from "react";

const HeaderAndLabelRows = props => {
    
    return (
        <div className={props.classes}>
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
                <label className="row">{item}</label>
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
                <div className={props.classes}>
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
                <div className={props.classes}>
                    <Link name={item} />
                </div>
            );
        })}
        </>
    )
}


const Link = props => <button type="button" className="btn btn-link btn-sm">{props.name}</button>

const ImageAndLabelRows = props => 
    <>
        <div className="row">
            <img src={props.imgSrc} className={props.classes} />
        </div>
        <ListOfSpans content={props.content} classes={props.classes}/>
    </>

export {
    HeaderAndLabelRows,
    ImageAndLabelRows,
    RowsOfLinks,
    Link
} 