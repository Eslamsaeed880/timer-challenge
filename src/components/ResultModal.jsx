import { useImperativeHandle, useRef } from "react"

export default function ResultModal({ref, targetTime, remainingTime, onReset }) {
    const dialogRef = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        };
    });

    return <dialog className="result-modal" ref={dialogRef}>
        {userLost && <h2>You Lost</h2>}
        <p>The Target Time was <strong>{ targetTime } seconds.</strong></p>
        <p>You Stopped the Timer with <strong>{formattedRemainingTime} seconds left</strong></p>
        <form action="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
}