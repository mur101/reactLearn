import React from 'react'
import './ModalWindow.css'

class ModalWindow extends React.Component{

    render() {
        return(
            <>
                {this.props.show && (<div className="modal" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close">
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.props.actionFunc}>Ок
                                </button>
                                <button type="button" className="btn btn-primary" onClick={this.props.onHide}>Отмена</button>
                            </div>
                        </div>
                    </div>
                </div>
                    )}
            </>
        )

    }
}
export default ModalWindow;