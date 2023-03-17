import Header from "./header"

export default function ({
    title,
    children }: {
        title: string,
        children: JSX.Element
    }) {

    return <>
        <Header title={title} />
        {children}
    </>
}