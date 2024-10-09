interface Props {
    href: string,
    text: string
}

export default function NavLink({href, text}: Props){
    return(
        <a className="border p-2 rounded-lg" href={href}>{text}</a>
    )
}