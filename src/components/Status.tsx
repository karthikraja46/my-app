type StatusProps = {
    status: 'loading' | 'success' | 'error' | 'not-found';
}

export const Status = (props: StatusProps) =>{
    let message;
    if (props.status === 'loading'){
        message = 'Loading.....'
    } else if (props.status === 'success'){
        message = 'Data Fetched Successfully'
    } else if (props.status === 'error'){
        message = 'Error Fetching Data'
    } else if (props.status === 'not-found'){
        message = 'Data Not Found'
    }
    return(
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}