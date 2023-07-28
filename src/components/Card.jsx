

export const Card = (props) => {
    return (
        <div className="col">
            <div className="card">
                <img src="{props.imagem}" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                    </div>
            </div>
        </div>
    )
}
