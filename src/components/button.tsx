export function Button(props:{label: string, handleClick: any}) {
    return (
        <button onClick={props.handleClick}
                className="w-full border-[1px] border-[#3B3B3B] rounded-lg uppercase py-4 px-6">
            <div>
            {props.label}
            </div>
        </button>
    )

}