

type FlexElementProps = {
    flex?: number;
    children?: React.ReactNode;
}

export const FlexElement = ({ flex, children }: FlexElementProps) => {

    return (
        <>
            <div style={{ flex: flex }}>
                {children}
            </div>
        </>
    );

}