import React, { Component } from 'react'
import axios from '../../utils/request'
export default class Person extends Component {
    async componentDidMount(){
        const {data} = await axios.post('/api/personal')
        console.log(data)
    }
    render() {
        return (
            <div>
                个人中心
            </div>
        )
    }
}
