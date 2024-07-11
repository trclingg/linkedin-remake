import React from 'react'
import "./Widget.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widget() {
    const newsArticle = (heading, subtitle) => (
        <div className="widget__article">
            <div className="widget__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
    return (
        <div className='widget'>
            <div className="widget__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("LinkedIn New Feature Is Up", "Top news - 9000 readers")}
            {newsArticle("Corona Virus US updates", "Top news - 8000 readers")}
            {newsArticle("Tesla hits new high", "Top news - 3000 readers")}
            {newsArticle("Bitcoin breaks $22,000", "Top news - 2500 readers")}

        </div>
    )
}

export default Widget
