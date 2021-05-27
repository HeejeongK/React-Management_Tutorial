import React from 'react';

class CustomerDelete extends React.Component{

    deleteCustomer(id) {
        console.log(id)
        
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
        //삭제 후 삭제된 후 고객목록 보기.
}
render(){
    return (
        <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</button>
    )
}
}

export default CustomerDelete;