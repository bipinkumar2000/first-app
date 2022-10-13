import './ErrorModal.css';

const ErrorModal = (props)=>{

    // const classes= 'error-modal' + props.className;

    const closeButtonClickHandler = () =>{
        props.onClose();
    }

    return (
        <div className='error-modal'>
            <p className='error-panel'>{props.message}<span onClick={closeButtonClickHandler} className='close'>&times;</span></p>
        </div>
    );
}

export default ErrorModal;