import { useImperativeHandle, useRef } from "react"

export default function ResultModal({ref, result, targetTime }) {
    const dialogRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        };
    });

    return <dialog className="result-modal" ref={dialogRef}>
        <h2>You { result }</h2>
        <p>The Target Time was <strong>{ targetTime } seconds.</strong></p>
        <p>You Stopped the Timer with <strong>X seconds left</strong></p>
        <form action="dialog">
            <button>Close</button>
        </form>
    </dialog>
}