

type CcontainerProps = {

    children: React.ReactNode;
}



export const Container = ({ children }: CcontainerProps) => {

    return (
        <>
            <div style={{ margin: "0", display: "flex", gap: "30px" }}>
                {children}
            </div>
        </>
    );

}