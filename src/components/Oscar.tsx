// the ReactNode type is a TypeScript type that represents anything that can be rendered by React
type OscarProps = {
    children: React.ReactNode;
}

export const Oscar = (props: OscarProps) => {
    return <div>{props.children}</div>
}