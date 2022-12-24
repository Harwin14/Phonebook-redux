const contacts = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CONTACT_SUCCESS':
            return action.contacts.map(item => ({
                id: item.id,
                name: item.name,
                phone: item.phone,
                sent: true
            }))
        case 'ADD_CONTACT':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    phone: action.phone,
                    sent: true
                }
            ]
        case 'ADD_CONTACT_SUCCESS':
            return state.map(item => {
                if (item.id === action.id) {
                    return {
                        id: action.user.id,
                        name: action.user.name,
                        phone: action.user.phone,
                        sent: true
                    }
                }
                return item
            })  

        case 'ADD_CONTACT_FAILURE':
            return state.map(item => {
                if (item.id === action.id)
                 {
                    item.sent = false
                }
                return item
            })

            // this.setState((state) => ({
            //             contacts: state.contacts.map(item => {
            //                 if (item.id === id) {
            //                     return { ...item, sent: false }
        
            //                 }
            //                 return item
            //             })

        case 'REMOVE_CONTACT_SUCCESS':
            return state.filter(item => item.id !== action.id)
        case 'REMOVE_CONTACT_FAILURE':
        case 'LOAD_CONTACT_FAILURE':
        default:
            return state
    }
}

export default contacts