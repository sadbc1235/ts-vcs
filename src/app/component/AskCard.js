import Link from "next/link";

export function AskCard(props) {
    return (
        <Link href={`/use/${props.askSeq}`} className="askCard">
            <div className="innerTop">
                <div className="cardRowNum">{props.cardRowNum}</div>
                <div className="cardTitle">{props.cardTitle}</div>
                <div className={`cardState ${props.cardState}`}>{props.cardState}</div>
            </div>
            <div className="innerBottom">
                <div className="cardCustomer">{props.cardCustomer}</div>
                <div className="cardWriter">{props.cardWriter}</div>
                <div className="cardWriteDt">{props.cardWriteDt}</div>
            </div>
        </Link>
    )
}