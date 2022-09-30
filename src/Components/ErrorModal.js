import './ErrorModal.css';

const ErrorModal = (props)=>{

    const classes= 'error-modal' + props.className;

    return (
        <div className='error-modal'>
            <p className='error-panel'>{props.message}</p>
        </div>
    );
}

export default ErrorModal;