export default function Sections({TITLE,children, ...props}){
    return(
        <section {...props}>
            <h2>{TITLE}</h2>
            {children}
        </section>
    );
}