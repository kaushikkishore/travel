import React, { Component } from "react";


const HeaderAndContent = props => {
        const ssss = props.content.map(item => {
            return (
                <label className="row">{item}</label>
            );
        });
    
    return (
        <div className="col">
            <h6 className="row">{props.header}</h6>
            {ssss}
        </div>
    )
}



const Link = props => <button type="button" className="btn btn-link btn-sm">{props.name}</button>

const ImageAndContent = props => 
    <div className="col">
        <img className="row"></img>
        <label className="row">{props.content}</label>
    </div>

export {
    HeaderAndContent,
    Link
} 