import React,{Component} from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';

export default class RouterPage extends Component{
    render(){
        return (
            <div>
                <h1>RouterPage</h1>
                <BrowserRouter>
                <nav>
                    <Link>首页</Link>
                    <Link>入驻加盟</Link>
                    <Link>开放平台</Link>
                    <Link>社会责任</Link>
                    <Link>点外卖</Link>
                    <Link>下载手机版</Link>
                </nav>
                </BrowserRouter>
            </div>
        )
    }
}