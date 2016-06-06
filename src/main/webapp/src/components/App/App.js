/**
 * Created by sleepbear on 2016. 6. 1..
 */
import React from 'react';
import Comments from './../Comments/Comments';
import NavBar from './../NavBar/NavBar';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Comments/>
                <form action="http://117.17.102.241:8080/api/upload" method="post" encType="multipart/form-data">
                    <input type="file" name="upload" id=""/>
                    <button type="submit">보내기</button>
                </form>
            </div>
        )
    }
}

export default App;