import React from 'react'
import ModalWindow from "../ModalWindow/ModalWindow";

class MainContents extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            showModal:false
        }
    }

    hideModal=()=>{
        this.setState({showModal: false})
    }

    showModalBtn=()=>{
        this.setState({showModal:true})
    }

    getWeather=()=>{
        this.hideModal()
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Perm&appid=b88af28ca5b20c082131abefd7123e49")
            .then((response)=>{
                console.log(response)
            })
            .catch(()=>{
                console.log("Fetch error")
            })
    }

    render() {
        return (
        <div>
            <button type="button" className="btn btn-primary" onClick={this.showModalBtn}>Запустить модальное окно</button>
            <ModalWindow show={this.state.showModal} onHide={this.hideModal} actionFunc={this.getWeather}/>
        </div>
        )
    }
}
export default MainContents;