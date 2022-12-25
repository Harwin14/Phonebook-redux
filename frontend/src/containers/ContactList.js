import React, { Component }  from 'react';
import { loadContact, removeContact, resendContact, updateContact, searchContact } from "../actions/contacts";
import ContactItem from "../components/ContactItem"
import { connect } from "react-redux";

class ContactList extends Component {

    componentDidMount() {
        this.props.load()
    }
    render() {
     console.log("users",this.props.contacts)
        return (
            <div
            onScroll={scrolling} 
            style={{ overflowY: "scroll", height: 380 }} 
            className="card-b shadow  mt-5 mx-auto d-flex justify-content-evenly d-flex flex-wrap" >
                {
                    this.props.contacts.map((user, index) => (
                        <ContactItem
                            key={user.id}
                            no={index + 1}
                            contact={user}
                            sent={user.sent}
                            remove={() => this.props.remove(user.id)}
                            resend={() => this.props.resend(user.id, user.name, user.phone)}
                            update={(name, phone) => this.props.update(user.id, name, phone)}
                            search={(name, phone) => this.props.search(user.id, name, phone)}

                        />
                    ))
                }
            </div>
        )
    }
}

const scrolling = (event) => {
    console.log("ini scroll")
    var element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        //  
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    load: () => dispatch(loadContact()),
    remove: (id) => dispatch(removeContact(id)),
    resend: (id, name, phone) => dispatch(resendContact(id, name, phone)),
    update: (id, name, phone) => dispatch(updateContact(id, name, phone)),
    search: (id, name, phone) => dispatch(searchContact(id, name, phone)),
})
const mapStateToProps = (state, ownProps) => ({
    contacts: state.contacts
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList)
//     return (
//         <div onScroll={scrolling} style={{ overflowY: "scroll", height: 200 }}>
//             <table className="table-responsive table-striped" >
//                 <thead >
//                     <tr className="r">
//                         <th>#</th>
//                         <th>Name</th>
//                         <th>Phone</th>
//                         <th className="act">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody >
//                     {props.data.map((user, index) =>
//                         <ContactItem
//                             key={user.id}
//                             no={index + 1}
//                             contact={user}
//                             remove={() => props.remove(user.id)}
//                             update={(name, phone) => props.update(user.id, name, phone)}
//                             resend={() => props.resend(user.id, user.name, user.phone)}
//                         />
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     )
 //}