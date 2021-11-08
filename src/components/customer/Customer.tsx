


export const Customer = () => {

    return (
        <div className="item" style={{ display: "flex", flexDirection: "column", gap: "30px", padding: "3rem" }}>

            <div>
                <h4>INFORMACION DE CLIENTE</h4>
            </div>
            <hr />

            <div className="flex flex-dir-col gap-20">
                <span>
                    JOSHERT WILMER PARRA CARDONA
                </span>
                <span>
                    Cedula: 1143831929
                </span>

            </div>

            <hr />

            <div className="flex flex-dir-col gap-20">

                <strong>
                    DIRECCION
                </strong>
                <span>
                    KR 54 A # 5 A - 21 <br />
                    CALI, VALLE
                </span>

                <span>
                    Apto 902A
                </span>
            </div>

        </div>
    );
}