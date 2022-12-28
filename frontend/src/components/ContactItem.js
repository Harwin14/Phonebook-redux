
import React, { Component } from 'react';
//ContactItem berupa tag yg memiliki atribut no, name, phone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'

export default class ContactItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: false,
            name: props.contact.name,
            phone: props.contact.phone
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleUpdate = () => {
        this.props.update(this.state.name, this.state.phone)
        this.setState({ isEdit: false })
    }
    render() {
        if (this.state.isEdit) {
            return (
                <div className="my-3 mx-3 shadow py-3 px-4 cardlist">
                    <div className='' >
                        <div className="">
                            <input type='text' name='name' value={this.state.name} onChange={this.handleInputChange}
                                className='p-2 m-2 form-control ' required />
                        </div>
                        <div className=''>
                            <input type='tel'  name='phone' id='phone' value={this.state.phone} onChange={this.handleInputChange}
                                className='p-2 m-2  form-control ' required />
                        </div>
                        <div className='d-flex justify-content-around align-items-stretch py-2'>
                            <button onClick={this.handleUpdate}
                                className='button-87'> Update</button>

                            <button type='button' onClick={() => this.setState({ isEdit: false })}
                                className='button-85'> Cancel</button>
                        </div>

                    </div>

                </div>
            )
        } else {
            // console.log("sent", this.props.contact.sent)
            return (

                <div className="my-3 mx-3 shadow py-3 px-4 cardlist" >
                    <div className='' >
                        <div className="">
                            <div className=''><FontAwesomeIcon icon={faIdBadge} /> <span className='font'> Name : </span><span>{this.state.name}</span>
                            </div>
                            <div className=''>
                                <FontAwesomeIcon icon={faPhoneSquare} /><span className='font'> Phone : </span><span>{this.state.phone}</span>
                            </div>
                            <div className='d-flex justify-content-around align-items-stretch py-2'>
                                <button onClick={() => this.setState({ isEdit: true })} className='button-29'>
                                    Edit
                                </button>
                                <button onClick={this.props.sent ? this.props.remove : this.props.resend} className={this.props.sent ? 'button-49' : 'btn btn-w'}>
                                    {this.props.sent ? 'Delete' : 'Resend'}
                                </button>
                            </div>

                        </div>

                    </div>
                </div>

            )
        }
    }
}
        // render() {
        // if (this.state.isEdit) {
        //     return (
        //         <tr className="r">
        //             <td>{this.props.no}</td>
        //             <td>
        //                 <input name="name" type="text" className="form-control" value={this.state.name} onChange={this.handleInputChange} />
        //             </td>
        //             <td>
        //                 <input name="phone" type="text" className="form-control" value={this.state.phone} onChange={this.handleInputChange} />
        //             </td>
        //             <td>
        //                 <button className="btn btn-p" type="button"
        //                     onClick={this.handleUpdate}><FontAwesomeIcon icon={faPencil} /> Save
        //                 </button>
        //                 <button className="btn btn-w" type="button"
        //                     onClick={() => this.setState({ isEdit: false })}><FontAwesomeIcon icon={faTrashCan} /> Cancel
        //                 </button>
        //             </td>
        //         </tr>
        //     )
        // } else {
        //     return (
        //         <tr className="r">
        //             <td>{this.props.no}</td>
        //             <td>{this.props.contact.name}</td>
        //             <td>{this.props.contact.phone}</td>
        //             {this.props.contact.sent ?
        //                 <td>
        //                     <button
        //                         className="btn btn-s"
        //                         type="button"z
        //                         onClick={() => this.setState({ isEdit: true })}>
        //                         <FontAwesomeIcon icon={faPencil} /> edit
        //                     </button>
        //                     <button
        //                         className={this.props.contact.sent ? "btn btn-d" : "btn btn-w"} type="button"
        //                         onClick={this.props.contact.sent ? this.props.remove : this.props.resend}>
        //                         <FontAwesomeIcon icon={faTrashCan} />
        //                         {this.props.contact.sent ? " DELETE" : " RESEND"}
        //                     </button>
        //                 </td>
        //                 :
        //                 <td>
        //                     <button
        //                         className={this.props.contact.sent ? "btn btn-d" : "btn btn-w"} type="button"
        //                         onClick={this.props.contact.sent ? this.props.remove : this.props.resend}>
        //                         <FontAwesomeIcon icon={faTrashCan} />
        //                         {this.props.contact.sent ? " DELETE" : " RESEND"}
        //                     </button>
        //                 </td>
        //             }
        //         </tr>
        //     )
        // }
        // }
