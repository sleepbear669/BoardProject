/**
 * Created by sleepbear on 2016. 6. 15..
 */

import React from 'react';

class PageLocation extends React.Component{

    handlePageChange = (num) => {
        return () => {
            this.props.fetch(num);
        };
    };

    render(){
        let pageNum = [];
        const page = this.props.page;
        for(let i = 0 ; i < page.totalPages; i++){
            pageNum.push(
                (<span
                    onTouchTap={this.handlePageChange(i)}
                    key={i}>
                    {i + 1}
                </span>)
            );
        }
        return (
            <div>
                {pageNum}
            </div>
        )
    }
}

export default PageLocation;