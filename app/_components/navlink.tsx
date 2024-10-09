interface Props {
    href: string,
    text: string
}

export default function NavLink({href, text}: Props){
    return(
        <a className="p-2 rounded-lg hover:bg-gray-500 hover:text-orange-200" href={href}>{text}</a>
    )
}