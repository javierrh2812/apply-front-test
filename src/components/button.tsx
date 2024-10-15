export function Button(props:{label: string, handleClick: any, fullwidth?: boolean, filled?: boolean}) {
    return (
        <button onClick={props.handleClick}
                className={`button ${props.fullwidth ? 'w-full' : ''} ${props.filled? 'filled': ''}`}>
            <div> {props.label} </div>
        </button>
    )
}