/**
 * Created by sleepbear on 2016. 6. 15..
 */

import React from 'react';

const pageStyle = {
    container : {
        display : 'flex',
        alignItems : 'center',
        justifyContent: 'center'
    },
    item : {
        fontSize : '20px',
        display : 'inline-block',
        margin : '0 5px 0 5px'
    }
};

class PageLocation extends React.Component{

    handlePageChange = (num) => {
        return () => {
            if (this.props.page.number != num) this.props.fetch(num);
        };
    };

    render(){
        let pageNum = [];
        const page = this.props.page;
        for(let i = 0 ; i < page.totalPages; i++){
            pageNum.push(
                (<span
                    style={pageStyle.item}
                    onTouchTap={this.handlePageChange(i)}
                    key={i}>
                    {i + 1}
                </span>)
            );
        }
        return (
            <div style={pageStyle.container}>
                {pageNum}
            </div>
        )
    }
}

export default PageLocation;